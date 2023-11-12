import React from "react";
import "./Home_page.css";
import { SplideSlide } from "@splidejs/react-splide";
import Splides from "../Slider/Splides";

const Home_page_animation = () => {
  const slides = (
    <>
      <SplideSlide className="relative md:h-screen overflow-hidden">
        <>
          <img
            src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/slider-1.jpg"
            className="home-img h-full w-full absolute object-cover"
            alt=""
          />
          <div className=" 2xl:w-[68%]  w-[100%]  xl:mx-auto py-20 relative z-10 flex flex-col justify-center items-start h-full">
            <div className=" py-10  px-5">
              <div className={`relative ${false && "is-active"}  swipe`}>
                <span
                  className={`${
                    false && "is-active"
                  } travel absolute md:-left-7 -left-5 -top-10 text-white md:text-lg text-xs font-medium bg-secondary px-5 py-2  z-50`}
                >
                  Travel & Tours
                </span>
                <h1
                  className={`${
                    false && "is-active"
                  } swipe-title md:text-[4.625rem] text-[31px] font-semibold lg:leading-[79px] text-white mb-5`}
                >
                  Tour Travel & <br /> Adventure Camping
                </h1>
              </div>
              <div className={`${false && "is-active"} swipe swipe--delay`}>
                <p
                  className={`${
                    false && "is-active"
                  } swipe-para  text-white mb-12 md:text-lg text-sm lg:leading-7`}
                >
                  Phasellus condimentum Laoreet turpis sodales <br /> in.Integer
                  leo arcu mollis anmet tempor.
                </p>
              </div>
              <a
                href="/tours-page"
                className={`${
                  false && "is-active"
                } title-btn bg-primary hover:bg-green-400 text-white rounded-md md:text-base text-sm font-bold leading-6 md:px-10 px-6 md:py-4 py-2 cursor-pointer z-10`}
              >
                Let's get started
              </a>
            </div>
          </div>
        </>
      </SplideSlide>
      <SplideSlide className="relative md:h-screen overflow-hidden">
        <>
          <img
            src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/slider-2.jpg"
            className=" h-full w-full absolute object-cover"
            alt=""
          />
          <div className=" 2xl:w-[68%]  w-[100%]  xl:mx-auto py-20 relative z-10 flex flex-col justify-center items-start h-full">
            <div className=" py-10  px-5">
              <div className={`relative `}>
                <span
                  className={` zoom-travel absolute md:-left-7 -left-5 -top-10 text-white md:text-lg text-xs font-medium bg-secondary px-5 py-2  z-50`}
                >
                  Travel & Tours
                </span>
                <h1
                  className={`relative zoom-title md:text-[4.625rem] text-[31px] font-semibold lg:leading-[79px] text-white mb-5 `}
                >
                  Your Journey Begins Here
                  <img
                    src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/layer-1.png"
                    alt=""
                    className="title_line absolute right-0"
                  />
                </h1>
              </div>
              <div className={` zoom--delay`}>
                <p
                  className={` zoom-para font-medium text-white mb-12 md:text-lg text-sm lg:leading-7 uppercase`}
                >
                  8700 tours are available,{" "}
                  <span className=" text-primary">book now</span>
                </p>
              </div>
              <a
                href="/tours-page"
                className={` zoom-btn bg-primary hover:bg-green-400 text-white rounded-md md:text-base text-sm font-bold leading-6 md:px-10 px-6 md:py-4 py-2 cursor-pointer z-10`}
              >
                Let's get started
              </a>
            </div>
          </div>
        </>
      </SplideSlide>
      <SplideSlide className="relative md:h-screen overflow-hidden">
        <div className="green_line"></div>
        <img
          src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/slider-3.jpg"
          className=" h-full w-full absolute object-cover"
          alt=""
        />
        <div className=" 2xl:w-[68%]  w-[100%]  xl:mx-auto py-20 relative z-10 flex flex-col justify-center items-start h-full">
          <div className=" py-10  px-5">
            <div className={`relative ${false && "is-active"}  swipe`}>
              <span
                className={`${
                  false && "is-active"
                } travel absolute md:-left-7 -left-5 -top-10 text-white md:text-lg text-xs font-medium bg-secondary px-5 py-2  z-50`}
              >
                Travel & Tours
              </span>
              <h1
                className={`${
                  false && "is-active"
                } swipe-title md:text-[4.625rem] text-[31px] font-semibold lg:leading-[79px] text-white mb-5`}
              >
                Tour Travel & <br /> Adventure Camping
              </h1>
            </div>
            <div className={`${false && "is-active"} swipe swipe--delay`}>
              <p
                className={`${
                  false && "is-active"
                } swipe-para  text-white mb-12 md:text-lg text-sm lg:leading-7`}
              >
                Phasellus condimentum Laoreet turpis sodales <br /> in.Integer
                leo arcu mollis anmet tempor.
              </p>
            </div>
            <a
              href="/tours-page"
              className={`${
                false && "is-active"
              } title-btn bg-primary hover:bg-green-400 text-white rounded-md md:text-base text-sm font-bold leading-6 md:px-10 px-6 md:py-4 py-2 cursor-pointer z-10`}
            >
              Let's get started
            </a>
          </div>
        </div>
      </SplideSlide>
    </>
  );

  return (
    <>
      <Splides brand={slides} autoplay={false}/>
    </>
  );
};

export default Home_page_animation;
