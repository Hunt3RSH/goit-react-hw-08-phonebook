import { StyledLabel } from 'components/ContactForm/ContactForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/authUsers/authOperations';
import { Button, Form } from 'react-bootstrap';
import { FormRegister } from './loginPage.styled';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <FormRegister onSubmit={handleSubmit}>
      <StyledLabel>
        Email:
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledLabel>
        Password
        <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </StyledLabel>
      <Button type="submit">Login</Button>
    </FormRegister>
  );
};
