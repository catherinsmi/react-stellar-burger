import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

export default function ProtectedRoute({ onlyUnAuth = false, component }) {
  const isAuthChecked = useSelector((state) => state.user.isAuthChecked);
  const user = useSelector((state) => state.user.user);
  const location = useLocation();

  if (!isAuthChecked) {
    return 'Loading';
  }

  if (onlyUnAuth && user) {
    return <Navigate to="/login" />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/register" />;
  }

  return component;
}

export const OnlyAuth = ProtectedRoute;
export const OnlyUnAuth = ({ component }) => (
  <ProtectedRoute onlyUnAuth={true} component={component} />
);
