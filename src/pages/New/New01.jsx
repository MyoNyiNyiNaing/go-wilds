import React, { useEffect, useState } from "react";
import "./News.css";
import { FaRegComments, FaUserCircle } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Landing_image from "../../components/Landing/LandingImage";
import Explore_more from "../../components/Explore_more/ExploreMore"

import News01Page1 from "./News01Page1";
import News01Page2 from "./News01Page2";
import RevealUp from "../../components/Animations/RevealUp";

const New01 = ({ name, setName }) => {
  const [pagination, setPagination] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Landing_image page={"news"} about={"news"} />
      <section className=" bg-white">
        <section className=" bg-white">
          {pagination === 1 ? (
            <RevealUp>
              <News01Page1 name={name} setName={setName} />
            </RevealUp>
          ) : (
            <RevealUp>
              <News01Page2 name={name} setName={setName} />
            </RevealUp>
          )}
        </section>
        <div className="2xl:w-[68%]  w-[100%]  xl:mx-auto  my-8 flex px-5 gap-5 mb-3">
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
      </section>
      <Explore_more rounded={false}/>
    </>
  );
};

export default New01;
