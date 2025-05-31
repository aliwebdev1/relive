import React from "react";
import lab from "../../../assets/images/icons/lab.png";
import hart from "../../../assets/images/icons/love.png";
import sun from "../../../assets/images/icons/sun.png";
import Treatment from "./Treatment";

const SpecializedTreatments = () => {
  const treatments = [
    {
      name: "Peptide Therapy",
      des: "Boost cellular regeneration and vitality.",
      img: lab,
    },
    {
      name: "Hormone Replacement",
      des: "Restore balance, energy, and well-being.",
      img: hart,
    },
    {
      name: "Skin Rejuvenation",
      des: "Advanced treatments for youthful skin.",
      img: sun,
    },
  ];

  return (
    <div className="px-5 md:px-30 py-5 md:py-20">
      <div className="text-center  mx-auto p-3 md:p-0">
        <h2 className="text-2xl md:text-5xl font-semibold mt-8 md:mt-0">
          Our <span className="text-primary ">Specialized Treatments</span>
        </h2>
        <p className="text-secondary mt-2 ">
          Explore our wide range of innovative anti-aging solutions.
        </p>
      </div>

      <div className="grid  md:grid-cols-3 gap-5 py-5 md:py-10">
        {treatments.map((treatment) => (
          <Treatment key={treatment.name} treatment={treatment}></Treatment>
        ))}
      </div>
    </div>
  );
};

export default SpecializedTreatments;
