import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import {
  HiOutlineCamera,
  HiOutlineCurrencyDollar,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdLocationOn, MdPeopleOutline } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import Lazy_loader from "../Slider/lazyLoader/lazy_loader";
import tours from '../../Json/adventure.json'

const TourItem2 = ({name,setName}) => {
  const [displayCheck, setDisplayCheck] = useState(false);
  const clickHandler = () => {
    setDisplayCheck(true);
  };  
  return (
    <>
      <div className="2xl:w-[68%]  xl:mx-auto w-full px-4 mb-[10px] lg:mb-[120px] flex flex-wrap justify-between">
        <div className=" flex flex-col relative w-full lg:w-[32%] mb-56">
          <div className=" w-full rounded-t-lg">
            <Link
              to={"/tours-page/tour-detail"}
              onClick={() => setName("Java & Bali One Life Adventures")}
            >
              <img
                className=" w-full rounded-t-xl object-cover"
                src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-9.jpg"
                alt=""
              />
            </Link>
            <div className=" absolute z-[10] w-full  p-3 top-0 flex justify-between">
              <div className="gap-2 flex flex-col  ">
                <p className="  rounded-md px-2 text-[10px] py-1 text-center font-semibold bg-cyan-600 tracking-widest shadow-lg text-white">
                  FEATURED
                </p>
              </div>
              <div>
                <button className="bg-black opacity-60 hover:opacity-90 text-white p-2 rounded-md ">
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
            <Link
              to={"/tours-page/tour-detail"}
              onClick={() => setName("Java & Bali One Life Adventures")}
            >
              <button className="text-start text-gray-800 hover:text-[#63ab45] text-xl font-semibold">
                Java & Bali One Life Adventures
              </button>
            </Link>
            <div className=" flex items-center gap-2">
              <MdLocationOn size={"1.2rem"} className="text-[#63ab45]" />
              <p> Main Street, Brooklyn, NY</p>
            </div>
            <div className=" border-b-2 pb-5 flex items-center gap-2">
              <HiOutlineCurrencyDollar
                size={"1.2rem"}
                className="text-[#63ab45]"
              />{" "}
              From <span className="  text-[#F7921E]">$139.00</span>{" "}
            </div>
            <div className=" flex justify-between text-sm">
              <div className="flex gap-4">
                <span className=" flex items-center gap-2">
                  <LuClock3 size={"1rem"} className="text-[#63ab45]" /> 3 days
                </span>
                <span className=" flex items-center gap-2">
                  <MdPeopleOutline size={"1.2rem"} className="text-[#63ab45]" />
                  10
                </span>
              </div>
              <Link
                to={"/tours-page/tour-detail"}
                onClick={() => setName("Java & Bali One Life Adventures")}
              >
                <button className="flex items-center text-md gap-2 text-black hover:text-[#63ab45]">
                  Explore <HiOutlineArrowNarrowRight size={"1.3rem"} />
                </button>
              </Link>
            </div>
            <div className=" absolute bg-white flex gap-4 rounded-lg top-[-18px] right-5 shadow-md px-4 py-1">
              <button className="hover:text-[#63ab45] relative">
                <HiOutlineCamera size={"1.5rem"} onClick={(e)=>{
                  e.stopPropagation();
                  clickHandler()
                }}/>
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
        <div className=" flex flex-col relative w-full lg:w-[32%] mb-56">
          <div className=" w-full rounded-t-lg">
            <Link
              to={"/tours-page/tour-detail"}
              onClick={() => setName(" Mykonos and Santorini Tour")}
            >
              <img
                className=" w-full rounded-t-xl object-cover"
                src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-3.jpg"
                alt=""
              />
            </Link>
            <div className=" absolute z-[10] w-full  p-3 top-0 flex justify-between">
              <div className="gap-2 flex flex-col  ">
                <p className="  rounded-md px-2 text-[10px] py-1 text-center font-semibold bg-cyan-600 tracking-widest shadow-lg text-white">
                  FEATURED
                </p>
              </div>
              <div>
                <button className="bg-black opacity-60 hover:opacity-90 text-white p-2 rounded-md ">
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
            <Link
              to={"/tours-page/tour-detail"}
              onClick={() => setName(" Mykonos and Santorini Tour")}
            >
              <button className="text-start text-gray-800 hover:text-[#63ab45] text-xl font-semibold">
                Mykonos and Santorini Tour
              </button>
            </Link>
            <div className=" flex items-center gap-2">
              <MdLocationOn size={"1.2rem"} className="text-[#63ab45]" />
              <p> Main Street, Brooklyn, NY</p>
            </div>
            <div className=" border-b-2 pb-5 flex items-center gap-2">
              <HiOutlineCurrencyDollar
                size={"1.2rem"}
                className="text-[#63ab45]"
              />{" "}
              From <span className="  text-[#F7921E]">$169.00</span>{" "}
            </div>
            <div className=" flex justify-between text-sm">
              <div className="flex gap-4">
                <span className=" flex items-center gap-2">
                  <LuClock3 size={"1rem"} className="text-[#63ab45]" /> 6 days
                </span>
                <span className=" flex items-center gap-2">
                  <MdPeopleOutline size={"1.2rem"} className="text-[#63ab45]" />
                  10
                </span>
              </div>
              <Link
                to={"/tours-page/tour-detail"}
                onClick={() => setName(" Mykonos and Santorini Tour")}
              >
                <button className="flex items-center text-md gap-2 text-black hover:text-[#63ab45]">
                  Explore <HiOutlineArrowNarrowRight size={"1.3rem"} />
                </button>
              </Link>
            </div>
            <div className=" absolute bg-white flex gap-4 rounded-lg top-[-18px] right-5 shadow-md px-4 py-1">
              <button className="hover:text-[#63ab45] relative">
                <HiOutlineCamera size={"1.5rem"} onClick={(e)=>{
                  e.stopPropagation();
                  clickHandler()
                }}/>
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
        <div className=" flex flex-col relative w-full lg:w-[32%] mb-56">
          <div className=" w-full rounded-t-lg">
            <Link
              to={"/tours-page/tour-detail"}
              onClick={() => setName("Boathouse Neighborhood")}
            >
              <img
                className=" w-full rounded-t-xl object-cover"
                src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-1.jpg"
                alt=""
              />
            </Link>
            <div className=" absolute z-[10] w-full  p-3 top-0 flex justify-between">
              <div className="gap-2 flex flex-col  ">
                <p className="  rounded-md px-2 text-[10px] py-1 text-center font-semibold bg-cyan-600 tracking-widest shadow-lg text-white">
                  FEATURED
                </p>
              </div>
              <div>
                <button className="bg-black opacity-60 hover:opacity-90 text-white p-2 rounded-md ">
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
            <Link
              to={"/tours-page/tour-detail"}
              onClick={() => setName("Boathouse Neighborhood")}
            >
              <button className="text-start text-gray-800 hover:text-[#63ab45] text-xl font-semibold">
                Boathouse Neighborhood
              </button>
            </Link>
            <div className=" flex items-center gap-2">
              <MdLocationOn size={"1.2rem"} className="text-[#63ab45]" />
              <p> Main Street, Brooklyn, NY</p>
            </div>
            <div className=" border-b-2 pb-5 flex items-center gap-2">
              <HiOutlineCurrencyDollar
                size={"1.2rem"}
                className="text-[#63ab45]"
              />{" "}
              From <span className="  text-[#F7921E]">$199.00</span>{" "}
            </div>
            <div className=" flex justify-between text-sm">
              <div className="flex gap-4">
                <span className=" flex items-center gap-2">
                  <LuClock3 size={"1rem"} className="text-[#63ab45]" /> 2 days
                </span>
                <span className=" flex items-center gap-2">
                  <MdPeopleOutline size={"1.2rem"} className="text-[#63ab45]" />
                  12
                </span>
              </div>
              <Link
                to={"/tours-page/tour-detail"}
                onClick={() => setName("Boathouse Neighborhood")}
              >
                <button className="flex items-center text-md gap-2 text-black hover:text-[#63ab45]">
                  Explore <HiOutlineArrowNarrowRight size={"1.3rem"} />
                </button>
              </Link>
            </div>
            <div className=" absolute bg-white flex gap-4 rounded-lg top-[-18px] right-5 shadow-md px-4 py-1">
              <button className="hover:text-[#63ab45] relative">
                <HiOutlineCamera size={"1.5rem"} onClick={(e)=>{
                  e.stopPropagation();
                  clickHandler()
                }}/>
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
        <div className=" flex flex-col relative w-full lg:w-[32%] mb-56 lg:mb-28">
          <div className=" w-full rounded-t-lg">
            <Link
              to={"/tours-page/tour-detail"}
              onClick={() => setName("Body of Water Near Mountain")}
            >
              <img
                className=" w-full rounded-t-xl object-cover"
                src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-7.jpg"
                alt=""
              />
            </Link>
            <div className=" absolute z-[10] w-full  p-3 top-0 flex justify-between">
              <div className="gap-2 flex flex-col  ">
                <p className="  rounded-md px-2 text-center text-[10px] tracking-widest py-1 font-semibold  bg-[#F7921E] shadow-lg text-white">
                  12% OFF
                </p>
                <p className="  rounded-md px-2 text-[10px] py-1 text-center font-semibold bg-cyan-600 tracking-widest shadow-lg text-white">
                  FEATURED
                </p>
              </div>
              <div>
                <button className="bg-black opacity-60 hover:opacity-90 text-white p-2 rounded-md ">
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
            <Link
              to={"/tours-page/tour-detail"}
              onClick={() => setName("Body of Water Near Mountain")}
            >
              <button className="text-start text-gray-800 hover:text-[#63ab45] text-xl font-semibold">
                Body of Water Near Mountain
              </button>
            </Link>
            <div className=" flex items-center gap-2">
              <MdLocationOn size={"1.2rem"} className="text-[#63ab45]" />
              <p> Main Street, Brooklyn, NY</p>
            </div>
            <div className=" border-b-2 pb-5 flex items-center gap-2">
              <HiOutlineCurrencyDollar
                size={"1.2rem"}
                className="text-[#63ab45]"
              />{" "}
              From <span className="  text-[#F7921E]">$289.52</span>{" "}
              <span className="line-through">$329.00</span>
            </div>
            <div className=" flex justify-between text-sm">
              <div className="flex gap-4">
                <span className=" flex items-center gap-2">
                  <LuClock3 size={"1rem"} className="text-[#63ab45]" /> 3 days
                </span>
                <span className=" flex items-center gap-2">
                  <MdPeopleOutline size={"1.2rem"} className="text-[#63ab45]" />
                  10
                </span>
              </div>
              <Link
                to={"/tours-page/tour-detail"}
                onClick={() => setName("Body of Water Near Mountain")}
              >
                <button className="flex items-center text-md gap-2 text-black hover:text-[#63ab45]">
                  Explore <HiOutlineArrowNarrowRight size={"1.3rem"} />
                </button>
              </Link>
            </div>
            <div className=" absolute bg-white flex gap-4 rounded-lg top-[-18px] right-5 shadow-md px-4 py-1">
              <button className="hover:text-[#63ab45] relative">
                <HiOutlineCamera size={"1.5rem"} onClick={(e)=>{
                  e.stopPropagation();
                  clickHandler()
                }}/>
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
        <div className=" flex flex-col relative w-full lg:w-[32%] mb-56 lg:mb-28">
          <div className=" w-full rounded-t-lg">
            <Link
              to={"/tours-page/tour-detail"}
              onClick={() => setName("Rainbow Mountain Red Valley")}
            >
              <img
                className=" w-full rounded-t-xl object-cover"
                src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11.jpg"
                alt=""
              />
            </Link>
            <div className=" absolute z-[10] w-full  p-3 top-0 flex justify-between">
              <div className="gap-2 flex flex-col  ">
                <p className="  rounded-md px-2 text-[10px] py-1 text-center font-semibold bg-cyan-600 tracking-widest shadow-lg text-white">
                  FEATURED
                </p>
              </div>
              <div>
                <button className="bg-black opacity-60 hover:opacity-90 text-white p-2 rounded-md ">
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
            <Link
              to={"/tours-page/tour-detail"}
              onClick={() => setName("Rainbow Mountain Red Valley")}
            >
              <button className="text-start text-gray-800 hover:text-[#63ab45] text-xl font-semibold">
                Rainbow Mountain Red Valley
              </button>
            </Link>
            <div className=" flex items-center gap-2">
              <MdLocationOn size={"1.2rem"} className="text-[#63ab45]" />
              <p> Main Street, Brooklyn, NY</p>
            </div>
            <div className=" border-b-2 pb-5 flex items-center gap-2">
              <HiOutlineCurrencyDollar
                size={"1.2rem"}
                className="text-[#63ab45]"
              />{" "}
              From <span className="  text-[#F7921E]">$319.00</span>{" "}
            </div>
            <div className=" flex justify-between text-sm">
              <div className="flex gap-4">
                <span className=" flex items-center gap-2">
                  <LuClock3 size={"1rem"} className="text-[#63ab45]" /> 5 days
                </span>
                <span className=" flex items-center gap-2">
                  <MdPeopleOutline size={"1.2rem"} className="text-[#63ab45]" />
                  12
                </span>
              </div>
              <Link
                to={"/tours-page/tour-detail"}
                onClick={() => setName("Rainbow Mountain Red Valley")}
              >
                <button className="flex items-center text-md gap-2 text-black hover:text-[#63ab45]">
                  Explore <HiOutlineArrowNarrowRight size={"1.3rem"} />
                </button>
              </Link>
            </div>
            <div className=" absolute bg-white flex gap-4 rounded-lg top-[-18px] right-5 shadow-md px-4 py-1">
              <button className="hover:text-[#63ab45] relative">
                <HiOutlineCamera size={"1.5rem"} onClick={(e)=>{
                  e.stopPropagation();
                  clickHandler()
                }}/>
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
        <div className=" flex flex-col relative w-full lg:w-[32%] mb-56 lg:mb-28">
          <div className=" w-full rounded-t-lg">
            <Link
              to={"/tours-page/tour-detail"}
              onClick={() => setName("Yucatán Peninsula & Caribbean")}
            >
              <img
                className=" w-full rounded-t-xl object-cover"
                src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-2.jpg"
                alt=""
              />
            </Link>
            <div className=" absolute z-[10] w-full  p-3 top-0 flex justify-between">
              <div className="gap-2 flex flex-col  ">
                <p className="  rounded-md px-2 text-[10px] py-1 text-center font-semibold bg-cyan-600 tracking-widest shadow-lg text-white">
                  FEATURED
                </p>
              </div>
              <div>
                <button className="bg-black opacity-60 hover:opacity-90 text-white p-2 rounded-md ">
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
            <Link
              to={"/tours-page/tour-detail"}
              onClick={() => setName("Yucatán Peninsula & Caribbean")}
            >
              <button className="text-start text-gray-800 hover:text-[#63ab45] text-xl font-semibold">
                Yucatán Peninsula & Caribbean
              </button>
            </Link>
            <div className=" flex items-center gap-2">
              <MdLocationOn size={"1.2rem"} className="text-[#63ab45]" />
              <p> Main Street, Brooklyn, NY</p>
            </div>
            <div className=" border-b-2 pb-5 flex items-center gap-2">
              <HiOutlineCurrencyDollar
                size={"1.2rem"}
                className="text-[#63ab45]"
              />{" "}
              From <span className="  text-[#F7921E]">$619.00</span>{" "}
            </div>
            <div className=" flex justify-between text-sm">
              <div className="flex gap-4">
                <span className=" flex items-center gap-2">
                  <LuClock3 size={"1rem"} className="text-[#63ab45]" /> 3 days
                </span>
                <span className=" flex items-center gap-2">
                  <MdPeopleOutline size={"1.2rem"} className="text-[#63ab45]" />
                  12
                </span>
              </div>
              <Link
                to={"/tours-page/tour-detail"}
                onClick={() => setName("Yucatán Peninsula & Caribbean")}
              >
                <button className="flex items-center text-md gap-2 text-black hover:text-[#63ab45]">
                  Explore <HiOutlineArrowNarrowRight size={"1.3rem"} />
                </button>
              </Link>
            </div>
            <div className=" absolute bg-white flex gap-4 rounded-lg top-[-18px] right-5 shadow-md px-4 py-1">
              <button className="hover:text-[#63ab45] relative">
                <HiOutlineCamera size={"1.5rem"} onClick={(e)=>{
                  e.stopPropagation();
                  clickHandler()
                }}/>
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
    </>
  );
};

export default TourItem2;
