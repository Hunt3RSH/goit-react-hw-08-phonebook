import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/authUsers/authSelectors';

const PublicRoute = ({ children }) => {
  const isToken = useSelector(getToken);

  if (isToken) {
    return <Navigate to="/contacts" />;
  }

  return children;
};
export default PublicRoute;
