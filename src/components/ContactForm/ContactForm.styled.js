import { Container, Form } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  margin-bottom: 40px;
`;

export const StyledContainer = styled(Container)`
  background-color: white;
  padding: 10px 15px;
  background: rgba(13, 21, 32, 0.7);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
`;

export const StyledGroup = styled(Form.Group)`
  width: 100%;
`;

export const StyledLabel = styled(Form.Label)`
  width: 100%;
`;
