import React from 'react';
import PrivatePageWrapper from './PrivatePageWrapper';
import PublicPageWrapper from './PublicPageWrapper';

interface RouteWrapperProps {
  isProtected?: boolean;
  children: React.ReactNode;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({ isProtected = false, children }) => {
  if (isProtected) {
    return <PrivatePageWrapper>{children}</PrivatePageWrapper>;
  }
  return <PublicPageWrapper>{children}</PublicPageWrapper>;
};

export default RouteWrapper;
