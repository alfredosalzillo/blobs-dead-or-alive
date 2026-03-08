"use client";

import type React from "react";
import { useEffect, useMemo, useState } from "react";
import type { User } from "firebase/auth";
import {
  getAuth,
  getRedirectResult,
  onAuthStateChanged,
  signInAnonymously,
} from "firebase/auth";
import AuthContext from "./AuthContext";
import app from "@/plugins/firebase";

const auth = getAuth(app);

export type AuthProviderProps = {
  children: React.ReactNode;
  autoSignInAnonymously?: boolean;
};
const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
  autoSignInAnonymously = false,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          setUser(result.user);
        }
      })
      .catch((error) => {
        console.error("AuthProvider: getRedirectResult error", error);
      });

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
        console.error("AuthProvider", error);
      });
  }, [autoSignInAnonymously, ready, user]);

  const value = useMemo(() => ({ user, ready }), [user, ready]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
