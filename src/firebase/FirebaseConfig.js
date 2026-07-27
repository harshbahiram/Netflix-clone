import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfI45FL-TJISRPCZ9Bt1eu-ERNB_Jg8KM",
  authDomain: "netflix-clone-react-62518.firebaseapp.com",
  projectId: "netflix-clone-react-62518",
  storageBucket: "netflix-clone-react-62518.firebasestorage.app",
  messagingSenderId: "432348888193",
  appId: "1:432348888193:web:11876a578360abef44a180",
  measurementId: "G-02FRNV3KKW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
