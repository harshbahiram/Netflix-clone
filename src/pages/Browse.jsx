import React from 'react'
import Banner from '../components/Banner'
import MovieRow from '../components/MovieRow'
import Navbar from '../components/Navbar'
import { fetchTrending, fetchPopular, fetchTopRated, fetchAction, fetchComedy, fetchHorror, fetchRomance } from "../api/tmdb";

const Browse = () => {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">

        <Navbar />
        <Banner />

        <div className="-mt-32 relative z-20">

          <MovieRow title="Trending Now" fetchMovies={fetchTrending} />
          <MovieRow title="Popular" fetchMovies={fetchPopular} />
          <MovieRow title="Top Rated" fetchMovies={fetchTopRated} />
          <MovieRow title="Action" fetchMovies={fetchAction} />
          <MovieRow title="Comedy" fetchMovies={fetchComedy} />
          <MovieRow title="Horror" fetchMovies={fetchHorror} />
          <MovieRow title="Romance" fetchMovies={fetchRomance} />

        </div>

    </div>
  )
}

export default Browse