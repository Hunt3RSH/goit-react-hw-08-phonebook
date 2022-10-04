import styled from 'styled-components';
import Avatar from 'react-avatar';

export const AvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-height: 150px;
`;

export const AvatarContact = styled(Avatar)`
  width: 100% !important;
`;
