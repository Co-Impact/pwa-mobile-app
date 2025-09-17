import { Navigate, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../layout/AuthLayout.tsx";
import {FC, ReactNode} from "react";

interface PrivatePageWrapperProps {
  children: ReactNode;
}

const PrivatePageWrapper: FC<PrivatePageWrapperProps> = ({
  children,
}) => {
  const { isAuthenticated } = useAuth(); // Your auth logic here
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <AuthLayout>{children}</AuthLayout>;
};

export default PrivatePageWrapper;
