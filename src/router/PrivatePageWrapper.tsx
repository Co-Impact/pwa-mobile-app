import { Navigate, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../components/layout/AuthLayout";

interface PrivatePageWrapperProps {
  children: React.ReactNode;
}

const PrivatePageWrapper: React.FC<PrivatePageWrapperProps> = ({
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
