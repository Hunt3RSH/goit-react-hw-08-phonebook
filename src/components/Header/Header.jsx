import { StyledContainer } from 'components/ContactForm/ContactForm.styled';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Button } from '@mui/material';
import {
  BodyNavigation,
  HeaderNavigationMobile,
  HeaderWrapper,
  NavListLink,
} from './Header.styled';
import { getToken } from 'redux/authUsers/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/authUsers/authOperations';
import logoBook from '../img/logoBook.png';

export const Header = () => {
  const expand = 'md';
  const isLogin = useSelector(getToken);

  const dispatch = useDispatch();
  return (
    <>
      <HeaderWrapper
        key={expand}
        expand={expand}
        className="mb-3"
        variant="dark"
      >
        <StyledContainer fluid>
          <Navbar.Brand href="./phonebook-by-hunt3r">
            <img src={logoBook} alt="Logo" width={120} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <HeaderNavigationMobile closeButton closeVariant="white">
              <Navbar.Brand href="./phonebook-by-hunt3r">
                <img src={logoBook} alt="Logo" width={120} />
              </Navbar.Brand>
            </HeaderNavigationMobile>
            <BodyNavigation>
              <Nav className="justify-content-end flex-grow-1 pe-3 gap-15">
                <Button component={NavListLink} color="inherit" to="/" end>
                  Home
                </Button>
                {isLogin ? (
                  <>
                    <Button
                      component={NavListLink}
                      color="inherit"
                      to="contacts"
                    >
                      My Contacts
                    </Button>
                    <Button
                      component={NavListLink}
                      variant="outlined"
                      color="inherit"
                      onClick={() => dispatch(logout())}
                    >
                      logOut
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      component={NavListLink}
                      variant="outlined"
                      color="inherit"
                      to="signup"
                    >
                      SingUp
                    </Button>
                    <Button
                      component={NavListLink}
                      variant="outlined"
                      color="inherit"
                      to="login"
                    >
                      login
                    </Button>
                  </>
                )}
              </Nav>
            </BodyNavigation>
          </Navbar.Offcanvas>
        </StyledContainer>
      </HeaderWrapper>
    </>
  );
};
