import React, { useEffect, useState } from "react";
import "./gallery.css";
import Hero_section from "../../components/Hero_section/Hero_section";
import tours from "../../Json/adventure.json";
import gallery_images from "./gallery.json";
import { BsPlus } from "react-icons/bs";
import Lazy_loader from "../../components/Slider/lazyLoader/lazy_loader";
import { ImCross } from "react-icons/im";
import Explore_more from "../../components/Explore_more/Explore_more";
import RevealUp from "../../components/Animations/RevealUp";

const Gallery = () => {
  const [displayCheck, setDisplayCheck] = useState(false);
  const clickHandler = () => {
    setDisplayCheck(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const tour = gallery_images.map((item) => {
    return (
      <div key={item.id} onClick={clickHandler} className=" flex-[25%]">
        <div className=" rounded-md overflow-hidden relative">
          <img src={item.image} alt="" />
          <div className="tour_card_content w-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col items-center justify-center gap-3 cursor-pointer">
            <BsPlus
              className=" p-2 rounded-full bg-secondary text-white"
              size={"2.5rem"}
            />
            <div className="text-center">
              <h3 className=" text-xl font-bold text-white">
                Discovery Islands
              </h3>
              <p className=" capitalize text-[#ffffffe6]">adventure</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <Hero_section about={"Gallery"} />
      <div className=" px-10 min-h-screen py-32">
       <RevealUp>
       <div className="2xl:w-[68%]  w-[100%]  xl:mx-auto  flex flex-wrap gap-14">{tour}</div>
       </RevealUp>
      </div>
      <div className={`lazy-loader ${displayCheck ? "" : "hidden"}`}>
        <div
          className=" w-fit absolute right-48 top-10 cursor-pointer z-20"
          onClick={() => setDisplayCheck(false)}
        >
          <ImCross className="cursor-pointer" />
        </div>
        <Lazy_loader detailImage={gallery_images} />
      </div>

      {/* Explore More */}
      <Explore_more />
    </>
  );
};

export default Gallery;
