import React from 'react'
import ReasonCard from '../components/ReasonCard';
import { MdOutlineTv } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { PiMagicWand } from "react-icons/pi";
import { FaRegSmile } from "react-icons/fa";

const reason = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: MdOutlineTv,
  },
  {
    title: "Download your shows to watch offline",
    description:
      "Save your favourites easily and always have something to watch.",
    icon: FaDownload,
  },
  {
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    icon: PiMagicWand,
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favourite characters in a space made just for them.",
    icon: FaRegSmile,
  },
];

const MoreReasonCard = () => {
  return (
    <section className="bg-black text-white py-20">

        <div className="max-w-7xl mx-auto px-8">

            <h2 className="text-3xl font-bold mb-10">
                More reaons to join
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {reason.map((reason, index) => (
                    <ReasonCard
                    key={index}
                    title={reason.title}
                    description={reason.description}
                    icon={reason.icon}
                    />
                ))}
            </div>

        </div>

    </section>
  )
}

export default MoreReasonCard