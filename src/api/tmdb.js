import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 10000,
});

const request = (url, params = {}) => {
  if (!API_KEY) {
    return Promise.reject(new Error("Movie service is not configured."));
  }

  return tmdb.get(url, {
    params: {
      api_key: API_KEY,
      ...params,
    },
  });
};

export const fetchTrending = () =>
  request("/trending/movie/week");

export const fetchPopular = () =>
  request("/movie/popular");

export const fetchTopRated = () =>
  request("/movie/top_rated");

export const fetchUpcoming = () =>
  request("/movie/upcoming");

export const fetchAction = () =>
  request("/discover/movie", { with_genres: 28 });

export const fetchComedy = () =>
  request("/discover/movie", { with_genres: 35 });

export const fetchHorror = () =>
  request("/discover/movie", { with_genres: 27 });

export const fetchRomance = () =>
  request("/discover/movie", { with_genres: 10749 });

export const fetchDocumentary = () =>
  request("/discover/movie", { with_genres: 99 });

export const searchMovies = (query) =>
  request("/search/movie", { query: query.trim() });
