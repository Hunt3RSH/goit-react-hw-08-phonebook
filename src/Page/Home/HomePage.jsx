import ContactForm from 'components/ContactForm/ContactForm';
import { useSelector } from 'react-redux';
import { getToken, selectUserName } from 'redux/authUsers/authSelectors';
import { HomeSubTitle, HomeTitle } from './HomePage.styled';

export default function HomePage() {
  const isLogin = useSelector(getToken);
  const userName = useSelector(selectUserName);

  return (
    <>
      {isLogin ? (
        <HomeTitle>Hi {userName}</HomeTitle>
      ) : (
        <HomeTitle>Welcome Stranger</HomeTitle>
      )}
      {isLogin ? (
        <HomeSubTitle>Welcome back.</HomeSubTitle>
      ) : (
        <HomeSubTitle>Please, register or log in.</HomeSubTitle>
      )}
      {isLogin ? <ContactForm /> : null}
    </>
  );
}
