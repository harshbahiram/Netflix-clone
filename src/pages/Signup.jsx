import React, { useState } from 'react'
import { auth } from "../firebase/FirebaseConfig"
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

      setError("");
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created Succesfully")
      } catch (err) {
        setError(err.message);
      }

};

return (
    <div className="min-h-screen bg-black flex items-center justify-center">

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
  );
};

export default Signup