import { initializeApp } from "firebase/app";
import FirebaseConfig from "./Firebase.config";

const firebaseInitAuth = () => {
  initializeApp(FirebaseConfig);
};

export default firebaseInitAuth;
