import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authUsers/authSelectors';

const PublicRoute = ({ children }) => {
  const isToken = useSelector(selectIsLoggedIn);

  if (isToken) {
    return <Navigate to="/phonebook-by-hunt3r/contacts" replace />;
  }

  return children;
};
export default PublicRoute;
