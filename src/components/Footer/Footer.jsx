import { StyledContainer } from 'components/ContactForm/ContactForm.styled';
import {
  BackgroundSvg,
  BackgroundWrapper,
  Copy,
  CopyWrapper,
  FooterStyle,
} from './Footer.styled';
import LowSvg from '../img/LowSvg.svg';
const Footer = () => {
  return (
    <FooterStyle>
      <StyledContainer className="centerItem" fluid>
        <CopyWrapper>
          created by
          <Copy href="https://github.com/Hunt3RSH" target="_blank">
            Hunt3R
          </Copy>
           © 2022
        </CopyWrapper>
      </StyledContainer>
      <BackgroundWrapper>
        <BackgroundSvg src={LowSvg} alt="BG" />
      </BackgroundWrapper>
    </FooterStyle>
  );
};

export default Footer;
