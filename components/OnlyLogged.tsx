'use client';

import React from 'react';

import useAuth from 'auth/useAuth';

export type OnlyLoggedProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  loading?: React.ReactNode;
}
const OnlyLogged: React.FC<OnlyLoggedProps> = ({
  children,
  fallback,
  loading,
}) => {
  const { ready, user } = useAuth();
  if (!ready) return <>{loading}</>;
  if (!user) return <>{fallback}</>;
  return <>{children}</>;
};

export default OnlyLogged;
