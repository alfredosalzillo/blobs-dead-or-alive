import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import app from '@/plugins/firebase';

const auth = getAuth(app);
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export default signInWithGoogle;
