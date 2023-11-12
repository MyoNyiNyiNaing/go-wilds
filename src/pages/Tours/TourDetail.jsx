import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import User from "../../assets/images/user.png";
import { BiUserCircle } from "react-icons/bi";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineCamera,
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import {
  BsChatDots,
  BsCreditCard2FrontFill,
  BsFillPeopleFill,
  BsStarFill,
  BsStarHalf,
  BsAirplaneEnginesFill,
  BsFillStarFill,
  BsArrowDown,
  BsFillCreditCard2FrontFill,
} from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { FaCheck, FaSmoking, FaUserCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FiHeart } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import {
  MdLocationOn,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineLocalLaundryService,
  MdOutlineRestaurantMenu,
  MdOutlineRoomService,
  MdOutlineTravelExplore,
  MdPeopleOutline,
} from "react-icons/md";
import { Progress } from "@material-tailwind/react";
import { IoPricetag } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { RiParkingBoxLine } from "react-icons/ri";
import Lazy_loader from "../../components/Slider/lazyLoader/LazyLoader";
import tours from "../../Json/adventure.json";

const TourDetail = ({ name }) => {
  const [displayCheck, setDisplayCheck] = useState(false);
  const clickHandler = () => {
    setDisplayCheck(true);
  };
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className=" w-full">
      <div className="w-full relative bg-[#F3F8F6] pb-10 lg:pb-14 ">
        <div className=" lg:flex hidden">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-navigation-size": "1.5rem",
              "--swiper-navigation-background-color": "#bbb",
            }}
            navigation={true}
            loop={true}
            slidesPerView={4}
            spaceBetween={10}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11-600x540.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-9-600x540.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-6-600x540.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-12-600x540.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-2-600x540.jpg" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className=" lg:hidden flex">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-navigation-size": "1.5rem",
              "--swiper-navigation-background-color": "#bbb",
            }}
            navigation={true}
            loop={true}
            slidesPerView={1}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11-600x540.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-9-600x540.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-6-600x540.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-12-600x540.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-2-600x540.jpg" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className=" flex text-white gap-5 items-center justify-center opacity-80 absolute right-4 lg:right-0 top-0 z-50 bg-black w-[100px] py-2">
          <button className="hover:text-[#63ab45] relative">
            <HiOutlineCamera onClick={clickHandler} size={"1.5rem"} />
            <span className=" text-[10px] absolute top-[-3px] right-[-2px] text-white bg-[#63ab45] rounded-full px-1">
              5
            </span>
          </button>
          <a href="https://www.youtube.com/watch?v=MtCMtC50gwY">
            <VscDeviceCameraVideo size={"1.5rem"} />
          </a>
        </div>
        <div className=" 2xl:w-[68%]  w-[100%]  xl:mx-auto flex justify-between gap-5 lg:gap-0 flex-col lg:flex-row lg:px-5 pt-10 lg:pt-16">
          <div className="px-3 lg:px-0">
            <h1 className=" text-[25px] p-0 mb-3 font-bold text-black">
              {name}
            </h1>
            <p className="  text-md text-gray-700 flex items-center gap-2">
              <HiOutlineLocationMarker
                size={"1.4rem"}
                className=" "
                style={{ color: "#63AB45" }}
              />
              Main Street, Brooklyn, NY
            </p>
          </div>
          <hr className=" border-gray-300" />
          <div className="px-2 lg:px-0 flex-wrap flex lg:gap-8 gap-4">
            <div className=" flex items-center gap-2">
              <IoPricetag size={"2rem"} className=" text-[#71b356]" />
              <div>
                <h2 className=" text-gray-600 text-sm">From</h2>
                <div className=" font-semibold text-sm flex gap-3">
                  $116.10
                  <span className=" text-gray-500 line-through">$129.00</span>
                </div>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <GiDuration size={"2rem"} className=" text-[#71b356]" />
              <div className=" text-sm">
                <h2 className=" text-gray-600">Duration</h2>
                <div className=" font-bold flex gap-3">3 days</div>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <MdOutlineTravelExplore
                size={"2rem"}
                className=" text-[#71b356]"
              />
              <div className=" text-sm">
                <h2 className=" text-gray-600">Tour Type</h2>
                <div className=" font-bold flex gap-3">Adventure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" 2xl:w-[68%]  w-[100%]  xl:mx-auto py-4 mb-10 border-b flex flex-col lg:flex-row gap-3 lg:gap-0 items-start lg:items-center justify-between px-3 lg:px-8">
        <div className=" flex text-gray-600 items-center gap-5">
          <div className=" flex gap-1 text-[#F7921E]">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
          </div>
          4.2 by 3 reviews
        </div>
        <div className=" flex gap-3 lg:gap-4">
          <button className=" bg-[#F3F8F6] px-5 py-2 rounded-full text-gray-600 hover:bg-[#63AB45] tracking-wide hover:text-white text-[11.3px]">
            SHARE
          </button>
          <button className=" bg-[#F3F8F6] px-5 py-2 rounded-full text-gray-600 hover:bg-[#63AB45] tracking-wide hover:text-white text-[11.3px]">
            REVIEWS
          </button>
          <button className=" bg-[#F3F8F6] px-5 py-2 rounded-full text-gray-600 hover:bg-[#63AB45] tracking-wide hover:text-white text-[11.3px]">
            WISHLIST
          </button>
        </div>
      </div>
      <div className="  2xl:w-[68%]  w-[100%]  xl:mx-auto mb-20 flex flex-col lg:flex-row gap-10 lg:gap-0">
        <div className="w-full lg:w-[65%] h-full ps-4">
          <h1 className=" text-[20px] lg:text-[26px] font-bold mb-4 text-black p-0">
            Explore Tours
          </h1>
          <p className=" text-[14px] text-gray-600 leading-6 tracking-wide">
            Sed ut perspiciatis unde omniste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam, eaque ip quae
            abillo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit.
          </p>
          <div className=" flex mt-4 mb-10 flex-col lg:flex-row-reverse">
            <div className="w-full lg:w-[60%]">
              <img
                src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/tour-details.jpg"
                alt=""
              />
            </div>
            <div className=" w-full lg:w-[45%] pe-10 flex gap-4 flex-col mt-7">
              <div>
                <h1 className=" text-xl mb-3 font-bold text-black p-0">
                  Advance Facilities
                </h1>
                <p className=" text-[14px] text-gray-500 tracking-wide leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h1 className=" text-xl mb-3 font-bold text-black p-0">
                  Challenge
                </h1>
                <p className=" text-[14px] text-gray-500 tracking-wide leading-6">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore quasi architecto beatae vitae dicta.
                </p>
              </div>
            </div>
          </div>
          <div className=" border-b mb-14 pb-16 lg:pb-10">
            <h1 className="mb-5 text-xl font-bold">Included/Exclude</h1>
            <div className=" flex flex-col lg:flex-row gap-4 lg:gap-20">
              <ul className=" flex flex-col gap-3 text-gray-500">
                <li className=" flex items-center gap-3">
                  <FaCheck size={"1rem"} className=" text-[#71b356]" /> Pick and
                  Drop Services
                </li>
                <li className=" flex items-center gap-3">
                  <FaCheck size={"1rem"} className=" text-[#71b356]" /> 1 Meal
                  Per Day
                </li>
                <li className=" flex items-center gap-3">
                  <FaCheck size={"1rem"} className=" text-[#71b356]" />
                  Cruise Dinner & Music Event
                </li>
                <li className=" flex items-center gap-3">
                  <FaCheck size={"1rem"} className=" text-[#71b356]" /> Visit 7
                  Best Places in the City With Group
                </li>
              </ul>
              <ul className=" flex flex-col gap-3 text-gray-500">
                <li className=" flex items-center gap-3">
                  <ImCross size={"0.7rem"} className=" text-black" /> Additional
                  Services
                </li>
                <li className=" flex items-center gap-3">
                  <ImCross size={"0.7rem"} className=" text-black" /> Insurance
                </li>
                <li className=" flex items-center gap-3">
                  <ImCross size={"0.7rem"} className=" text-black" />
                  Food & Drinks
                </li>
                <li className=" flex items-center gap-3">
                  <ImCross size={"0.7rem"} className=" text-black" /> Visit 7
                  Tickets
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className=" text-[25px] my-5 font-bold text-black p-0">
              Tour Amenities
            </h1>
            <div className=" flex flex-wrap gap-0 lg:gap-4 mb-10">
              <div className=" flex items-center gap-3 text-[14px] text-gray-600 w-[50%] lg:w-[30%]">
                <BsFillCreditCard2FrontFill
                  size={"2rem"}
                  className=" text-[#71b356]"
                />
                Accepts Credit Cards
              </div>
              <div className=" flex items-center gap-3 text-[14px] text-gray-600 w-[50%] lg:w-[30%]">
                <RiParkingBoxLine size={"2rem"} className=" text-[#71b356]" />
                Car Parking
              </div>
              <div className=" flex items-center gap-3 text-[14px] text-gray-600 w-[50%] lg:w-[30%]">
                <MdOutlineLocalLaundryService
                  size={"2rem"}
                  className=" text-[#71b356]"
                />
                Laundry Service
              </div>
              <div className=" flex items-center gap-3 text-[14px] text-gray-600 w-[50%] lg:w-[30%]">
                <MdOutlineRoomService
                  size={"2rem"}
                  className=" text-[#71b356]"
                />
                Reservations
              </div>
              <div className=" flex items-center gap-3 text-[14px] text-gray-600 w-[50%] lg:w-[30%]">
                <MdOutlineRestaurantMenu
                  size={"2rem"}
                  className=" text-[#71b356]"
                />
                Restaurant
              </div>
              <div className=" flex items-center gap-3 text-[14px] text-gray-600 w-[50%] lg:w-[30%]">
                <FaSmoking size={"2rem"} className=" text-[#71b356]" />
                Smoking Allowed
              </div>
            </div>
          </div>

          <div className=" ">
            <h1 className=" text-[25px] font-bold my-3">Location</h1>
            <div className="w-full">
              <iframe
                className="w-full rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d650547.8025373048!2d-74.40772282457412!3d40.76167458996479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2smm!4v1686578294446!5m2!1sen!2smm"
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div>
            <h1 className=" text-2xl font-bold mb-4 text-black p-0 mt-10">
              Related Tours
            </h1>
            <div className="w-full hidden lg:flex">
              <Swiper
                style={{
                  "--swiper-navigation-color": "black",
                  "--swiper-navigation-background-color": "black",
                  "--swiper-navigation-size": "1.5rem",
                }}
                navigation={true}
                loop={true}
                slidesPerView={2}
                spaceBetween={10}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className=" flex flex-col relative mb-56 w-full">
                    <div className=" w-full rounded-t-lg">
                      <img
                        className=" w-full h-[60vh] rounded-t-xl lg:h-[50vh] object-cover"
                        src="	https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-5.jpg"
                        alt=""
                      />
                      <div className=" absolute z-[10] w-full  p-3 top-0 flex justify-between">
                        <div className="gap-2 flex flex-col  ">
                          <p className="  rounded-md px-2 text-sm bg-cyan-600 shadow-lg text-white">
                            FEATURED
                          </p>
                        </div>
                        <div>
                          <button className=" bg-black opacity-60 hover:opacity-90 text-white p-2 rounded-md ">
                            <FiHeart />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className=" text-gray-500 p-5 shadow-lg w-full rounded-2xl flex flex-col gap-3 absolute bottom-[-190px] bg-white">
                      <div className="flex gap-1 pt-3 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                      <button className="text-start text-gray-800 hover:text-[#63ab45] text-xl font-semibold">
                        Cottages In The Middle Of Beach
                      </button>
                      <div className=" flex items-center gap-2">
                        <MdLocationOn
                          size={"1.2rem"}
                          className="text-[#63ab45]"
                        />
                        <p> Main Street, Brooklyn, NY</p>
                      </div>
                      <div className=" border-b-2 pb-5 flex items-center gap-2">
                        <HiOutlineCurrencyDollar
                          size={"1.2rem"}
                          className="text-[#63ab45]"
                        />{" "}
                        From <span className="  text-[#F7921E]">$109.00</span>{" "}
                      </div>
                      <div className=" flex justify-between text-sm">
                        <div className="flex gap-4">
                          <span className=" flex items-center gap-2">
                            <LuClock3
                              size={"1rem"}
                              className="text-[#63ab45]"
                            />{" "}
                            3 days
                          </span>
                          <span className=" flex items-center gap-2">
                            <MdPeopleOutline
                              size={"1.2rem"}
                              className="text-[#63ab45]"
                            />
                            12
                          </span>
                        </div>
                        <button className="flex items-center text-md gap-2 text-black hover:text-[#63ab45]">
                          Explore <HiOutlineArrowNarrowRight size={"1.3rem"} />
                        </button>
                      </div>
                      <div className=" absolute bg-white flex gap-4 rounded-lg top-[-18px] right-5 shadow-md px-4 py-1">
                        <button className="hover:text-[#63ab45] relative">
                          <HiOutlineCamera
                            onClick={clickHandler}
                            size={"1.5rem"}
                          />
                          <span className=" text-[10px] absolute top-[-3px] right-[-2px] text-white bg-[#63ab45] rounded-full px-1">
                            5
                          </span>
                        </button>
                        <a
                          className="hover:text-[#63ab45]"
                          href="https://www.youtube.com/watch?v=MtCMtC50gwY"
                        >
                          <VscDeviceCameraVideo size={"1.5rem"} />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex flex-col relative w-full mb-56">
                    <div className=" w-full rounded-t-lg">
                      <img
                        className=" w-full h-[60vh] rounded-t-xl lg:h-[50vh] object-cover"
                        src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-4.jpg"
                        alt=""
                      />
                      <div className=" absolute z-[10] w-full  p-3 top-0 flex justify-between">
                        <div className="gap-2 flex flex-col  ">
                          <p className="  rounded-md px-2 text-center text-sm bg-[#F7921E] shadow-lg text-white">
                            10% OFF
                          </p>
                          <p className="  rounded-md px-2 text-sm bg-cyan-600 shadow-lg text-white">
                            FEATURED
                          </p>
                        </div>
                        <div>
                          <button className=" bg-black opacity-60 hover:opacity-90 text-white p-2 rounded-md ">
                            <FiHeart />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className=" text-gray-500 p-5 shadow-lg w-full rounded-2xl flex flex-col gap-3 absolute bottom-[-190px] bg-white">
                      <div className="flex gap-1 pt-3 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                      <button className="text-start text-gray-800 hover:text-[#63ab45] text-xl font-semibold">
                        Man Standing on a Rock
                      </button>
                      <div className=" flex items-center gap-2">
                        <MdLocationOn
                          size={"1.2rem"}
                          className="text-[#63ab45]"
                        />
                        <p> Main Street, Brooklyn, NY</p>
                      </div>
                      <div className=" border-b-2 pb-5 flex items-center gap-2">
                        <HiOutlineCurrencyDollar
                          size={"1.2rem"}
                          className="text-[#63ab45]"
                        />{" "}
                        From <span className="  text-[#F7921E]">$116.10</span>{" "}
                        <span className="line-through">$129.00</span>
                      </div>
                      <div className=" flex justify-between text-sm">
                        <div className="flex gap-4">
                          <span className=" flex items-center gap-2">
                            <LuClock3
                              size={"1rem"}
                              className="text-[#63ab45]"
                            />{" "}
                            5 days
                          </span>
                          <span className=" flex items-center gap-2">
                            <MdPeopleOutline
                              size={"1.2rem"}
                              className="text-[#63ab45]"
                            />
                            12
                          </span>
                        </div>
                        <button className="flex items-center text-md gap-2 text-black hover:text-[#63ab45]">
                          Explore <HiOutlineArrowNarrowRight size={"1.3rem"} />
                        </button>
                      </div>
                      <div className=" absolute bg-white flex gap-4 rounded-lg top-[-18px] right-5 shadow-md px-4 py-1">
                        <button className="hover:text-[#63ab45] relative">
                          <HiOutlineCamera
                            onClick={clickHandler}
                            size={"1.5rem"}
                          />
                          <span className=" text-[10px] absolute top-[-3px] right-[-2px] text-white bg-[#63ab45] rounded-full px-1">
                            5
                          </span>
                        </button>
                        <a
                          className="hover:text-[#63ab45]"
                          href="https://www.youtube.com/watch?v=MtCMtC50gwY"
                        >
                          <VscDeviceCameraVideo size={"1.5rem"} />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex flex-col relative w-full mb-56">
                    <div className=" w-full rounded-t-lg">
                      <img
                        className=" w-full h-[60vh] rounded-t-xl lg:h-[50vh] object-cover"
                        src="	https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-6.jpg"
                        alt=""
                      />
                      <div className=" absolute z-[10] w-full  p-3 top-0 flex justify-between">
                        <div className="gap-2 flex flex-col  ">
                          <p className="  rounded-md px-2 text-center text-sm bg-[#F7921E] shadow-lg text-white">
                            10% OFF
                          </p>
                          <p className="  rounded-md px-2 text-sm bg-cyan-600 shadow-lg text-white">
                            FEATURED
                          </p>
                        </div>
                        <div>
                          <button className=" bg-black opacity-60 hover:opacity-90 text-white p-2 rounded-md ">
                            <FiHeart />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className=" text-gray-500 p-5 shadow-lg w-full rounded-2xl flex flex-col gap-3 absolute bottom-[-190px] bg-white">
                      <div className="flex gap-1 pt-3 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                      <button className="text-start text-gray-800 hover:text-[#63ab45] text-xl font-semibold">
                        Beautiful Floating Villa
                      </button>
                      <div className=" flex items-center gap-2">
                        <MdLocationOn
                          size={"1.2rem"}
                          className="text-[#63ab45]"
                        />
                        <p> Main Street, Brooklyn, NY</p>
                      </div>
                      <div className=" border-b-2 pb-5 flex items-center gap-2">
                        <HiOutlineCurrencyDollar
                          size={"1.2rem"}
                          className="text-[#63ab45]"
                        />{" "}
                        From <span className="  text-[#F7921E]">$116.10</span>{" "}
                        <span className="line-through">$129.00</span>
                      </div>
                      <div className=" flex justify-between text-sm">
                        <div className="flex gap-4">
                          <span className=" flex items-center gap-2">
                            <LuClock3
                              size={"1rem"}
                              className="text-[#63ab45]"
                            />{" "}
                            5 days
                          </span>
                          <span className=" flex items-center gap-2">
                            <MdPeopleOutline
                              size={"1.2rem"}
                              className="text-[#63ab45]"
                            />
                            12
                          </span>
                        </div>
                        <button className="flex items-center text-md gap-2 text-black hover:text-[#63ab45]">
                          Explore <HiOutlineArrowNarrowRight size={"1.3rem"} />
                        </button>
                      </div>
                      <div className=" absolute bg-white flex gap-4 rounded-lg top-[-18px] right-5 shadow-md px-4 py-1">
                        <button className="hover:text-[#63ab45] relative">
                          <HiOutlineCamera
                            onClick={clickHandler}
                            size={"1.5rem"}
                          />
                          <span className=" text-[10px] absolute top-[-3px] right-[-2px] text-white bg-[#63ab45] rounded-full px-1">
                            5
                          </span>
                        </button>
                        <a
                          className="hover:text-[#63ab45]"
                          href="https://www.youtube.com/watch?v=MtCMtC50gwY"
                        >
                          <VscDeviceCameraVideo size={"1.5rem"} />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex flex-col relative w-full mb-56">
                    <div className=" w-full rounded-t-lg">
                      <img
                        className=" w-full h-[60vh] rounded-t-xl lg:h-[50vh] object-cover"
                        src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-12.jpg"
                        alt=""
                      />
                      <div className=" absolute z-[10] w-full  p-3 top-0 flex justify-between">
                        <div className="gap-2 flex flex-col  ">
                          <p className="  rounded-md px-2 text-sm bg-cyan-600 shadow-lg text-white">
                            FEATURED
                          </p>
                        </div>
                        <div>
                          <button className=" bg-black opacity-60 hover:opacity-90 text-white p-2 rounded-md ">
                            <FiHeart />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className=" text-gray-500 p-5 shadow-lg w-full rounded-2xl flex flex-col gap-3 absolute bottom-[-190px] bg-white">
                      <div className="flex gap-1 pt-3 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                      <button className="text-start text-gray-800 hover:text-[#63ab45] text-xl font-semibold">
                        Walking the Amalfi Coast
                      </button>
                      <div className=" flex items-center gap-2">
                        <MdLocationOn
                          size={"1.2rem"}
                          className="text-[#63ab45]"
                        />
                        <p> Main Street, Brooklyn, NY</p>
                      </div>
                      <div className=" border-b-2 pb-5 flex items-center gap-2">
                        <HiOutlineCurrencyDollar
                          size={"1.2rem"}
                          className="text-[#63ab45]"
                        />{" "}
                        From <span className="  text-[#F7921E]">$129.00</span>{" "}
                      </div>
                      <div className=" flex justify-between text-sm">
                        <div className="flex gap-4">
                          <span className=" flex items-center gap-2">
                            <LuClock3
                              size={"1rem"}
                              className="text-[#63ab45]"
                            />{" "}
                            5 days
                          </span>
                          <span className=" flex items-center gap-2">
                            <MdPeopleOutline
                              size={"1.2rem"}
                              className="text-[#63ab45]"
                            />
                            12
                          </span>
                        </div>
                        <button className="flex items-center text-md gap-2 text-black hover:text-[#63ab45]">
                          Explore <HiOutlineArrowNarrowRight size={"1.3rem"} />
                        </button>
                      </div>
                      <div className=" absolute bg-white flex gap-4 rounded-lg top-[-18px] right-5 shadow-md px-4 py-1">
                        <button className="hover:text-[#63ab45] relative">
                          <HiOutlineCamera
                            onClick={clickHandler}
                            size={"1.5rem"}
                          />
                          <span className=" text-[10px] absolute top-[-3px] right-[-2px] text-white bg-[#63ab45] rounded-full px-1">
                            5
                          </span>
                        </button>
                        <a
                          className="hover:text-[#63ab45]"
                          href="https://www.youtube.com/watch?v=MtCMtC50gwY"
                        >
                          <VscDeviceCameraVideo size={"1.5rem"} />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex flex-col relative w-full  mb-56 ">
                    <div className=" w-full rounded-t-lg">
                      <img
                        className=" w-full h-[60vh] rounded-t-xl lg:h-[50vh] object-cover"
                        src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-10.jpg"
                        alt=""
                      />
                      <div className=" absolute z-[10] w-full  p-3 top-0 flex justify-between">
                        <div className="gap-2 flex flex-col  ">
                          <p className="  rounded-md px-2 text-sm bg-cyan-600 shadow-lg text-white">
                            FEATURED
                          </p>
                        </div>
                        <div>
                          <button className=" bg-black opacity-60 hover:opacity-90 text-white p-2 rounded-md ">
                            <FiHeart />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className=" text-gray-500 p-5 shadow-lg w-full rounded-2xl flex flex-col gap-3 absolute bottom-[-190px] bg-white">
                      <div className="flex gap-1 pt-3 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                      <button className="text-start text-gray-800 hover:text-[#63ab45] text-xl font-semibold">
                        North Island Adventure Tour
                      </button>
                      <div className=" flex items-center gap-2">
                        <MdLocationOn
                          size={"1.2rem"}
                          className="text-[#63ab45]"
                        />
                        <p> Main Street, Brooklyn, NY</p>
                      </div>
                      <div className=" border-b-2 pb-5 flex items-center gap-2">
                        <HiOutlineCurrencyDollar
                          size={"1.2rem"}
                          className="text-[#63ab45]"
                        />{" "}
                        From <span className="  text-[#F7921E]">$129.00</span>{" "}
                      </div>
                      <div className=" flex justify-between text-sm">
                        <div className="flex gap-4">
                          <span className=" flex items-center gap-2">
                            <LuClock3
                              size={"1rem"}
                              className="text-[#63ab45]"
                            />{" "}
                            3 days
                          </span>
                          <span className=" flex items-center gap-2">
                            <MdPeopleOutline
                              size={"1.2rem"}
                              className="text-[#63ab45]"
                            />
                            10
                          </span>
                        </div>
                        <button className="flex items-center text-md gap-2 text-black hover:text-[#63ab45]">
                          Explore <HiOutlineArrowNarrowRight size={"1.3rem"} />
                        </button>
                      </div>
                      <div className=" absolute bg-white flex gap-4 rounded-lg top-[-18px] right-5 shadow-md px-4 py-1">
                        <button className="hover:text-[#63ab45] relative">
                          <HiOutlineCamera
                            onClick={clickHandler}
                            size={"1.5rem"}
                          />
                          <span className=" text-[10px] absolute top-[-3px] right-[-2px] text-white bg-[#63ab45] rounded-full px-1">
                            5
                          </span>
                        </button>
                        <a
                          className="hover:text-[#63ab45]"
                          href="https://www.youtube.com/watch?v=MtCMtC50gwY"
                        >
                          <VscDeviceCameraVideo size={"1.5rem"} />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex flex-col relative w-full mb-56 ">
                    <div className=" w-full rounded-t-lg">
                      <img
                        className=" w-full h-[60vh] rounded-t-xl lg:h-[50vh] object-cover"
                        src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-8.jpg"
                        alt=""
                      />
                      <div className=" absolute z-[10] w-full  p-3 top-0 flex justify-between">
                        <div className="gap-2 flex flex-col  ">
                          <p className="  rounded-md px-2 text-sm bg-cyan-600 shadow-lg text-white">
                            FEATURED
                          </p>
                        </div>
                        <div>
                          <button className=" bg-black opacity-60 hover:opacity-90 text-white p-2 rounded-md ">
                            <FiHeart />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className=" text-gray-500 p-5 shadow-lg w-full rounded-2xl flex flex-col gap-3 absolute bottom-[-190px] bg-white">
                      <div className="flex gap-1 pt-3 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                      </div>
                      <button className="text-start text-gray-800 hover:text-[#63ab45] text-xl font-semibold">
                        Discovery Island Kayak Tour
                      </button>
                      <div className=" flex items-center gap-2">
                        <MdLocationOn
                          size={"1.2rem"}
                          className="text-[#63ab45]"
                        />
                        <p> Main Street, Brooklyn, NY</p>
                      </div>
                      <div className=" border-b-2 pb-5 flex items-center gap-2">
                        <HiOutlineCurrencyDollar
                          size={"1.2rem"}
                          className="text-[#63ab45]"
                        />{" "}
                        From <span className="  text-[#F7921E]">$129.00</span>{" "}
                      </div>
                      <div className=" flex justify-between text-sm">
                        <div className="flex gap-4">
                          <span className=" flex items-center gap-2">
                            <LuClock3
                              size={"1rem"}
                              className="text-[#63ab45]"
                            />{" "}
                            3 days
                          </span>
                          <span className=" flex items-center gap-2">
                            <MdPeopleOutline
                              size={"1.2rem"}
                              className="text-[#63ab45]"
                            />
                            10
                          </span>
                        </div>
                        <button className="flex items-center text-md gap-2 text-black hover:text-[#63ab45]">
                          Explore <HiOutlineArrowNarrowRight size={"1.3rem"} />
                        </button>
                      </div>
                      <div className=" absolute bg-white flex gap-4 rounded-lg top-[-18px] right-5 shadow-md px-4 py-1">
                        <button className="hover:text-[#63ab45] relative">
                          <HiOutlineCamera
                            onClick={clickHandler}
                            size={"1.5rem"}
                          />
                          <span className=" text-[10px] absolute top-[-3px] right-[-2px] text-white bg-[#63ab45] rounded-full px-1">
                            5
                          </span>
                        </button>
                        <a
                          className="hover:text-[#63ab45]"
                          href="https://www.youtube.com/watch?v=MtCMtC50gwY"
                        >
                          <VscDeviceCameraVideo size={"1.5rem"} />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-full flex lg:hidden">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-navigation-size": "1.5rem",
                  "--swiper-navigation-background-color": "#bbb",
                }}
                navigation={true}
                loop={true}
                slidesPerView={1}
                spaceBetween={10}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className=" flex flex-col relative mb-56 w-full">
                    <div className=" w-full rounded-t-lg">
                      <img
                        className=" w-full h-[60vh] rounded-t-xl lg:h-[50vh] object-cover"
                        src="	https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-5.jpg"
                        alt=""
                      />
                      <div className=" absolute z-[10] w-full  p-3 top-0 flex justify-between">
                        <div className="gap-2 flex flex-col  ">
                          <p className="  rounded-md px-2 text-sm bg-cyan-600 shadow-lg text-white">
                            FEATURED
                          </p>
                        </div>
                        <div>
                          <button className=" bg-black opacity-60 hover:opacity-90 text-white p-2 rounded-md ">
                            <FiHeart />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className=" text-gray-500 p-5 shadow-lg w-full rounded-2xl flex flex-col gap-3 absolute bottom-[-190px] bg-white">
                      <div className="flex gap-1 pt-3 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                      <button className="text-start text-gray-800 hover:text-[#63ab45] text-xl font-semibold">
                        Cottages In The Middle Of Beach
                      </button>
                      <div className=" flex items-center gap-2">
                        <MdLocationOn
                          size={"1.2rem"}
                          className="text-[#63ab45]"
                        />
                        <p> Main Street, Brooklyn, NY</p>
                      </div>
                      <div className=" border-b-2 pb-5 flex items-center gap-2">
                        <HiOutlineCurrencyDollar
                          size={"1.2rem"}
                          className="text-[#63ab45]"
                        />{" "}
                        From <span className="  text-[#F7921E]">$109.00</span>{" "}
                      </div>
                      <div className=" flex justify-between text-sm">
                        <div className="flex gap-4">
                          <span className=" flex items-center gap-2">
                            <LuClock3
                              size={"1rem"}
                              className="text-[#63ab45]"
                            />{" "}
                            3 days
                          </span>
                          <span className=" flex items-center gap-2">
                            <MdPeopleOutline
                              size={"1.2rem"}
                              className="text-[#63ab45]"
                            />
                            12
                          </span>
                        </div>
                        <button className="flex items-center text-md gap-2 text-black hover:text-[#63ab45]">
                          Explore <HiOutlineArrowNarrowRight size={"1.3rem"} />
                        </button>
                      </div>
                      <div className=" absolute bg-white flex gap-4 rounded-lg top-[-18px] right-5 shadow-md px-4 py-1">
                        <button className="hover:text-[#63ab45] relative">
                          <HiOutlineCamera
                            onClick={clickHandler}
                            size={"1.5rem"}
                          />
                          <span className=" text-[10px] absolute top-[-3px] right-[-2px] text-white bg-[#63ab45] rounded-full px-1">
                            5
                          </span>
                        </button>
                        <button className="hover:text-[#63ab45]">
                          <VscDeviceCameraVideo size={"1.5rem"} />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className=" mb-10">
            <h1 className=" text-[25px] lg:text-[30px] font-bold mb-5">
              Review Scores
            </h1>
            <div className="flex flex-col border border-gray-400  rounded-lg lg:flex-row ">
              <div className="w-full lg:w-[40%] flex flex-col items-center justify-center border-b lg:border-b-0 border-gray-400 lg:border-r py-5">
                <h1 className=" text-[50px] lg:text-[90px] leading-none">
                  4.2<span className=" text-2xl text-gray-600">/5</span>
                </h1>
                <div className="text-2xl text-[#71b356]">Wonderful</div>
                <div className=" text-xl text-gray-600">3 verified reviews</div>
              </div>
              <div className="w-full lg:w-[60%] p-10">
                <div className="w-full  flex flex-col mb-5">
                  <div className="flex justify-between mb-2">
                    <span className=" font-semibold">Quality</span>
                    <span className="  text-gray-600">4.33/5</span>
                  </div>
                  <Progress value={87} className="rounded-sm " color="green" />
                </div>
                <div className="w-full  flex flex-col mb-5">
                  <div className="flex justify-between mb-2">
                    <span className=" font-semibold">Location</span>
                    <span className="  text-gray-600">4/5</span>
                  </div>
                  <Progress value={80} className="rounded-sm " color="green" />
                </div>
                <div className="w-full  flex flex-col mb-5">
                  <div className="flex justify-between mb-2">
                    <span className=" font-semibold">Amenities</span>
                    <span className="  text-gray-600">4/5</span>
                  </div>
                  <Progress value={80} className="rounded-sm " color="green" />
                </div>
                <div className="w-full  flex flex-col mb-5">
                  <div className="flex justify-between mb-2">
                    <span className=" font-semibold">Services</span>
                    <span className="  text-gray-600">4.33/5</span>
                  </div>
                  <Progress value={87} className="rounded-sm " color="green" />
                </div>
                <div className="w-full  flex flex-col mb-5">
                  <div className="flex justify-between mb-2">
                    <span className=" font-semibold">Price</span>
                    <span className="  text-gray-600">4.33/5</span>
                  </div>
                  <Progress value={87} className="rounded-sm " color="green" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 ">
            <h1 className="text-xl lg:text-2xl font-bold mb-2 text-black p-0 ">
              3 thoughts on “Walking the Amalfi Coast”
            </h1>
            <hr className=" w-[60px] border-[#71b356] border-[1.5px]" />
          </div>
          <div>
            <div className="my-8 flex gap-5 pb-5 lg:pb-0 border-b-[1.5px]">
              <div className=" w-[30%] lg:w-[10%]">
                <FaUserCircle size={"3rem"} className=" text-gray-500" />
              </div>
              <div>
                <div className=" flex flex-col relative">
                  <h1 className=" text-lg font-bold text-black p-0">admin</h1>
                  <div className=" flex items-center gap-3 text-gray-500 mb-5">
                    <hr className=" w-[20px] border-[#71b356] border-[1.5px]" />
                    February 8, 2023
                  </div>
                  <ul className=" text-gray-500 flex gap-6 flex-wrap mb-5">
                    <li>
                      <h4 className=" mb-2 font-bold text-gray-500 p-0  ">
                        Quality
                      </h4>
                      <div className=" flex gap-1 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    </li>
                    <li>
                      <h4 className=" mb-2 font-bold text-gray-500 p-0 ">
                        Location
                      </h4>
                      <div className=" flex gap-1 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    </li>
                    <li>
                      <h4 className=" mb-2 font-bold text-gray-500 p-0 ">
                        Amenities
                      </h4>
                      <div className=" flex gap-1 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    </li>
                    <li>
                      <h4 className=" mb-2 font-bold text-gray-500 p-0 ">
                        Services
                      </h4>
                      <div className=" flex gap-1 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    </li>
                    <li>
                      <h4 className=" mb-2 font-bold text-gray-500 p-0 ">
                        Price
                      </h4>
                      <div className=" flex gap-1 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    </li>
                  </ul>
                  <div className=" text-gray-500 mb-10 pr-4">
                    This is the best tour on the east coast! It was amazing how
                    many places we visited and what great memories we made!
                  </div>
                  <div className=" hidden items-center gap-2 absolute  lg:flex lg:top-0 lg:right-0">
                    <BsChatDots />
                    Reply
                  </div>
                  <div className=" flex lg:hidden items-center gap-2 absolute bottom-0">
                    <BsChatDots />
                    Reply
                  </div>
                </div>
              </div>
            </div>
            <div className="my-8 flex gap-5 pb-5 lg:pb-0 border-b-[1.5px]">
              <div className=" w-[30%] lg:w-[10%]">
                <FaUserCircle size={"3rem"} className=" text-gray-500" />
              </div>
              <div>
                <div className=" flex flex-col relative">
                  <h1 className=" text-lg font-bold text-black p-0">admin</h1>
                  <div className=" flex items-center gap-3 text-gray-500 mb-5">
                    <hr className=" w-[20px] border-[#71b356] border-[1.5px]" />
                    February 8, 2023
                  </div>
                  <ul className=" text-gray-500 flex gap-6 flex-wrap mb-5">
                    <li>
                      <h4 className=" mb-2 text-gray-500 font-bold">Quality</h4>
                      <div className=" flex gap-1 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    </li>
                    <li>
                      <h4 className=" mb-2 text-gray-500 font-bold">
                        Location
                      </h4>
                      <div className=" flex gap-1 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    </li>
                    <li>
                      <h4 className=" mb-2 text-gray-500 font-bold">
                        Amenities
                      </h4>
                      <div className=" flex gap-1 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    </li>
                    <li>
                      <h4 className=" mb-2 text-gray-500 font-bold">
                        Services
                      </h4>
                      <div className=" flex gap-1 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    </li>
                    <li>
                      <h4 className=" mb-2 text-gray-500 font-bold">Price</h4>
                      <div className=" flex gap-1 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    </li>
                  </ul>
                  <div className=" text-gray-500 mb-10 pr-4">
                    This is the best tour on the east coast! It was amazing how
                    many places we visited and what great memories we made!
                  </div>
                  <div className=" hidden items-center gap-2 absolute  lg:flex lg:top-0 lg:right-0">
                    <BsChatDots />
                    Reply
                  </div>
                  <div className=" flex lg:hidden items-center gap-2 absolute bottom-0">
                    <BsChatDots />
                    Reply
                  </div>
                </div>
              </div>
            </div>
            <div className="my-8 flex gap-5 pb-5 lg:pb-0 border-b-[1.5px]">
              <div className=" w-[30%] lg:w-[10%]">
                <FaUserCircle size={"3rem"} className=" text-gray-500" />
              </div>
              <div>
                <div className=" flex flex-col relative">
                  <h1 className=" text-lg font-bold text-black p-0">admin</h1>
                  <div className=" flex items-center gap-3 text-gray-500 mb-5">
                    <hr className=" w-[20px] border-[#71b356] border-[1.5px]" />
                    February 8, 2023
                  </div>
                  <ul className=" text-gray-500 flex gap-6 flex-wrap mb-5">
                    <li>
                      <h4 className=" mb-2 text-gray-500 font-bold">Quality</h4>
                      <div className=" flex gap-1 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    </li>
                    <li>
                      <h4 className=" mb-2 text-gray-500 font-bold">
                        Location
                      </h4>
                      <div className=" flex gap-1 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    </li>
                    <li>
                      <h4 className=" mb-2 text-gray-500 font-bold">
                        Amenities
                      </h4>
                      <div className=" flex gap-1 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    </li>
                    <li>
                      <h4 className=" mb-2 text-gray-500 font-bold">
                        Services
                      </h4>
                      <div className=" flex gap-1 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    </li>
                    <li>
                      <h4 className=" mb-2 text-gray-500 font-bold">Price</h4>
                      <div className=" flex gap-1 text-[#F7921E]">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                      </div>
                    </li>
                  </ul>
                  <div className=" text-gray-500 mb-10 pr-4">
                    This is the best tour on the east coast! It was amazing how
                    many places we visited and what great memories we made!
                  </div>
                  <div className=" hidden items-center gap-2 absolute  lg:flex lg:top-0 lg:right-0">
                    <BsChatDots />
                    Reply
                  </div>
                  <div className=" flex lg:hidden items-center gap-2 absolute bottom-0">
                    <BsChatDots />
                    Reply
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 ">
            <h1 className="text-xl lg:text-2xl font-bold mb-2 text-black p-0">
              Add a Comment
            </h1>
            <hr className=" w-[60px] border-[#71b356] border-[1.5px]" />
          </div>
          <div className=" w-full">
            <div className=" text-gray-500">
              Your email address will not be published.
            </div>
            <div className=" flex w-full my-8 gap-10">
              <ul className=" w-[50%] lg:w-[60%] text-gray-500 flex gap-10 flex-wrap mb-5">
                <li>
                  <h4 className=" mb-2 font-bold text-gray-500 p-0 ">
                    Quality
                  </h4>
                  <div className=" flex gap-1 text-[#F7921E]">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                </li>
                <li>
                  <h4 className=" mb-2 font-bold text-gray-500 p-0 ">
                    Location
                  </h4>
                  <div className=" flex gap-1 text-[#F7921E]">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                </li>
                <li>
                  <h4 className=" mb-2 font-bold text-gray-500 p-0 ">
                    Amenities
                  </h4>
                  <div className=" flex gap-1 text-[#F7921E]">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                </li>
                <li>
                  <h4 className=" mb-2 font-bold text-gray-500 p-0 ">
                    Services
                  </h4>
                  <div className=" flex gap-1 text-[#F7921E]">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                </li>
                <li>
                  <h4 className=" mb-2 font-bold text-gray-500 p-0 ">Price</h4>
                  <div className=" flex gap-1 text-[#F7921E]">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                </li>
              </ul>
              <div className=" w-[40%]">
                <div className=" flex flex-col w-full lg:w-[70%] py-3 rounded-xl text-center text-[30px] lg:text-[37px] text-[#F7921E] bg-[#F3F8F6]">
                  5.00
                  <span className="text-lg lg:text-xl text-gray-500">
                    Average Rating
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <div className=" w-full flex-wrap lg:flex-nowrap gap-5 flex mb-5">
              <div className=" w-full lg:w-1/2 rounded-lg p-5 bg-[#F3F8F6]">
                <input
                  type="text"
                  placeholder="Your Name "
                  className=" outline-none bg-[#F3F8F6] border-none "
                />
              </div>
              <div className=" w-full lg:w-1/2 rounded-lg p-5 bg-[#F3F8F6]">
                <input
                  type="text"
                  placeholder="Email "
                  className=" outline-none bg-[#F3F8F6] border-none "
                />
              </div>
            </div>
            <div className=" ">
              <textarea
                name=""
                className=" w-full rounded-lg bg-[#F3F8F6] p-5 outline-none border-none"
                placeholder="Write Your Comment"
                rows="5"
              ></textarea>
            </div>
            <div className=" flex items-center gap-3 my-5">
              <input type="checkbox" name="" id="" />
              <div className=" text-gray-500">
                Save my name, email, and website in this browser for the next
                time I comment.
              </div>
            </div>
            <div>
              <button className=" bg-[#71b356] px-5 py-3 rounded-lg text-white font-bold">
                Post Comment
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[35%] flex flex-col gap-10 h-full p-6">
          <div className=" w-full p-5 bg-[#f3f8f6] rounded-lg">
            <div className=" flex gap-4 border-b py-3">
              <div className=" w-1 bg-[#71b356] h-7"></div>
              <div className=" text-xl font-bold">Booking Tour</div>
            </div>
            <div className=" flex justify-between py-3 items-center border-b">
              <div className=" text-md ">From:</div>
              <input
                type="date"
                className=" p-2 rounded-md border-2"
                name=""
                id=""
              />
            </div>
            <div className=" flex justify-between py-3 items-center border-b">
              <div className=" text-md ">Time:</div>
            </div>
            <div className=" flex justify-between py-3 items-center border-b">
              <div className=" text-md ">Tickets:</div>
              <div className=" text-gray-500 text-sm">
                please, select date first
              </div>
            </div>
            <div className="  py-3  border-b">
              <h1 className=" text-xl font-bold py-2 text-black p-0">
                Add Extra
              </h1>
              <div className="flex justify-between items-center">
                <div className=" text-md flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <span>Service per booking</span>
                </div>
                <div className=" text-gray-500 text-sm">$300</div>
              </div>
            </div>
            <div className="  py-3  border-b">
              <div className="flex justify-between items-center">
                <div className=" text-md flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <span>Service per person</span>
                </div>
                <div className=" flex flex-col items-end text-gray-500 text-sm">
                  <div>
                    Children: <span className=" text-black">$18.00</span>
                  </div>
                  <div>
                    Youth: <span className=" text-black">$16.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" py-3">
              <h1 className=" text-2xl py-2 text-black p-0">Total:</h1>
              <button className=" w-full p-3 rounded-lg text-white shadow-lg text-lg font-bold bg-[#71b356]">
                Book Now
              </button>
            </div>
          </div>
          <div className=" w-full p-5 rounded-lg border">
            <h1 className=" text-xl font-bold text-black p-0">
              Tour Information
            </h1>
            <div className=" flex items-center gap-4 py-4">
              <BsFillPeopleFill size={"2rem"} className=" text-[#71b356]" />
              <div>
                <div className=" text-gray-500">Max Guests</div>
                <span className=" font-bold">12</span>
              </div>
            </div>
            <div className=" flex items-center gap-4 py-4">
              <BiUserCircle size={"2rem"} className=" text-[#71b356]" />
              <div>
                <div className=" text-gray-500">Min Age</div>
                <span className=" font-bold">12+</span>
              </div>
            </div>
            <div className=" flex items-center gap-4 py-4">
              <BsAirplaneEnginesFill
                size={"2rem"}
                className=" text-[#71b356]"
              />
              <div>
                <div className=" text-gray-500">Tour Location</div>
                <span className=" font-bold">France</span>
              </div>
            </div>
            <div className=" flex items-center gap-4 py-4">
              <TfiWorld size={"2rem"} className=" text-[#71b356]" />
              <div className=" text-gray-500">Languages Support</div>
            </div>
          </div>
          <div className="w-full p-5 rounded-lg border">
            <h1 className=" text-xl mb-5 font-bold text-black p-0">
              Last Minute Deals
            </h1>
            <div className="flex gap-5 border-b pb-7">
              <img
                className=" w-24 rounded-lg object-cover"
                src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-8-500x360.jpg"
                alt=""
              />
              <div>
                <div className=" flex text-[#f7921e]">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                </div>
                <h1 className=" font-bold text-black p-0 py-2">
                  Discovery Island Kayak Tour{" "}
                </h1>
                <div className=" text-gray-500">
                  From <span className=" text-[#71b356]">$129.00</span>
                </div>
              </div>
            </div>
            <div className="flex gap-5 border-b py-7">
              <img
                className=" w-24 rounded-lg object-cover"
                src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11-500x360.jpg"
                alt=""
              />
              <div>
                <div className=" flex text-[#f7921e]">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                </div>
                <h1 className=" font-bold text-black p-0 py-2">
                  Discovery Island Kayak Tour{" "}
                </h1>
                <div className=" text-gray-500">
                  From <span className=" text-[#71b356]">$129.00</span>
                </div>
              </div>
            </div>
            <div className="flex gap-5  py-7">
              <img
                className=" w-24 rounded-lg object-cover"
                src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-10-500x360.jpg"
                alt=""
              />
              <div>
                <div className=" flex text-[#f7921e]">
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                </div>
                <h1 className=" font-bold text-black p-0 py-2">
                  Discovery Island Kayak Tour{" "}
                </h1>
                <div className=" text-gray-500">
                  From <span className=" text-[#71b356]">$129.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`lazy-loader ${displayCheck ? "" : "hidden"}`}>
        <div
          className=" w-fit absolute right-48 p-5 top-10 cursor-pointer z-20"
          onClick={() => setDisplayCheck(false)}
        >
          <ImCross className="cursor-pointer" />
        </div>
        <Lazy_loader detailImage={tours} />
      </div>
    </div>
  );
};

export default TourDetail;
