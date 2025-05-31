import React from "react";
import meetRelive from "../../../assets/images/image 1.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const MeetRelive = () => {
  return (
    <div className="px-5 md:px-30 py-6 md:py-32">
      <div className="md:flex gap-10 justify-between items-center">
        <div className="md:w-1/2">
          <img className="rounded-3xl" src={meetRelive} alt="meet Relive" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-5xl font-semibold mt-8 md:mt-0">
            Meet <span className="text-primary ">Relive</span>
          </h2>
          <p className="mb-10">
            Relive is a premium anti-aging clinic offering advanced,
            science-based therapies to support longevity and overall wellness.
            We blend cutting-edge medical technology with personalized care to
            help you feel your best—at any age.
          </p>
          <PrimaryButton>Learn More</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default MeetRelive;
