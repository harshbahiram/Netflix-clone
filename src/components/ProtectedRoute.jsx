import { useEffect, useState } from "react";
import { auth } from "../firebase/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  // Show nothing while Firebase checks the login state
  if (user === undefined) {
    return null;
  }

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Logged in
  return children;
};

export default ProtectedRoute;