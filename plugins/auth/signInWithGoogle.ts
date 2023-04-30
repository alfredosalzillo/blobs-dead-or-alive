import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

import app from '@/plugins/firebase';

const auth = getAuth(app);
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider);
};

export default signInWithGoogle;
