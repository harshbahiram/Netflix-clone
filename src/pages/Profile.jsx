import React from 'react'
import { useEffect, useState } from "react";
import { auth, db } from "../firebase/FirebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import EditProfile from '../components/EditProfile';
import { collection, getDocs } from 'firebase/firestore';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [showEdit, setShowEdit] = useState(false);

  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

        return unsubscribe;
  }, []);

  const loadFavorites = async () => {

    const snapshot = await getDocs(
        collection(db, "users", user.uid, "favorites")
    );

        setFavorites(
            snapshot.docs.map(doc => doc.data())
        );
    };

    useEffect(() => {
     if (user) {
        loadFavorites();
            }
        }, [user]);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black flex justify-center items-center text-white">

        <div className="bg-zinc-900 w-[500px] rounded-xl p-10 shadow-lg">

          <h1 className="text-4xl font-bold mb-8">
            My Profile
          </h1>

          <div className="flex items-center gap-5 mb-10">

            <div onClick={() => navigate("/profile")}
                className="w-10 h-10 rounded bg-red-600 flex items-center justify-center font-bold cursor-pointer hover:scale-110 transition"
            >
                {user?.email?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                {user?.displayName || user?.email?.split("@")[0]}
              </h2>

              <p className="text-gray-400">
                {user?.email}
              </p>
            </div>

          </div>

          <div className='flex gap-4 mt-8'>
            <button
            onClick={() => setShowEdit(true)}
            className="mt-4 w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold"
          >
            Edit Profile
          </button>

          <button
            onClick={() => navigate("/browse")}
            className="mt-4 w-full border border-gray-600 py-3 rounded-lg hover:bg-zinc-800"
          >
            Back to Home
          </button>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-5">
            Favorite Movies
          </h2>
          
          {favorites.length === 0 ? (
            <p className="text-gray-400">No favorite movies yet.</p>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {favorites.map((movie) => (
                <img
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/w300${movie.poster}`}
                  alt={movie.title}
                  className="rounded-lg hover:scale-105 transition cursor-pointer"
                />
              ))}
            </div>
          )}

        </div>

      </div>

      {showEdit && (
        <EditProfile
          user={user}
          onClose={() => setShowEdit(false)}
        />
      )}

    </>
  );
};

export default Profile;