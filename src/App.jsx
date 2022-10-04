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
import ProtectedRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { fetchContacts } from 'redux/contacts/Operations';
import { getToken } from 'redux/authUsers/authSelectors';

const App = () => {
  const dispatch = useDispatch();
  const Lock = document.getElementById('MainBody');
  const loader = useSelector(getIsLoading);
  const isLogin = useSelector(getToken);

  useEffect(() => {
    if (isLogin) {
      dispatch(fetchCurrentUser());
      dispatch(fetchContacts());
    }
  }, [dispatch, isLogin]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <ProtectedRoute>
                <ContactList />
              </ProtectedRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="signup"
            element={
              <PublicRoute>
                <SignUpPage />
              </PublicRoute>
            }
          />
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
