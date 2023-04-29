import { getAuth, signInAnonymously as firebaseSignInAnonymously } from 'firebase/auth';

import app from '@/plugins/firebase';

const auth = getAuth(app);
const signInAnonymously = () => firebaseSignInAnonymously(auth);
export default signInAnonymously;
