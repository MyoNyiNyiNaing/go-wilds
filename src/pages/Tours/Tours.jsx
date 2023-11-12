import React, { useEffect, useState } from "react";
import "./Tour.css";
import { FaSortAlphaDown } from "react-icons/fa";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Progress } from "@material-tailwind/react";

//material tailwind import
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

import DropDown from "../../components/tourPageDropDown/DropDown";
import TourItem1 from "../../components/tourPageDropDown/TourItem1";
import TourItem2 from "../../components/tourPageDropDown/TourItem2";
import RevealUp from "../../components/Animations/RevealUp";

const Tours = ({ name, setName }) => {
  const [value, setValue] = React.useState([109, 619]);
  const [sort, setSort] = useState(false);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className=" w-full px-5 h-[65vh] relative top-search-banner flex flex-col items-center justify-center ">
        <div className="banner-word  flex flex-col items-center justify-center">
          <h1 className=" text-[30px] lg:text-[45px]  text-white font-bold">
            Explore The Worlds
          </h1>
          <div className=" text-white text-lg lg:text-xl">
            People Don’t Take, Trips Take People
          </div>
        </div>

        <div
          className={` w-[95%] ${
            sort ? "null" : "hidden"
          } bg-white bottom-[-480px] shadow-xl z-[30] rounded-lg absolute border py-10`}
        >
          <div className=" w-full px-8">
            <Box sx={{ width: "100%" }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                min={109}
                max={619}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="on"
              />
            </Box>
          </div>
          <div className="w-full px-10 pt-4">
            <h1 className=" text-lg font-semibold mb-4">Languages</h1>
            <ul className="w-full flex flex-wrap gap-5 border-b border-gray-400 pb-5">
              <li className="w-[30%] flex gap-3">
                <input type="checkbox" name="english" id="" />
                English
              </li>
              <li className="w-[30%] flex gap-3">
                <input type="checkbox" name="french" id="" />
                French
              </li>
              <li className="w-[30%] flex gap-3">
                <input type="checkbox" name="german" id="" />
                German
              </li>
              <li className="w-[30%] flex gap-3">
                <input type="checkbox" name="japanese" id="" />
                Japanese
              </li>
              <li className="w-[30%] flex gap-3">
                <input type="checkbox" name="thailand" id="" />
                Thailand
              </li>
            </ul>
          </div>
          <div className="w-full px-10 pt-4">
            <h1 className=" text-lg font-semibold mb-4">Amenities</h1>
            <ul className="w-full flex flex-wrap gap-5 ">
              <li className="w-[30%] flex gap-3">
                <input type="checkbox" id="" />
                Accepts Credit Cards
              </li>
              <li className="w-[30%] flex gap-3">
                <input type="checkbox" id="" />
                Car Parking
              </li>
              <li className="w-[30%] flex gap-3">
                <input type="checkbox" id="" />
                Free Coupons
              </li>
              <li className="w-[30%] flex gap-3">
                <input type="checkbox" id="" />
                Laundry Service
              </li>
              <li className="w-[30%] flex gap-3">
                <input type="checkbox" id="" />
                Outdoor Seating
              </li>
              <li className="w-[30%] flex gap-3">
                <input type="checkbox" id="" />
                Reservations
              </li>
              <li className="w-[30%] flex gap-3">
                <input type="checkbox" id="" />
                Restaurant
              </li>
              <li className="w-[30%] flex gap-3">
                <input type="checkbox" id="" />
                Smoking Allowed
              </li>
              <li className="w-[30%] flex gap-3">
                <input type="checkbox" id="" />
                Wireless Internet
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" 2xl:w-[66%] mt-[-50px] w-[100%] xl:mx-auto z-[80] lg:w-[97%] px-5 gap-5 items-center shadow-xl rounded-lg  relative flex flex-col lg:flex-row bg-white py-4">
        <DropDown sort={sort} setSort={setSort} />
      </div>
      <div className="  mt-[430px] lg:mt-[150px] w-full">
        <div className="2xl:w-[68%]  xl:mx-auto flex justify-between px-5 mb-5 text-gray-600">
          <div className=" ">
            <span className="font-bold">12</span> Tours
          </div>
          <div className=" flex items-center gap-5">
            <div className=" flex items-center gap-3 text-lg">
              Sort by <FaSortAlphaDown size={"1.4rem"} />{" "}
            </div>
            <div>
              <select
                name="Title"
                className=" border p-2 w-40 rounded-lg"
                id=""
              >
                <option value="Title">Title</option>
                <option value="Price">Price</option>
                <option value="Rating">Rating</option>
                <option value="Availability">Availability</option>
              </select>
            </div>
          </div>
        </div>
        {pagination === 1 ? (
          <RevealUp>
            <TourItem1 name={name} setName={setName} />{" "}
          </RevealUp>
        ) : (
          <RevealUp>
            <TourItem2 name={name} setName={setName} />
          </RevealUp>
        )}
        <div className="2xl:w-[68%]  xl:mx-auto flex px-5 gap-5">
          <button
            onClick={() => {
              setPagination(1);
            }}
            className={`border-2 hover:border-green-500 hover:text-green-500 hover:shadow-lg  border-gray-400  text-sm px-4 py-2 rounded ${
              pagination === 2 ? "flex" : "hidden"
            }`}
          >
            Previous
          </button>
          <button
            onClick={() => {
              setPagination(1);
            }}
            className={` border-2 hover:border-green-500 hover:text-green-500 hover:shadow-lg  px-4 border-gray-400  text-sm rounded ${
              pagination === 1 ? "border-green-500 text-green-500" : null
            }`}
          >
            1
          </button>
          <button
            onClick={() => {
              setPagination(2);
            }}
            className={` border-2 hover:border-green-500 hover:text-green-500 hover:shadow-lg  px-4 border-gray-400  text-sm rounded ${
              pagination === 2 ? "border-green-500 text-green-500" : null
            }`}
          >
            2
          </button>
          <button
            onClick={() => setPagination(2)}
            className={`border-2 hover:border-green-500 hover:text-green-500 hover:shadow-lg  border-gray-400  text-sm px-4 py-2 rounded ${
              pagination === 1 ? "flex" : "hidden"
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <div className="w-full  py-20">
        <div className=" 2xl:w-[68%]  w-[100%] mx-auto flex flex-col lg:flex-row  px-5 gap-20">
          <div
            className=" w-full lg:w-1/2 relative "
            style={{
              backgroundPosition:"center",
              backgroundSize:"cover",
              backgroundImage:"url("+"https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-2.jpg"+")"
            }}
          >
            <div className=" absolute bottom-0 left-0 w-[65%] text-lg font-bold text-white px-4  lg:px-8  py-8 bg-[#72b357]">
              Gowilds is providing the best solution by our experts
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className=" rounded mb-2 bg-gray-200 w-[200px] text-center text-[#72b357] font-bold p-2">
              Company introduction
            </div>
            <h1 className=" text-[27px] my-3 lg:text-[45px] font-bold leading-[1.2]">
              Great opportunity for adventure & travels
            </h1>
            <h1 className=" text-[21px] my-5 text-[#72b357] font-semibold">
              COMMITTED TO PROVIDING OUR CUSTOMERS WITH EXCEPTIONAL SERVICE.
            </h1>
            <p className=" my-4 text-gray-500">
              There are many variations of passages of lorem free market to
              available, but the majority have alteration in some form, by
              injected humour, or randomised words
            </p>
            <div className=" my-6">
              <div className="flex justify-between mb-2">
                <span className=" font-semibold">Saticfied Clients</span>
                <span className="  text-gray-600">82%</span>
              </div>
              <Progress value={82} className="rounded-sm" color="green" />
            </div>
            <div className=" flex items-center gap-7">
              <div className=" border-[5px] p-[5px] rounded-full border-[#72b357]">
                <img
                  className=" w-[60px] h-[60px] rounded-full"
                  src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/image-03.jpg"
                  alt=""
                />
              </div>
              <div>
                <h1 className=" font-bold text-xl">Aleesha brown</h1>
                <p className=" text-gray-500">CEO & CO Founder</p>
              </div>
              <button className=" text-white bg-[#72b357] px-5 lg:px-8 py-4 rounded-lg">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tours;
