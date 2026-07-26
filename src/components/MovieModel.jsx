import React from 'react'
import { auth, db } from "../firebase/FirebaseConfig"
import { doc, setDoc } from "firebase/firestore"

const MovieModel = ({ movie, onClose }) => {
  if (!movie) return null;

  const addToFavorites = async () => {
  console.log("Button clicked");

  const user = auth.currentUser;
  console.log("Current user:", user);

  if (!user) {
    alert("Please login first.");
    return;
  }

  try {
    console.log("Saving movie:", movie);

    await setDoc(
      doc(db, "users", user.uid, "favorites", movie.id.toString()),
      {
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path,
        backdrop: movie.backdrop_path,
        rating: movie.vote_average,
        releaseDate: movie.release_date,
        overview: movie.overview,
      }
    );

    console.log("Saved successfully");
    alert("Added to Favorites ❤️");
  } catch (error) {
    console.error("Firestore Error:", error);
  console.log("Error code:", error.code);
  console.log("Error message:", error.message);
  alert(error.message);
  }
};

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 rounded-xl w-[60%] max-w-5xl overflow-hidden relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/70 text-white w-10 h-10 rounded-full hover:bg-red-600 transition"
        >
          ✕
        </button>

        {/* Backdrop */}
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-[280px]"
        />

        {/* Movie Details */}
        <div className="p-5">

          <h1 className="text-white text-3xl font-bold mb-4">
            {movie.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-gray-300 mb-5">

            <p>
              ⭐ {movie.vote_average.toFixed(1)}
            </p>

            <p>
              📅 {movie.release_date}
            </p>

            <p>
              🌍 {movie.original_language.toUpperCase()}
            </p>

          </div>

          <p className="text-gray-200 leading-5">
            {movie.overview}
          </p>

          <div className='flex gap-6 mt-6'>
            <button
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded text-white font-semibold"
          >
            ▶ Play 
          </button>

          <button onClick={addToFavorites}
          className='bg-zinc-600 hover:bg-zinc-700 px-2 py-3 rounded'>
            ❤️ Add to Favorites
          </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MovieModel;
