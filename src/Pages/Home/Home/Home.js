import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      <Slider></Slider>
      <Services></Services>
      <Experts></Experts>
    </div>
  );
};

export default Home;
