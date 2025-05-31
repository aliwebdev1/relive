import React from "react";
import banner from "./../../../assets/images/banner.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="bg-cover bg-center text-white "
    >
      <div className="md:w-1/2 space-y-6 p-5 md:p-30">
        <h1 className="text-3xl md:text-6xl font-semibold leading-22">
          Rediscover Youth,<span className="text-primary">Redefine Life.</span>
        </h1>
        <p className="md:mt-3">
          Embrace a renewed sense of vitality and confidence with advanced
          anti-aging therapies. At Relive, we help you unlock the best version
          of yourself—inside and out.
        </p>
        <PrimaryButton>Contact Us</PrimaryButton>
      </div>
      <div className="w-1/2 "></div>
    </div>
  );
};

export default Banner;
