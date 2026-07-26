import { useEffect, useState } from "react";
import { auth } from "../firebase/FirebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Search, X } from "lucide-react";
import { searchMovies } from "../api/tmdb";
import MovieModel from "./MovieModel";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    try {
      const res = await searchMovies(value);
      setResults(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black via-black/80 to-transparent">
      <div className="flex items-center justify-between px-10 py-5">

        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="w-40 cursor-pointer"
        />

        {/* Right Side */}
        <div className="flex items-center gap-6 text-white">

          {/* Search */}
          <div className="relative flex items-center gap-3">

            {showSearch && (
              <input
                type="text"
                placeholder="Titles, people, genres"
                value={searchQuery}
                onChange={handleSearch}
                className="bg-black border border-gray-500 rounded px-3 py-2 text-white w-72 outline-none"
              />
            )}

            <button
              onClick={() => {
                setShowSearch(!showSearch);

                if (showSearch) {
                  setSearchQuery("");
                  setResults([]);
                }
              }}
            >
              {showSearch ? <X size={22} /> : <Search size={22} />}
            </button>

            {/* Search Results */}
            {showSearch && results.length > 0 && (
              <div className="absolute top-14 right-0 w-80 bg-zinc-900 rounded-lg shadow-lg max-h-96 overflow-y-auto">

                {results.map((movie) => (
                  <div
                    key={movie.id}
                    onClick={() => {
                      setSelectedMovie(movie);
                      setResults([]);
                      setSearchQuery("");
                      setShowSearch(false);
                    }}
                    className="flex items-center gap-3 p-3 hover:bg-zinc-800 cursor-pointer transition"
                  >
                    <img
                      src={movie.poster_path
                          ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                          : "https://via.placeholder.com/200x300?text=No+Image"}
                      alt={movie.title}
                      className="w-12 rounded"
                    />

                    <div>
                      <h3 className="font-semibold">
                        {movie.title}
                      </h3>

                      <p className="text-gray-400 text-sm">
                        {movie.release_date?.slice(0, 4)}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            )}

          </div>

          {/* Avatar */}
          <div className="w-10 h-10 rounded bg-red-600 flex items-center justify-center font-bold">
            {user?.email?.charAt(0).toUpperCase()}
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          >
            Logout
          </button>

        </div>

      </div>

        <MovieModel movie={selectedMovie} onClose={() => setSelectedMovie(null)}/>
            
    </nav>
  );
};

export default Navbar;