import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import { StyledContainer } from 'components/ContactForm/ContactForm.styled';
import { Header } from 'components/Header/Header';
import { ToastContainer } from 'react-toastify';

export const Layout = () => {
  return (
    <>
      <Header />
      <StyledContainer fluid>
        <Outlet />
      </StyledContainer>
      <Footer />
      <ToastContainer />
    </>
  );
};
