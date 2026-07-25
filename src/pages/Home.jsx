import React from 'react'
import home from '../assets/home.jpg'
import logo from '../assets/logo.png'

const Home = () => {
  return (

    <div className="relative w-full h-screen overflow-hidden">
        
          <img
            src={home}
            alt="home"
            className="w-full h-screen brightness-50"
          />

        <img
          src={logo}
          alt="logo"
          className="absolute top-8 left-12 w-40"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">

          <h1 className="text-5xl font-bold text-white sm:text-7xl">
            Unlimited movies, shows and more
          </h1>

          <p className="mt-6 text-xl text-white">
            Starts at $20. Cancel at any time.
          </p>

          <p className="mt-6 text-lg text-white">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <input
              className="w-[420px] rounded-md border border-gray-500 focus:bg-black/50 px-4 py-4 placeholder:text-gray-300 focus:outline-none"
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

  )
}

export default Home