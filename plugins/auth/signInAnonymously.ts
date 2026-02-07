import {
  signInAnonymously as firebaseSignInAnonymously,
  getAuth,
} from "firebase/auth";
import app from "@/plugins/firebase";

const auth = getAuth(app);
const signInAnonymously = () => firebaseSignInAnonymously(auth);
export default signInAnonymously;
