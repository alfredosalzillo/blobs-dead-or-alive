import { signOut as firebaseSignOut, getAuth } from "firebase/auth";
import app from "@/plugins/firebase";

const auth = getAuth(app);
const signOut = () => firebaseSignOut(auth);
export default signOut;
