import styled from 'styled-components';

export const FooterStyle = styled.footer`
  padding-top: 0.5rem;
`;

export const CopyWrapper = styled.span`
  font-size: 15px;
  font-weight: 400;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Copy = styled.a`
  text-decoration: none;
  margin-left: 5px;
  &:hover,
  &:focus {
    color: red;
  }
`;
