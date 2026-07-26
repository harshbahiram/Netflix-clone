import React from 'react'

const MovieModel = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 rounded-lg w-[90%] max-w-4xl overflow-hidden relative"
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
          className="w-full h-[300px] object-cover"
        />

        {/* Movie Details */}
        <div className="p-6">

          <h1 className="text-white text-4xl font-bold mb-4">
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

          <p className="text-gray-300 leading-7">
            {movie.overview}
          </p>

          <button
            className="mt-8 bg-red-600 hover:bg-red-700 px-8 py-3 rounded text-white font-semibold"
          >
            ▶ Play Trailer
          </button>

        </div>
      </div>
    </div>
  );
};

export default MovieModel;
