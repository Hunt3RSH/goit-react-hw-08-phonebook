import Navbar from 'react-bootstrap/Navbar';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavListLink = styled(NavLink)`
  text-align: center;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  padding: 10px 5px;
  transition: all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:hover,
  &:focus {
    color: #ffb21b;
  }
  &.active {
    color: #ffb21b;
    &:hover,
    &:focus {
      color: #ffc85b;
    }
  }
`;

export const HeaderWrapper = styled(Navbar)`
  padding-top: 0;
  padding-bottom: 0;
`;

export const HeaderNavigationMobile = styled(Offcanvas.Header)`
  @media (max-width: 767px) {
    background: rgba(13, 21, 32, 1);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  }
`;

export const BodyNavigation = styled(Offcanvas.Body)`
  @media (max-width: 767px) {
    background: rgba(13, 21, 32, 1);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  }
`;
