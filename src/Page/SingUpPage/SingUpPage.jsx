import { StyledLabel } from 'components/ContactForm/ContactForm.styled';
import { FormRegister } from 'Page/LogInPage/loginPage.styled';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authUsers/authOperations';

export const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <FormRegister onSubmit={handleSubmit}>
        <StyledLabel>
          Name
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Email
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
        <Button type="submit">SingUP</Button>
      </FormRegister>
    </>
  );
};
