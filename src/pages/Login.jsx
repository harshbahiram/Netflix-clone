import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { auth } from "../firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login= () => {

const location = useLocation();
const [email, setEmail] = useState(location.state?.email || "");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
  setError("");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login Successful!");
    navigate("/");
  } catch (err) {
    setError(err.message);
  }
};

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-black/80 p-10 rounded-md">

            <h1 className="text-white text-4xl font-bold mb-8">
                Sign In
            </h1>

            <form onSubmit={handleLogin} className="space-y-4">

                <input type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-4 rounded bg-[#333] text-white outline-none' 
                />

                <input type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-4 rounded bg-[#333] text-white outline-none' 
                />

                {error && (
                    <p className="text-red-500 mb-3">
                        {error}
                    </p>
                )}

                <button type='submit'
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold">
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