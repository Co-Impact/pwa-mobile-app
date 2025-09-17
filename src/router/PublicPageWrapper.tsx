import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import PublicLayout from "../layout/PublicLayout.tsx";
import {FC, ReactNode} from "react";

interface PublicPageWrapperProps {
  children: ReactNode;
}

const PublicPageWrapper: FC<PublicPageWrapperProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <PublicLayout>{children}</PublicLayout>;
};

export default PublicPageWrapper;
