// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfI45FL-TJISRPCZ9Bt1eu-ERNB_Jg8KM",
  authDomain: "netflix-clone-react-62518.firebaseapp.com",
  projectId: "netflix-clone-react-62518",
  storageBucket: "netflix-clone-react-62518.firebasestorage.app",
  messagingSenderId: "432348888193",
  appId: "1:432348888193:web:11876a578360abef44a180",
  measurementId: "G-02FRNV3KKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);