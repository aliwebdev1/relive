import React from "react";
import { Link } from "react-router-dom";
import star from "../../../assets/images/icons/right arrow.png";

const Treatment = ({ treatment }) => {
  const { des, img, name } = treatment;
  return (
    <div className=" p-4 bg-[#F8F8F8] shadow-sm rounded-xl">
      <figure>
        <img className="" src={img} alt="product name" />
      </figure>
      <div className="card-body p-0 ">
        <h2 className="card-title mt-4 font-bold text-xl">{name}</h2>
        <span className="text-secondary">{des}</span>
        <Link to="/" className="text-primary font-bold flex items-center ">
          Learn More <img className="ms-2" src={star} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Treatment;
