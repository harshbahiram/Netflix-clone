import { useEffect, useRef, useState } from "react";
import MovieModel from "./MovieModel";

const MovieRow = ({ title, fetchMovies }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const scrollRef = useRef(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await fetchMovies();
        setMovies(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, [fetchMovies]);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -900,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 900,
      behavior: "smooth",
    });
  };

  return (
   <> 
      <section className="px-8 mt-10">

        <h2 className="text-white text-2xl font-bold mb-4">
          {title}
        </h2>

        <div className="relative overflow-hidden">

          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30
            w-10 h-16 flex items-center justify-center
            bg-black/70 text-white text-3xl rounded
            hover:bg-black"
          >
            ❮
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth"
          >
            {movies.map((movie) => (
              <img
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                onClick={() => setSelectedMovie(movie)}
                className="min-w-[180px] h-[270px] rounded-lg object-cover
                cursor-pointer transition duration-300 hover:scale-110"
              />
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30
            w-10 h-16 flex items-center justify-center
            bg-black/70 text-white text-3xl rounded
            hover:bg-black">
            ❯
          </button>

        </div>

      </section>

      <MovieModel
      movie={selectedMovie}
      onClose={() => setSelectedMovie(null)}
      />

    </>
  );
};

export default MovieRow;