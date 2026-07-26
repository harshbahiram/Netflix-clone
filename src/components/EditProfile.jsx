import React from 'react'

import { useState } from "react";
import { updateProfile } from "firebase/auth";

const EditProfile = ({ user, onClose }) => {

  const [name, setName] = useState(user?.displayName || "");

  const saveProfile = async () => {

    await updateProfile(user, {
      displayName: name,
    });

    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-zinc-900 p-8 rounded-xl w-[400px]">

        <h2 className="text-2xl text-white font-bold mb-6">
          Edit Profile
        </h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
          className="w-full bg-zinc-800 text-white p-3 rounded outline-none"
        />

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-zinc-700 text-white"
          >
            Cancel
          </button>

          <button
            onClick={saveProfile}
            className="px-5 py-2 rounded bg-red-600 text-white"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
};

export default EditProfile;