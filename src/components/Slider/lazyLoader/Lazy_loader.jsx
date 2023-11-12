import React from "react";
import "./lazy_loader.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Lazy_loader = ({detailImage}) => {
  // Give what you want to loop
 
  const tour = detailImage.map((item) => {
    return (
      <SplideSlide key={item.id} className=" h-screen cursor-grab">
        <div className=" rounded-md relative flex justify-center h-screen p-20 object-cover w-full">
          <img src={item.imageDetail} alt="" className=" object-contain w-full h-full"/>
        </div>
      </SplideSlide>
    );
  });

  return (
    <div>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          cover: true,
          height: "10rem",
          lazyLoad: "nearby",
          breakpoints: {
            height: "6rem",
          },
          pagination: false,
        }}
        className=" "
      >
        {tour}
      </Splide>
    </div>
  );
};

export default Lazy_loader;
