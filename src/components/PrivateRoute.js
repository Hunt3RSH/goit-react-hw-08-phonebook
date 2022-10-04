import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/authUsers/authSelectors';

const ProtectedRoute = ({ children }) => {
  const isToken = useSelector(getToken);

  if (!isToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
export default ProtectedRoute;
