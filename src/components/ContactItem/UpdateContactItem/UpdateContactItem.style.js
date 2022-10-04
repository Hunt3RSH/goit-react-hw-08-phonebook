import Box from '@mui/material/Box';
import styled from 'styled-components';

export const StyledBox = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 750px;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border-radius: 5px;
  padding: 15px;
`;

export const StyledFormEdit = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
`;
