import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase/FirebaseConfig"
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

      setError("");
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created Succesfully")
        navigate("/login");
      } catch (err) {
        setError(err.message);
      }

};

return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md bg-black/80 p-10 rounded-md">
        <h1 className="text-white text-4xl font-bold mb-8">Sign Up</h1>

      <form onSubmit={handleSignup} className="space-y-4">

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded bg-[#333] text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded bg-[#333] text-white"
        />

        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-red-600 py-3 rounded text-white"
        >
          Sign Up
        </button>

      </form>

     </div>
    </div>
  );
};

export default Signup