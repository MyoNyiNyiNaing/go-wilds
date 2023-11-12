import React from "react";
import "./Explore_more.css";
import { BiWorld } from "react-icons/bi";

const Explore_more = ({rounded = true}) => {
  return (
    <div className={`relative overflow-hidden  max-h-[200px] bg-primary ${rounded && "rounded-xl"}`}>
      <div className="absolute explore"></div>
      <div className={`${rounded && ''} flex justify-between p-12 h-full items-start lg:items-center flex-col lg:flex-row gap-y-5`}>
        <div className="flex items-center gap-10">
            <BiWorld size={'3rem'} className=" text-white"/>
          <div className="">
            <h5 className=" text-sm font-medium text-[rgb(236,236,236)] uppercase">
              QUISEQUE VEL ORTOR
            </h5>
            <h2 className=" text-white text-2xl md:text-[36px] font-bold leading-10">
              Ready to adventure and enjoy natural
            </h2>
          </div>
        </div>
        <a
          href="/tour"
          className=" bg-white hover:bg-gray-200 transition duration-100 rounded-md text-base font-bold leading-6 px-8 py-4 cursor-pointer z-10"
        >
          Explore More
        </a>
      </div>
    </div>
  );
};

export default Explore_more;
