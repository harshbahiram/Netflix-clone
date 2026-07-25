import React from 'react'

const ReasonCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#1d2148] to-[#21121f] p-6 h-80">
      <h3 className="text-white text-3xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-300 mt-5">
        {description}
      </p>

      <Icon className="absolute bottom-6 right-6 text-6xl text-pink-500" />
    </div>
  );
};

export default ReasonCard;