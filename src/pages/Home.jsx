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

        </div>

    </div>

  )
}

export default Home