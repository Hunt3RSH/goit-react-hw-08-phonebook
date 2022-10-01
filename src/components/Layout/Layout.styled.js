import Avatar from 'react-avatar';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavListLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  padding: 15px 5px;
  &:hover,
  &:focus {
    color: red;
  }
  &.active {
    color: #0d6efd;
    &:hover,
    &:focus {
      color: red;
    }
  }
`;

export const BackDropStyled = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  position: fixed;
  z-index: 1001;
  background: rgba(0, 0, 0, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

export const AsideWrapper = styled(Container)`
  display: flex;
`;

export const MainWrapper = styled(Container)`
  display: flex;
  max-width: 1200px;
  background-color: white;
  flex-wrap: wrap;
  border-radius: 5px;
`;
const randomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};
export const UserAvatar = styled(Avatar)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 250px;
  height: 250px;
  background: wheat;
  font-size: 122px;
  border-radius: 5px;
  background: #${() => randomColor()};
`;
