import { useEffect, useState } from "react";
import { auth } from "../firebase/FirebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import logo from '../assets/logo.png'

const Navbar = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black via-black/80 to-transparent">

      <div className="flex items-center justify-between px-10 py-5">

        {/* Left */}

        <div>
            <img
              src={logo}
              alt="logo"
              className="w-40 cursor-pointer"
            />
          </div>

        {/* Right */}

        <div className="flex items-center gap-6 text-white">

          <FiSearch
            size={25}
            className="cursor-pointer hover:text-gray-300"
          />

          <div className="w-10 h-10 rounded bg-red-600 flex items-center justify-center font-bold">
            {user?.email?.charAt(0).toUpperCase()}
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;