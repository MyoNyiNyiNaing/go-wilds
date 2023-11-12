import React, { useEffect } from "react";
import "./about.css";
import "swiper/swiper-bundle.min.css";
import { FaPlay } from "react-icons/fa";
import {
  GiCampingTent,
  GiMountainRoad,
  GiFishingBoat,
  GiMountainClimbing,
  GiCommercialAirplane,
} from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaCoins, FaVest } from "react-icons/fa";
import { TfiQuoteRight } from "react-icons/tfi";
import { AiFillStar } from "react-icons/ai";
import Adventure_gallery from "../../components/Adventure/AdventureGallery";
import Splides from "../../components/Slider/Splides";
import { SplideSlide } from "@splidejs/react-splide";
import Hero_section from "../../components/Hero_section/HeroSection";
import Tour_bgBlur from "../../components/Tour_bgBlur/TourBgBlur";
import Team_slider from "../../components/Slider/Team/TeamSlider";
import Reveal from "../../components/Animations/Reveal";
import RevealUp from "../../components/Animations/RevealUp";

const About = () => {
  const services = [
    { name: "Kevin Smith", role: "Customer" },
    { name: "Jessica Brown", role: "Founder & CEO" },
    { name: "Christine Eve", role: "Founder & CEO" },
  ];

  const brands = [
    {
      id: 1,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/brand.png",
    },
    {
      id: 2,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/brand.png",
    },
    {
      id: 3,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/brand.png",
    },
    {
      id: 4,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/brand.png",
    },
    {
      id: 5,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/brand.png",
    },
    {
      id: 6,
      image:
        "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/brand.png",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const service = services.map((item) => {
    return (
      <SplideSlide className=" w-fit">
        <div className=" flex items-center gap-5">
          <TfiQuoteRight size={"5rem"} className=" text-primary" />
          <div className=" flex flex-col gap-3">
            <h3 className=" text-xl font-bold">Quality Service</h3>
            <div className=" flex gap-1 text-secondary">
              {[...Array(5)].map((_, index) => (
                <AiFillStar key={index} />
              ))}
            </div>
          </div>
        </div>
        <p className=" text-[#82828a] leading-7 text-xl py-5">
          To take trivial example which of ever undertakes laborious physical
          exercise, except to obtain some advantage from but who has any right
          to find fault with man who chooses to enjoy.
        </p>
        <hr />
        <div className=" flex py-5 items-center gap-8">
          <div className=" w-20 overflow-hidden rounded-full">
            <img
              src="https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/testimonial.jpg"
              alt=""
            />
          </div>
          <div className="">
            <h4 className=" text-xl font-bold">{item.name}</h4>
            <p className=" text-[#82828a] ">{item.role}</p>
          </div>
        </div>
      </SplideSlide>
    );
  });

  const brand = brands.map((item) => {
    return (
      <SplideSlide key={item.id}>
        <div className="px-10 py-5 brand-holder">
          <img src={item.image} alt="" />
        </div>
      </SplideSlide>
    );
  });

  return (
    <div className=" overflow-hidden">
      <img
        src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/bg-01.jpg"
        className="fixed-bg"
        alt=""
      />
      {/*About Page Hero Section */}
      <Hero_section about={"About"} />

      {/* Availability */}
      <div className="min-h-[calc(100vh-100px)] relative bg-white z-50 ">
        <div className="absolute h-screen bg-transparent w-full overflow-hidden">
          <div className="bg-shape-04"></div>
        </div>
        <div className="2xl:w-[68%]  w-[100%]  xl:mx-auto flex flex-col md:flex-row min-h-[calc(100vh-100px)] md:items-center md:mx-28 mx-10">
         
 
       <div className="flex flex-col md:w-1/2  items-start gap-7 my-28">
          <div className="">
            <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
              Availability
            </span>
          </div>
          <h2>
            <span className=" md:text-[48px] font-bold leading-tight">
              Explore Go Wilds Real Adventure & Travels
            </span>
          </h2>
          <div className=" text-[#82828a] leading-7">
            Sit amet consectetur integer tincidunt sceleries noda lesry
            volutpat neque fermentum malesuada scelequecy leocras odio blandit
            rhoncus eues feugiat.
          </div>
          <div className=" flex items-center gap-4">
            <div className="">
              <img
                src="src/assets/images/airplane.png"
                className=" w-12"
                alt="flight"
              />
            </div>
            <div className="">
              <h3>
                <span className="text-[20px] font-bold">
                  Protect your life
                </span>
              </h3>
              <p className=" text-[#82828a]">
                We're here for look even you from start to finish.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className=" p-3 rounded-full bg-secondary cursor-pointer relative hover:bg-primary duration-150 transition text-white">
              <BiPhoneCall size={"1.5rem"} />
            </div>
            <div className="">
              <h3>
                <span className=" text-[#82828a] text-[14px]">
                  Call experts
                </span>
              </h3>
              <p className=" font-bold">+92 (03) 68-090</p>
            </div>
            <div className=" cursor-pointer text-white px-5 py-4 rounded-lg duration-150 transition bg-primary hover:bg-[#7ecc5d] relative -bottom-4">
              <a href="/contact">Discover More</a>
            </div>
          </div>
        </div>
       
         
          <div className="md:w-1/2 flex flex-wrap gap-5 relative z-30">
            <div className="card md:flex-[40%]  shadow-lg">
              <div className=" w-fit p-3 rounded-full bg-[#eeeded] cursor-pointer relative hover:bg-primary duration-150 transition text-primary">
                <GiCampingTent size={"3.5rem"} />
              </div>
              <h4 className=" font-bold text-[22px] my-5">Tent Camping</h4>
              <p className="text-[#82828a]">
                Sit amet consectetur intege tincidunt sceleries malesuada
                sceleris massa.
              </p>
            </div>
            <div className="card md:flex-[40%]  shadow-lg">
              <div className=" w-fit p-3 rounded-full cursor-pointer relative bg-primary duration-150 transition text-white">
                <GiMountainRoad size={"3.5rem"} />
              </div>
              <h4 className=" font-bold text-[22px] my-5">Mountain Biking</h4>
              <p className="text-[#82828a]">
                Sit amet consectetur intege tincidunt sceleries malesuada
                sceleris massa.
              </p>
            </div>
            <div className="card md:flex-[40%]  shadow-lg">
              <div className=" w-fit p-3 rounded-full bg-[#eeeded] cursor-pointer relative hover:bg-primary duration-150 transition text-primary">
                <GiFishingBoat size={"3.5rem"} />
              </div>
              <h4 className=" font-bold text-[22px] my-5">Fishing & Boat</h4>
              <p className="text-[#82828a]">
                Sit amet consectetur intege tincidunt sceleries malesuada
                sceleris massa.
              </p>
            </div>
            <div className="card md:flex-[40%]  shadow-lg">
              <div className=" w-fit p-3 rounded-full bg-[#eeeded] cursor-pointer relative hover:bg-primary duration-150 transition  text-primary">
                <GiMountainClimbing size={"3.5rem"} />
              </div>
              <h4 className=" font-bold text-[22px] my-5">
                Adventure climbing
              </h4>
              <p className="text-[#82828a]">
                Sit amet consectetur intege tincidunt sceleries malesuada
                sceleris massa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tours */}
      <Tour_bgBlur check={"discover more"} />

      {/* Who we Are */}
      <div className="bg-white">
        <div className="2xl:w-[68%]  w-[100%]  xl:mx-auto  flex flex-col lg:flex-row justify-between min-h-[calc(100vh-100px)] relative bg-white z-50 pt-24 px-5 gap-y-10 gap-x-5">
          <div className=" flex-[50%]  px-5 pb-0">
            <div className=" overflow-hidden h-full top-rounded">
              <img
                src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/image-07.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" flex-[50%] flex ">
            <div className="flex flex-col gap-8 ">
              <div className="">
                <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
                  Who We Are
                </span>
              </div>
              <h2>
                <span className=" md:text-[48px] font-bold leading-tight">
                  Great Opportunity For Adventure & Travels
                </span>
              </h2>
              <div className=" text-[#82828a] leading-7 ">
                Sit amet consectetur integer tincidunt sceleries noda lesry
                volutpat neque fermentum malesuada scelequecy leocras odio
                blandit rhoncus eues feugiat.
              </div>
              <div className="bg-white flex md:justify-center justify-center flex-col md:flex-row shadow-xl rounded-lg py-8 gap-y-5 gap-x-10">
                <div className="relative flex justify-center flex-col items-center">
                  <div className=" relative w-fit">
                    <div class="progress-bar css">
                      <progress
                        id="css"
                        min="0"
                        max="100"
                        value="50"
                      ></progress>
                    </div>
                  </div>
                  <h4 className=" text-lg font-semibold mt-5">
                    Satisfied Clients
                  </h4>
                </div>
                <div className=" h bg-primary md:w-[0.2px] w-0"></div>
                <div className="relative flex justify-center flex-col items-center">
                  <div className=" relative w-fit">
                    <div class="progress-bar css">
                      <progress
                        id="css"
                        min="0"
                        max="100"
                        value="50"
                      ></progress>
                    </div>
                  </div>
                  <h4 className=" text-lg font-semibold mt-5">Success Rate</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="relative">
        <div className="absolute h-screen bg-transparent w-full overflow-hidden ">
          <div className="bg-shape-10"></div>
        </div>
        <div className="2xl:w-[68%]  w-[100%]  xl:mx-auto min-h-screen relative z-50  text-center">
          <div className=" flex flex-col items-center justify-center gap-5 md:pt-24 pt-12 overflow-hidden">
            <div className="">
              <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
                Team members
              </span>
            </div>
            <h2>
              <span className=" md:text-[48px] font-bold leading-tight">
                We've Expert Team <br /> Members Meet With Team
              </span>
            </h2>
          </div>
          <Team_slider />
        </div>
      </div>

      {/* Who we are */}
      <div className="relative bg-white">
        <div className="2xl:w-[68%]  w-[100%]  xl:mx-auto flex flex-col lg:flex-row justify-center md:justify-between min-h-screen relative bg-white z-50 md:py-24 py-10  px-5 gap-y-10 ">
          <div className=" flex-[50%] flex flex-col gap-8 md:pr-10 ">
            <div className="flex md:items-end md:flex-row flex-col gap-8">
              <div className="">
                <img
                  src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/image-16.jpg"
                  className=" w-full h-full object-contain rounded-lg"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/image-17.jpg"
                  className=" w-full h-full object-contain rounded-lg"
                  alt=""
                />
              </div>
            </div>
            <div className=" flex md:justify-center">
              <div className="md:w-[80%] w-full">
                <img
                  src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/image-18.jpg"
                  className=" w-full h-full object-contain rounded-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" flex-[40%] flex flex-col md:pl-5">
            <div className="mb-10">
              <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
                Who We Are
              </span>
            </div>
            <h2 className=" mb-10">
              <span className=" md:text-[36px] text-[26px] font-bold leading-tight">
                Great Opportunity For Adventure & Travels
              </span>
            </h2>
            <div className="parent gap-8 flex flex-col">
              <div className="child flex items-center md:gap-14 gap-8">
                <div className=" icon-parent flex items-center md:gap-8 gap-3 ">
                  <BsPatchCheckFill
                    className=" text-secondary"
                    size={"1.5rem"}
                  />
                  <div className="icon_1 relative">
                    <FaVest
                      className="p-5 relative bg-white text-primary border rounded-full"
                      size={"5rem"}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className=" text-xl font-semibold">
                    Safety First Always
                  </h4>
                  <p className="text-[#82828a] leading-7 ">
                    Set perspiciatis unde omnis estenatus voluptatem totarem
                    aperiae.
                  </p>
                </div>
              </div>
              <div className="child flex items-center md:gap-14 gap-8">
                <div className=" icon-parent flex items-center md:gap-8 gap-3 ">
                  <BsPatchCheckFill
                    className=" text-secondary"
                    size={"1.5rem"}
                  />
                  <div className="icon_1 relative">
                    <FaCoins
                      className="p-5 relative bg-white text-primary border rounded-full"
                      size={"5rem"}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className=" text-xl font-semibold">
                    Low Price & Friendly
                  </h4>
                  <p className="text-[#82828a] leading-7 ">
                    Quis autem vel eum iure voluptate velit esse nihile
                    consequatur.
                  </p>
                </div>
              </div>
              <div className="child flex items-center md:gap-14 gap-8">
                <div className=" icon-parent flex items-center md:gap-8 gap-3 ">
                  <BsPatchCheckFill
                    className=" text-secondary"
                    size={"1.5rem"}
                  />
                  <div className=" relative">
                    <GiCommercialAirplane
                      className="p-5 relative bg-white text-primary border rounded-full"
                      size={"5rem"}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className=" text-xl font-semibold">
                    Trusted Travel Guide
                  </h4>
                  <p className="text-[#82828a] leading-7 ">
                    At vero accusamus dignissimos ducimus blanditiis deleniti
                    atque quos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Play */}
      <div className=" relative">
        <div className={`bg-fixed-photo-for-music md:hidden`}></div>
        <div className=" 2xl:w-[68%]  w-[100%]  xl:mx-auto flex flex-col md:flex-row md:items-center items-start justify-between md:min-h-[340px] min-h-[200px] relative  overflow-hidden z-50  py-10">
          <div className=" text-white">
            <h1 className=" text-[30px] md:text-[52px] font-[700]">
              Ready to travel with real <br /> adventure and enjoy natural
            </h1>
          </div>
          <a
            href="https://www.youtube.com/watch?v=JA0g4KYMf_k"
            className="music-btn music-btn-2 hover:scale-95 duration-150 transition relative p-10 bg-white rounded-full "
          >
            <FaPlay className=" text-black" size={"2rem"} />
          </a>
        </div>
      </div>

      {/* Services */}
      <div className="relative bg-white">
        <div className="absolute left-0 h-screen bg-transparent w-full overflow-hidden">
          <div className="bg-shape-05"></div>
        </div>
        <div className="2xl:w-[68%]  w-[100%]  xl:mx-auto items-start justify-between min-h-screen relative  overflow-hidden z-50  md:pt-40">
          <div className="flex flex-col md:flex-row md:items-center items-start justify-between relative  overflow-hidden z-50 pb-16">
            <div className=" md:flex-[50%] flex-1">
              <div className="w-[70%] ">
                <img
                  src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/icon-testimonial.png"
                  alt=""
                />
              </div>
            </div>
            <div className="md:flex-[50%] flex-1 overflow-hidden w-full">
              <Splides brand={service} controller={false} />
            </div>
          </div>
          <hr />
          <div className=" py-16 pb-40 overflow-hidden">
            <Splides brand={brand} view={5} controller={false} />
          </div>
        </div>
      </div>
      <Adventure_gallery />
    </div>
  );
};

export default About;
