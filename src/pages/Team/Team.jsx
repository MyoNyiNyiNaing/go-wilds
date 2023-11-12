import React, { useEffect } from "react";
import Landing_image from "../../components/Landing/Landing_image";
import "./team.css";
import slides from "../../components/Slider/team.json";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaShareAlt,
  FaTwitter,
} from "react-icons/fa";
import Explore_more from "../../components/Explore_more/Explore_more";
import Reveal from "../../components/Animations/Reveal";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const slide = slides.map((item) => {
    return (
      <div
        key={item.name}
        className=" team-card text-center relative z-30 md:flex-[25%]"
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
      </div>
    );
  });
  return (
    <>
      <Landing_image page={"team"} about={"team"} />

      {/* Welcome Page */}
      <div className=" px-10 min-h-screen py-32">
        <div className="2xl:w-[68%]  w-[100%]  xl:mx-auto  flex flex-col md:flex-row gap-y-10">
         {/* <Reveal value={-200}> */}
         <div className=" flex-[50%] flex flex-col gap-10 pr-20 relative">
            <div className="">
              <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
                Welcome to Gowilds
              </span>
            </div>
            <h2>
              <span className=" md:text-[48px] font-bold leading-tight">
                Get reliable & quick <br /> insurance for your family
              </span>
            </h2>
            <p className=" uppercase text-primary text-xl font-semibold leading-8">
              committed to providing our customers with exceptional service.
            </p>
            <div className="">
              <div className="flex justify-between mb-3">
                <h6 className=" text-lg font-bold">Insurance</h6>
                <p className=" text-base font-medium text-[rgb(130,130,130)]">
                  82%
                </p>
              </div>
              <div className="progress-bar-wrapper rounded bg-gray-200">
                <div className="progress-bar-linear bg-primary rounded h-[12px] w-[82%]"></div>
              </div>
            </div>
            <div className="">
              <div className="relative text-form bg-[#f3f8f6] p-6 rounded mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </div>
              <div className=" flex items-center gap-5">
                <div className=" p-3 rounded-full overflow-hidden border-4 w-fit border-primary">
                  <img
                    src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/avatar.jpg"
                    className=" rounded-full w-12"
                    alt="avatar"
                  />
                </div>
                <div className="">
                  <h2 className=" text-xl font-extrabold mb-2">John Doe</h2>
                  <h3 className=" uppercase tracking-wider text-sm font-medium text-[rgb(130,130,130)]">
                    designer
                  </h3>
                </div>
              </div>
            </div>
            <div className="absolute bottom-1 right-28">
              <img src={"src/assets/images/arrow-2.png"} alt="" />
            </div>
          </div>
         {/* </Reveal> */}
          <div className=" flex-[45%] overflow-hidden">
            <div className="relative flex justify-end pl-10 ">
              <a href="/about" className=" team_img">
                <div className=" rounded-xl overflow-hidden w-[90%]">
                  <img
                    src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/image-20.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div className=" absolute -bottom-20">
                <a href="/about" className=" team_img">
                  <div className="   rounded-xl overflow-hidden w-[70%]">
                    <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-2.jpg" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      {/* Team Members */}
      <div className=" px-10 min-h-screen py-32">
        <div className=" text-center">
          <div className=" mb-10">
            <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
              Team members
            </span>
          </div>
          <h2>
            <span className=" md:text-[48px] font-bold leading-tight">
              Meet our best professional <br /> insurance agents
            </span>
          </h2>
        </div>
        <div className="2xl:w-[68%]  w-[100%]  xl:mx-auto  flex flex-wrap gap-20 pt-10 justify-center">
          {slide}
        </div>
      </div>

      {/* Explore More */}
      <Explore_more/>

    </>
  );
};

export default Team;
