import React, { useEffect, useState, useRef } from "react";
import { fetchTrending } from "../api/tmdb";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const scrollRef = useRef(null);

  // Fetch trending movies
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetchTrending();
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies();
  }, []);

  // Scroll Left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -800,
      behavior: "smooth",
    });
  };

  // Scroll Right
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 800,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8">
          Trending Now
        </h2>

        <div className="relative">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black text-white w-10 h-20 rounded-r-lg"
          >
            ❮
          </button>

          {/* Movie List */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {movies.map((movie) => (
              <img
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-44 rounded-lg flex-shrink-0 hover:scale-105 transition duration-300 cursor-pointer"
              />
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black text-white w-10 h-20 rounded-l-lg"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trending;