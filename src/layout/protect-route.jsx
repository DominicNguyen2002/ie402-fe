import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function ProtectRoute(children) {
  const token = Cookies.get('Authorization');
  const location = useLocation();

  if (token) {
    return <>{children}</>;
  }

  return <Navigate to={`/sign-in?redirectUrL=${location.pathname}`} replace />;
}
