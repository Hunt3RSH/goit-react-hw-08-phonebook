import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { GlobalStyles } from 'utils/GlobalStyle';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoading } from 'redux/contacts/selectors';
import { BackDropLoader } from 'components/Layout/BackDrop';
import { SignUpPage } from 'Page/SingUpPage/SingUpPage';
import { LoginPage } from 'Page/LogInPage/loginPage';
import { fetchCurrentUser } from 'redux/authUsers/authOperations';
import HomePage from 'Page/Home/HomePage';
import { getToken } from 'redux/authUsers/authSelectors';

const App = () => {
  const dispatch = useDispatch();
  const Lock = document.getElementById('MainBody');
  const loader = useSelector(getIsLoading);
  const isUserLogin = useSelector(getToken);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <HomePage />
                <ContactForm />
                {isUserLogin ? <LoginPage /> : null}
              </>
            }
          />
          <Route
            path="contacts"
            element={isUserLogin ? <ContactList /> : null}
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <GlobalStyles />
      {loader ? <BackDropLoader /> : null}
      {loader
        ? Lock.classList.add('lockBody')
        : Lock.classList.remove('lockBody')}
    </>
  );
};

export default App;
