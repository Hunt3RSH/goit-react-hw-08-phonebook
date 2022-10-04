import styled from 'styled-components';

export const FooterStyle = styled.footer`
  padding-top: 0.5rem;
  position: absolute;
  width: 100vw;
  bottom: 0;
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
export const BackgroundWrapper = styled.div`
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  top: 0;
  width: auto;
  height: auto;
  overflow: hidden;
  z-index: -2;
`;

export const BackgroundSvg = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1920px;
  z-index: -1;
  @media (min-width: 1920px) {
    width: 100%;
  }
`;
