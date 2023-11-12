import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import Splides from "../Slider/Splides";
import { SplideSlide } from "@splidejs/react-splide";
import "./adventure_gallery.css";
import tours from "../../Json/adventure.json";
import Lazy_loader from "../Slider/lazyLoader/lazy_loader";
import { ImCross } from "react-icons/im";

const Adventure_gallery = () => {
  const [displayCheck, setDisplayCheck] = useState(false);
  const clickHandler = () => {
    setDisplayCheck(true);
  };
  const tour = tours.map((item) => {
    return (
      <SplideSlide key={item.id} onClick={clickHandler}>
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
      </SplideSlide>
    );
  });

  return (
    <>
      <div className="flex relative bg-white">
        <div
          className="   relative  px-5  z-50  -bottom-20    "
        >
          <Splides brand={tour} view={5} />
          
        </div>
       
      </div>
      <div className="w-[100%] h-24 bg-dark">
      </div>
      <div className={`lazy-loader ${displayCheck ? "" : "hidden"}`}>
        <div className=" w-fit absolute right-[10%] p-5 top-7 cursor-pointer z-20" onClick={() => setDisplayCheck(false)}>
          <ImCross className="cursor-pointer" />
        </div>
        <Lazy_loader detailImage={tours}/>
      </div>
    </>
  );
};

export default Adventure_gallery;
