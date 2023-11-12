import React from "react";
import "./Team_slider.css";
import { SplideSlide } from "@splidejs/react-splide";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import slides from '../team.json'
import Splides from "../Splides";

const Team_slider2 = () => {
  const slide = slides.map((item) => {
    return (
      <SplideSlide
        key={item.name}
        className=" slider2-team-card team-card text-center relative z-30  border-4 flex flex-col justify-center items-center rounded-md p-8 cursor-pointer"
      >
        <div className="slider2-team-img relative mx-4 ">
          <img src={item.image} className=" rounded-full " alt={item.name} />
          <div className="team-social absolute -bottom-3 right-7 text-white ">
            <div className="team-social-link flex flex-col items-center p-3 py-6 rounded-full bg-primary gap-4 gap-y-3">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaPinterest />
              </a>
            </div>
            <div className="p-3 bg-primary rounded-full">
              <FaPlus size={'1.2rem'} />
            </div>
          </div>
        </div>
        <div className=" w-full relative py-8 rounded-md">
          <h3 className=" text-2xl font-bold text-black">{item.name}</h3>
          <p className=" text-[#82828a]">{item.job}</p>
        </div>
      </SplideSlide>
    );
  });
  return (
    <div className=" py-10 overflow-hidden">
      <Splides brand={slide} view={3} />
    </div>
  );
};

export default Team_slider2;
