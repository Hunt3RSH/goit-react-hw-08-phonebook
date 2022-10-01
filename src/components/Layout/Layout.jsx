import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import { NavBar } from './NavBar';
import { StyledContainer } from 'components/ContactForm/ContactForm.styled';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <StyledContainer>
        <Outlet />
      </StyledContainer>
      <Footer />
    </>
  );
};
