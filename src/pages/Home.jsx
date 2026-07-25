import React from 'react'
import home from '../assets/home.jpg'
import logo from '../assets/logo.png'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div>

      <div className="relative min-h-screen overflow-hidden border-b-8 border-gray-800">

        <img
          src={home}
          alt="home"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute top-6 left-6 md:left-12 z-20">
          <img
            src={logo}
            alt="logo"
            className="w-40"
          />
        </div>

        <div className="absolute top-6 right-6 md:right-12 z-20">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-md transition">
            Sign In
          </button>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
            Unlimited movies, shows and more
          </h1>

          <p className="mt-6 text-xl text-white">
            Starts at $20. Cancel at any time.
          </p>

          <p className="mt-6 text-lg text-white">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">

            <input
              className="w-full max-w-md rounded-md bg-black/50 border border-gray-500 px-4 py-4 text-white placeholder:text-gray-300"
              placeholder="Enter Email"
            />

            <button
              className="rounded-md bg-red-600 px-8 py-4 text-xl font-semibold text-white hover:bg-red-700 whitespace-nowrap"
            >
              Get Started &gt;
            </button>

          </div>

        </div>

      </div>

      <Trending />

    </div>
  )
}

export default Home