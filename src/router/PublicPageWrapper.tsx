import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import PublicLayout from '../components/layout/PublicLayout';

interface PublicPageWrapperProps {
  children: React.ReactNode;
}

const PublicPageWrapper: React.FC<PublicPageWrapperProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <PublicLayout>{children}</PublicLayout>;
};

export default PublicPageWrapper;
