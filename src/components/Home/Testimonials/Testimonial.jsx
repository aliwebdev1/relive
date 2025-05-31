import React from "react";
import quote from "../../../assets/images/icons/quote.png";

const Testimonial = ({ testimonial }) => {
  const { name, img, review, age } = testimonial;
  return (
    <div className="p-7 rounded-2xl bg-white">
      <div className="flex items-center">
        <img className="w-15 h-15 rounded-full" src={img} alt="image" />
        <div className="ms-3">
          <h3 className="font-semibold">{name}</h3>
          <p>Age: {age}</p>
        </div>
      </div>
      <div className="flex items-start mt-3">
        <img className="w-4 h-4 mt-1" src={quote} alt="" />
        <p className="ms-3">{review}</p>
      </div>
    </div>
  );
};

export default Testimonial;
