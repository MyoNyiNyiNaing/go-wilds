import React from "react";
import "./Team_slider.css";
import { SplideSlide } from "@splidejs/react-splide";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaShareAlt,
  FaTwitter,
} from "react-icons/fa";
import slides from '../team.json'
import Splides from "../Splides";

const Team_slider = () => {
  const slide = slides.map((item) => {
    return (
      <SplideSlide
        key={item.name}
        className=" team-card text-center relative z-30"
      >
        <div className="team-img relative overflow-hidden rounded-lg mx-4">
          <img src={item.image} className="" alt={item.name} />
          <div className="team-social absolute bottom-0 right-0 text-white ">
            <div className="team-social-link flex flex-col items-center p-3 bg-primary gap-4">
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
            <div className="p-3 bg-primary">
              <FaShareAlt />
            </div>
          </div>
        </div>
        <div className="team-content w-full relative py-8 rounded-md">
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

export default Team_slider;
