import React from "react";
import Landing_image from "../../components/Landing/Landing_image";

import Tour_bgBlur from "../../components/Tour_bgBlur/Tour_bgBlur";
import "./Team_carousel.css";
import Team_slider from "../../components/Slider/Team/Team_slider";
import Team_slider2 from "../../components/Slider/Team/Team_slider2";
import Splides from "../../components/Slider/Splides";
import { SplideSlide } from "@splidejs/react-splide";
import Reveal from "../../components/Animations/Reveal";

const Team_carousel = () => {
  const brands = [
    { id: 1, image: "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/brand.png" },
    { id: 2, image: "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/brand.png" },
    { id: 3, image: "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/brand.png" },
    { id: 4, image: "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/brand.png" },
    { id: 5, image: "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/brand.png" },
    { id: 6, image: "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/brand.png" },
  ];

  const brand = brands.map((item) => {
    return (
      <SplideSlide key={item.id}>
        <div className=" px-20 py-5 brand-holder">
          <img src="https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/brand.png" alt="" />
        </div>
      </SplideSlide>
    );
  });
  return (
    <>
      <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/bg-01.jpg" className="fixed-bg" alt="" />
      <Landing_image about={"Team Carousel"} page={"Team carousel"} />
      {/* Team Members */}
      <div className=" px-10 min-h-screen py-32 relative bg-white">
        <div className="2xl:w-[68%]  w-[100%]  xl:mx-auto  text-center">
          <Reveal value={-200}>

          <div className=" mb-10">
            <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
              Team members
            </span>
          </div>
          </Reveal>
          <Reveal>

          <h2>
            <span className=" md:text-[48px] font-bold leading-tight">
              Meet our best professional <br /> insurance agents
            </span>
          </h2>
          </Reveal>
          <Team_slider />
        </div>
      </div>

      {/* Explore Tour page */}
      <Tour_bgBlur check={"check availability"} />

      <div className=" px-10 min-h-screen py-32 relative bg-white">
        <div className="2xl:w-[68%]  w-[100%]  xl:mx-auto  text-center">
       

          <div className=" mb-10">
            <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
              Team members
            </span>
          </div>
   

          <h2>
            <span className=" md:text-[48px] font-bold leading-tight">
              Meet our best expert
            </span>
          </h2>
     
          <Team_slider2 />
        </div>
      </div>
      <hr />
      <div className=" py-20 overflow-hidden bg-white relative">
        <Splides brand={brand} view={5} controller={false} />
      </div>
    </>
  );
};

export default Team_carousel;
