import { useLocation, Navigate } from 'react-router-dom';

export default function RequireTrailingSlashURL({ children }) {
  const location = useLocation();
  // Allow root path ("/") without trailing slash
  if (location.pathname !== '/' && !location.pathname.endsWith('/')) {
    return <Navigate to="/404/" replace />;
  }
  return children;
}