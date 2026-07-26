import React from 'react'
import { Link } from 'react-router-dom'

const Login= () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-black/80 p-10 rounded-md">

            <h1 className="text-white text-4xl font-bold mb-8">
                Sign In
            </h1>

            <form className="space-y-4">

                <input type="email"
                placeholder='Email'
                className='w-full p-4 rounded bg-[#333] text-white outline-none' 
                />

                <input type="password"
                placeholder='Password'
                className='w-full p-4 rounded bg-[#333] text-white outline-none' 
                />

                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold">
                    Sign In
                </button>

            </form>

            <p className="text-gray-400 mt-6">
                New to Netflix?{" "}
                <Link to="/signup" className="text-white hover:underline">
                    Sign Up now.
                </Link>
            </p>

        </div>
    </div>
  )
}

export default Login