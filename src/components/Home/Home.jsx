import React from "react";
import Banner from "./Banner/Banner";
import MeetRelive from "./MeetRelive/MeetRelive";
import Products from "./Products/Products";
import SpecializedTreatments from "./SpecializedTreatments/SpecializedTreatments";
import Contact from "./Contact/Contact";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MeetRelive></MeetRelive>
      <Products></Products>
      <SpecializedTreatments />
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
};

export default Home;
