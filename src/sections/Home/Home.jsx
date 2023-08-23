import React from "react";
import hero from "../../assets/images/hero.png";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="section flex items-center flex-wrap" id="home">
      <div className="flex flex-col items-start gap-10">
        <div className="sm:text-[2.5rem] text-[1.8rem] font-bold mr-56">
          Delicious Filipino <br /> Food is Waiting <br /> For you
        </div>
        <div className="btn hover:scale-105 duration-300 cursor-pointer">
          <a href="#">View Menu</a>
          <FaArrowRight />
        </div>
      </div>
      <div className="min-w-[200px] justify-self-center lg:w-[500px] md:w-[550px] md:ml-20 mt-5">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Home;
