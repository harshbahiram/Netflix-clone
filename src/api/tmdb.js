import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const fetchTrending = () =>
  tmdb.get(`/trending/movie/week?api_key=${API_KEY}`);

export default tmdb;