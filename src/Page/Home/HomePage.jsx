import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserName,
} from 'redux/authUsers/authSelectors';

export default function HomePage() {
  const isLogin = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  return (
    <>
      <h1>Hi {userName}</h1>
      {isLogin ? <p>Welcome.</p> : <p>Please, register or log in.</p>}
    </>
  );
}
