import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineArrowNarrowRight, HiOutlineCamera, HiOutlineCurrencyDollar } from "react-icons/hi";
import { LuClock3 } from "react-icons/lu";
import { MdLocationOn, MdPeopleOutline } from "react-icons/md";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Explore_more from "../../components/Explore_more/Explore_more";

const Destination_detail = ({name}) => {
  return (
    <>  
      <div className=" ">
        <div className=" w-full bg-[#F3F8F6] mb-20 py-20">
          <div className="2xl:w-[68%]  w-[100%] mx-auto flex flex-col lg:flex-row  px-5 gap-20 ">
            <div className="w-full lg:w-1/2 h-full p-5 shadow-lg bg-white rounded-lg">
              <img
                className=" rounded-lg w-full"
                src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-11.jpg"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div>
                <h1 className="text-[35px] font-bold">{name}</h1>
                <hr className=" w-14 border-[1.5px] border-[#63AB45]" />
              </div>
              <p className=" my-4 leading-7 text-gray-500">
                Lorem ipsum available isn but the majority have suffered
                alteratin in some or form injected. Lorem Ipsum. Proin gravida
                nibh vel velit auctor aliqueenean sollicitudin, lorem quis
                bibendum auctor consequat.
              </p>
              <ul className=" w-full">
                <li className=" flex w-full border-b lg:py-3 xl:py-2 2xl:py-2 ">
                  <div className=" w-1/2">Country</div>
                  <div className=" w-1/2 text-gray-500">{name}</div>
                </li>
                <li className=" flex w-full border-b lg:py-3 xl:py-2 2xl:py-2 ">
                  <div className=" w-1/2">Languages Spoken</div>
                  <div className="text-gray-500 w-1/2">English</div>
                </li>
                <li className=" flex w-full border-b lg:py-3 xl:py-2 2xl:py-2 ">
                  <div className=" w-1/2">Visa Requirements</div>
                  <div className=" w-1/2 text-gray-500">
                    Personal Documents Requied
                  </div>
                </li>
                <li className=" flex w-full lg:py-3 xl:py-2 2xl:py-2 ">
                  <div className=" w-1/2">Area (km2)</div>
                  <div className=" w-1/2 text-gray-500">88.000 km2</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" px-5">
          <div className=" w-full text-center">
            <span className=" text-[#63AB45] text-center  px-5 py-3 rounded-lg font-bold bg-[#F3F8F6]">
              Explore Tour{" "}
            </span>
          </div>
          <div className=" text-center my-5 text-[45px] font-bold">
            Most Popular Tours
          </div>
          <div className=" flex gap-7 flex-col lg:flex-row">
            <div className=" flex flex-col relative w-full lg:w-[32%] mb-56">
              <div className=" w-full rounded-t-lg">
                <Link
                  to={"/tours-page/tour-detail"}
                  onClick={() => setName("Cottages In The Middle Of Beach")}
                >
                  <img
                    className=" w-full h-[60vh] rounded-t-xl lg:h-[50vh]"
                    src="	https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-5.jpg"
                    alt=""
                  />
                </Link>
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
                <Link
                  to={"/tours-page/tour-detail"}
                  onClick={() => setName("Cottages In The Middle Of Beach")}
                >
                  <button className="text-start text-gray-800 hover:text-[#63ab45] text-xl font-semibold">
                    Cottages In The Middle Of Beach
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
                  From <span className="  text-[#F7921E]">$109.00</span>{" "}
                </div>
                <div className=" flex justify-between text-sm">
                  <div className="flex gap-4">
                    <span className=" flex items-center gap-2">
                      <LuClock3 size={"1rem"} className="text-[#63ab45]" /> 3
                      days
                    </span>
                    <span className=" flex items-center gap-2">
                      <MdPeopleOutline
                        size={"1.2rem"}
                        className="text-[#63ab45]"
                      />
                      12
                    </span>
                  </div>
                  <Link
                    to={"/tours-page/tour-detail"}
                    onClick={() => {
                      setName("Cottages In The Middle Of Beach");
                    }}
                  >
                    <button className="flex items-center text-md gap-2 text-black hover:text-[#63ab45]">
                      Explore <HiOutlineArrowNarrowRight size={"1.3rem"} />
                    </button>
                  </Link>
                </div>
                <div className=" absolute bg-white flex gap-4 rounded-lg top-[-18px] right-5 shadow-md px-4 py-1">
                  <button className="hover:text-[#63ab45] relative">
                    <HiOutlineCamera size={"1.5rem"} />
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
                  onClick={() => setName("Man Standing on a Rock")}
                >
                  <img
                    className=" w-full h-[60vh] rounded-t-xl lg:h-[50vh]"
                    src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-4.jpg"
                    alt=""
                  />
                </Link>
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
                <Link
                  to={"/tours-page/tour-detail"}
                  onClick={() => setName("Man Standing on a Rock")}
                >
                  <button className="text-start text-gray-800 hover:text-[#63ab45] text-xl font-semibold">
                    Man Standing on a Rock
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
                  From <span className="  text-[#F7921E]">$116.10</span>{" "}
                  <span className="line-through">$129.00</span>
                </div>
                <div className=" flex justify-between text-sm">
                  <div className="flex gap-4">
                    <span className=" flex items-center gap-2">
                      <LuClock3 size={"1rem"} className="text-[#63ab45]" /> 5
                      days
                    </span>
                    <span className=" flex items-center gap-2">
                      <MdPeopleOutline
                        size={"1.2rem"}
                        className="text-[#63ab45]"
                      />
                      12
                    </span>
                  </div>
                  <Link
                    to={"/tours-page/tour-detail"}
                    onClick={() => setName("Man Standing on a Rock")}
                  >
                    <button className="flex items-center text-md gap-2 text-black hover:text-[#63ab45]">
                      Explore <HiOutlineArrowNarrowRight size={"1.3rem"} />
                    </button>
                  </Link>
                </div>
                <div className=" absolute bg-white flex gap-4 rounded-lg top-[-18px] right-5 shadow-md px-4 py-1">
                  <button className="hover:text-[#63ab45] relative">
                    <HiOutlineCamera size={"1.5rem"} />
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
                  onClick={() => setName("Beautiful Floating Villa")}
                >
                  <img
                    className=" w-full h-[60vh] rounded-t-xl lg:h-[50vh]"
                    src="	https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-6.jpg"
                    alt=""
                  />
                </Link>
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
                <Link
                  to={"/tours-page/tour-detail"}
                  onClick={() => setName("Beautiful Floating Villa")}
                >
                  <button className="text-start text-gray-800 hover:text-[#63ab45] text-xl font-semibold">
                    Beautiful Floating Villa
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
                  From <span className="  text-[#F7921E]">$116.10</span>{" "}
                  <span className="line-through">$129.00</span>
                </div>
                <div className=" flex justify-between text-sm">
                  <div className="flex gap-4">
                    <span className=" flex items-center gap-2">
                      <LuClock3 size={"1rem"} className="text-[#63ab45]" /> 5
                      days
                    </span>
                    <span className=" flex items-center gap-2">
                      <MdPeopleOutline
                        size={"1.2rem"}
                        className="text-[#63ab45]"
                      />
                      12
                    </span>
                  </div>
                  <Link
                    to={"/tours-page/tour-detail"}
                    onClick={() => setName("Beautiful Floating Villa")}
                  >
                    <button className="flex items-center text-md gap-2 text-black hover:text-[#63ab45]">
                      Explore <HiOutlineArrowNarrowRight size={"1.3rem"} />
                    </button>
                  </Link>
                </div>
                <div className=" absolute bg-white flex gap-4 rounded-lg top-[-18px] right-5 shadow-md px-4 py-1">
                  <button className="hover:text-[#63ab45] relative">
                    <HiOutlineCamera size={"1.5rem"} />
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
          <div>
            <Explore_more />
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination_detail;
