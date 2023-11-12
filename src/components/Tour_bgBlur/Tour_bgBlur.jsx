import React from "react";
import "./Tour_bgBlur.css";
import { FaPlay } from "react-icons/fa";
import { MdOutlineParagliding, MdOutlineTour } from "react-icons/md";
import { GiDetour } from "react-icons/gi";

const Tour_bgBlur = ({ check }) => {
  return (
    <div
      className=" min-h-[calc(100vh-100px)] relative bg-blur"
      style={{ backgroundColor: "url(" + "" + ")" }}
    >
      <div className="2xl:w-[68%]  w-full  xl:mx-auto px-5 flex flex-col md:flex-row md:items-center min-h-[calc(100vh-100px)] md:py-32 py-16">
        <div className="flex flex-col items-start md:flex-[55%] text-white">
          <a
            href="https://www.youtube.com/watch?v=-UbYukTFmFU"
            className=" music-btn hover:scale-95 duration-150 transition relative p-7 bg-primary rounded-full mb-20"
          >
            <FaPlay className=" text-white" size={"1.5rem"} />
            <img
              src="https://gaviaspreview.com/wp/gowilds/wp-content/themes/gowilds/assets/images/arrow-3.png"
              className=" absolute top-20 left-28"
              alt=""
            />
          </a>
          <div className="px-5 py-4 bg-[#f7921e2f] text-secondary rounded-lg font-semibold mb-7">
            <span>Are you ready to travel?</span>
          </div>
          <h2 className=" md:text-[48px] font-bold leading-tight mb-10">
            Ready to travel with real adventure and enjoy natural
          </h2>
          <div className=" cursor-pointer text-white px-5 py-4 rounded-lg duration-150 transition bg-[#7ecc5d] hover:bg-primary relative -bottom-4">
            <a href="/tours-page" className=" capitalize font-bold">
              {check}
            </a>
          </div>
        </div>
        <div className=" md:flex-[45%] flex text-white flex-wrap flex-col md:flex-row gap-3 mt-16 md:mt-0">
          <div className="tour-card md:flex-[40%] flex-1">
            <div className="drop"></div>
            <div className="flex justify-center">
              <MdOutlineTour size={"6rem"} />
            </div>
            <h4 className=" mt-3 relative z-10">
              Wildlife <br />
              Tours
            </h4>
          </div>
          <div className="tour-card md:flex-[40%] flex-1">
            <div className="drop"></div>
            <div className="flex justify-center">
              <MdOutlineParagliding size={"6rem"} />
            </div>
            <h4 className=" mt-3 relative z-10">
              Paragliding <br /> Tours
            </h4>
          </div>
          <div className="tour-card md:flex-[40%] flex-1">
            <div className="drop"></div>
            <div className="flex justify-center">
              <GiDetour size={"6rem"} />
            </div>
            <h4 className=" mt-3 relative z-10">
              Adventure <br /> Tours
            </h4>
          </div>
          <div className="tour-card md:flex-[40%] flex-1">
            <div className="drop"></div>
            <div className="flex justify-center">
              <svg
                fill="#ffffff"
                height="100px"
                width="100px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="-51.2 -51.2 614.40 614.40"
                xmlSpace="preserve"
                stroke="#ffffff"
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(45)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="1.023996"
                />
                <g id="SVGRepo_iconCarrier">
                  {"{"}" "{"}"}
                  <g>
                    {"{"}" "{"}"}
                    <g>
                      {"{"}" "{"}"}
                      <path d="M509.677,285.627L338.833,108.681c-3.139-3.251-8.477-3.345-11.727-0.207c-3.251,3.14-3.345,8.476-0.207,11.727 l150.733,156.117l-213.347-53.337v-67.255l164.342,99.779c4.175,2.533,9.776,0.819,11.831-3.602 c1.757-3.781,0.34-8.416-3.221-10.579L264.283,136.319V55.351l38.82,40.205c3.139,3.251,8.478,3.344,11.728,0.207 c3.252-3.139,3.343-8.478,0.206-11.728l-53.081-54.976c-0.017-0.018-0.035-0.032-0.052-0.049 c-0.114-0.115-0.234-0.223-0.355-0.332c-0.081-0.073-0.159-0.151-0.243-0.221c-0.144-0.121-0.296-0.231-0.449-0.343 c-0.065-0.048-0.127-0.1-0.195-0.145c-1.33-0.909-2.939-1.443-4.672-1.443c-1.733,0-3.342,0.533-4.672,1.443 c-0.066,0.045-0.129,0.097-0.195,0.145c-0.153,0.111-0.305,0.222-0.449,0.343c-0.084,0.07-0.163,0.148-0.243,0.221 c-0.121,0.108-0.241,0.217-0.355,0.332c-0.017,0.017-0.035,0.031-0.052,0.049L2.303,285.627c-2.538,2.629-3.036,6.756-1.208,9.912 c1.825,3.152,5.647,4.789,9.187,3.896l237.415-59.355v12.723L81.743,436.224c-2.2,2.432-2.761,5.932-1.431,8.929 c1.33,2.998,4.302,4.93,7.581,4.93h53.636v18.247c0,9.452,7.689,17.141,17.141,17.141h17.694c9.452,0,17.141-7.689,17.141-17.141 v-18.247h124.966v18.247c0,9.452,7.689,17.141,17.141,17.141h17.694c9.452,0,17.141-7.689,17.141-17.141v-18.247h53.636 c3.28,0,6.251-1.932,7.581-4.93c1.33-2.997,0.769-6.497-1.431-8.929L264.283,252.804V240.08l237.415,59.355 c4.748,1.161,9.615-2.135,10.235-6.996C512.249,289.967,511.406,287.424,509.677,285.627z M247.695,136.319L76.822,240.063 c-3.915,2.378-5.162,7.479-2.786,11.395c2.377,3.915,7.478,5.161,11.395,2.786l162.264-98.517v67.255L34.349,276.317 L247.695,55.351V136.319z M141.53,432.942v0.553h-34.947L218.027,310.32l-55.516,105.48h-3.84 C149.219,415.801,141.53,423.49,141.53,432.942z M176.918,468.331c0,0.304-0.249,0.553-0.553,0.553H158.67 c-0.304,0-0.553-0.249-0.553-0.553v-35.389c0-0.304,0.249-0.553,0.553-0.553h8.803c0.012,0,0.024,0.002,0.036,0.002 c0.011,0,0.021-0.002,0.032-0.002h8.823c0.304,0,0.553,0.249,0.553,0.553V468.331z M353.308,468.884h-17.694 c-0.304,0-0.553-0.249-0.553-0.553v-35.389c0-0.304,0.249-0.553,0.553-0.553h8.823c0.011,0,0.021,0.002,0.032,0.002 c0.012,0,0.024-0.002,0.036-0.002h8.803c0.304,0,0.553,0.249,0.553,0.553v35.389h0 C353.861,468.635,353.612,468.884,353.308,468.884z M405.397,433.495h-34.947v-0.553c0-9.452-7.689-17.141-17.141-17.141h-3.84 l-55.516-105.48L405.397,433.495z M331.056,416.434c-7.244,2.004-12.584,8.636-12.584,16.508v0.553H193.506v-0.553 c0-7.872-5.34-14.504-12.584-16.508l75.067-142.627L331.056,416.434z" />
                      {"{"}" "{"}"}
                    </g>
                    {"{"}" "{"}"}
                  </g>
                  {"{"}" "{"}"}
                </g>
              </svg>
            </div>
            <h4 className=" mt-3 relative z-10">
              Hang Gliding <br /> Tours
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour_bgBlur;
