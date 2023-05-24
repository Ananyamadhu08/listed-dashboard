import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();

  if (!localStorage.getItem('listed-TOKEN')) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
