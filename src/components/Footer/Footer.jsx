import { StyledContainer } from 'components/ContactForm/ContactForm.styled';
import { Copy, CopyWrapper, FooterStyle } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyle>
      <StyledContainer className="centerItem">
        <CopyWrapper>
          © 2022 created by
          <Copy href="https://github.com/Hunt3RSH" target="_blank">
            Hunt3R
          </Copy>
        </CopyWrapper>
      </StyledContainer>
    </FooterStyle>
  );
};

export default Footer;
