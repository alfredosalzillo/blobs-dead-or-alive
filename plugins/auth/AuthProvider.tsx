'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  onAuthStateChanged,
  getAuth, signInAnonymously,
} from 'firebase/auth';

import type { User } from 'firebase/auth';

import app from '@/plugins/firebase';

import AuthContext from './AuthContext';

const auth = getAuth(app);

export type AuthProviderProps = {
  children: React.ReactNode,
  autoSignInAnonymously?: boolean,
}
const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
  autoSignInAnonymously = false,
}) => {
  const [user, setUser] = useState<User| null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setReady(true);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (user) return;
    if (!autoSignInAnonymously) return;
    signInAnonymously(auth)
      .then((currentUser) => {
        setUser(currentUser.user);
      })
      .catch((error) => {
        console.error('AuthProvider', error);
      });
  }, [autoSignInAnonymously, ready, user]);
  const value = useMemo(() => ({ user, ready }), [user, ready]);
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
