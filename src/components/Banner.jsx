import { useEffect, useState } from "react";
import { fetchTrending } from "../api/tmdb";

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getBannerMovie = async () => {
      try {
        const res = await fetchTrending();

        const movies = res.data.results;

        const randomMovie =
          movies[Math.floor(Math.random() * movies.length)];

        setMovie(randomMovie);
      } catch (error) {
        console.log(error);
      }
    };

    getBannerMovie();
  }, []);

  if (!movie) return null;

  return (
    <header
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-12 pb-68 max-w-3xl">
        <h1 className="text-white text-6xl font-bold mb-4">
          {movie.title}
        </h1>

        <p className="text-white text-lg mb-6 line-clamp-2">
          {movie.overview}
        </p>

        <div className="flex gap-4">

          <button
            className="bg-red-800 hover:bg-red-900 transition duration-500 ease-in-out flex items-center mb-3 mr-3 text-base sm:text-xl font-semibold text-white py-2 sm:py-2 px-10 sm:px-14 rounded-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                 />
                </svg>
            Play
          </button>

          <button
            
            className="bg-[#33333380] flex items-center shadow-2xl mb-3 text-base sm:text-xl font-semibold text-white hover:bg-white hover:text-black transition duration-500 ease-in-out py-2 px-8 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 items-center mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              More Info
          </button>

        </div>

      </div>
    </header>
  );
};

export default Banner;