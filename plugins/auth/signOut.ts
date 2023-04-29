import { getAuth, signOut as firebaseSignOut } from 'firebase/auth';

import app from '@/plugins/firebase';

const auth = getAuth(app);
const signOut = () => firebaseSignOut(auth);
export default signOut;
