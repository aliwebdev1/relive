import React from "react";

import people from "../../../assets/images/people.png";
import people2 from "../../../assets/images/people1.png";
import people3 from "../../../assets/images/people2.png";

import Testimonial from "./Testimonial";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 45,
      img: people,
      review:
        "After just three months with Relive's  peptide therapy, I feel like I've turned back the clock by a decade. My energy  levels are through the roof! ",
    },
    {
      id: 2,
      name: "Michael Thomas",
      age: 42,
      img: people2,
      review:
        "The hormone replacement therapy at Relive has completely transformed my quality of life. I sleep better, think clearer.",
    },
    {
      id: 3,
      name: "Faraday Henry",
      age: 48,
      img: people3,
      review:
        "TAfter just three months with Relive's  peptide therapy, I feel like I've turned back the clock by a decade. My energy  levels are through the roof! ",
    },
  ];

  return (
    <div className="px-5 md:px-30">
      <div className=" bg-[#09514D] rounded-2xl  py-6 md:py-16 px-4 md:px-12">
        <div className="text-center text-white  mx-auto p-3 md:p-0">
          <h2 className="text-2xl md:text-5xl font-semibold mt-8 md:mt-0">
            What Our <span className="text-primary ">Clients</span> Say
          </h2>
          <p className="text-base-200 mt-2 ">
            Explore our wide range of innovative anti-aging solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 py-5 md:py-10">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              testimonial={testimonial}
            ></Testimonial>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
