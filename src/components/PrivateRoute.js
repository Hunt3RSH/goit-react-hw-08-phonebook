import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authUsers/authSelectors';

const ProtectedRoute = ({ children }) => {
  const isToken = useSelector(selectIsLoggedIn);

  console.log(isToken);
  if (!isToken) {
    return <Navigate to="/phonebook-by-hunt3r/login" replace />;
  }

  return children;
};
export default ProtectedRoute;
