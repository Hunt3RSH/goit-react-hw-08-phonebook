import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { GlobalStyles } from 'utils/GlobalStyle';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/Operations';
import { getIsLoading } from 'redux/contacts/selectors';
import { BackDropLoader } from 'components/Layout/BackDrop';
import { About } from 'Page/About/About';
const App = () => {
  const Lock = document.getElementById('MainBody');
  const loader = useSelector(getIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContactForm />} />
          <Route path="contacts" element={<ContactList />} />
          <Route path="about" element={<About />} />
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
