import React from 'react';

import type { User } from 'firebase/auth';

export type AuthContextValue = {
  user: User | null;
  ready: boolean;
}
const AuthContext = React.createContext<AuthContextValue>({
  user: null,
  ready: false,
});

export default AuthContext;
