import { UserAvatar } from 'components/Layout/Layout.styled';
import { Col } from 'react-bootstrap';

export const About = () => {
  return (
    <Col sm={3} className="centerItem">
      <UserAvatar name="User" size="250" unstyled={true} />
    </Col>
  );
};
