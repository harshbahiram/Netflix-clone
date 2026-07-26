import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const fetchTrending = () =>
  tmdb.get(`/trending/movie/week?api_key=${API_KEY}`);

export const fetchPopular = () =>
  tmdb.get(`/movie/popular?api_key=${API_KEY}`);

export const fetchTopRated = () =>
  tmdb.get(`/movie/top_rated?api_key=${API_KEY}`);

export const fetchUpcoming = () =>
  tmdb.get(`/movie/upcoming?api_key=${API_KEY}`);

export const fetchAction = () =>
  tmdb.get(`/discover/movie?api_key=${API_KEY}&with_genres=28`);

export const fetchComedy = () =>
  tmdb.get(`/discover/movie?api_key=${API_KEY}&with_genres=35`);

export const fetchHorror = () =>
  tmdb.get(`/discover/movie?api_key=${API_KEY}&with_genres=27`);

export const fetchRomance = () =>
  tmdb.get(`/discover/movie?api_key=${API_KEY}&with_genres=10749`);

export const fetchDocumentary = () =>
  tmdb.get(`/discover/movie?api_key=${API_KEY}&with_genres=99`);