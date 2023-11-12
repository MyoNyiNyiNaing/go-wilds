import React, { useEffect } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaCoins, FaPlay, FaVest } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import Adventure_gallery from "../../components/Adventure/Adventure_gallery";
import { Link } from "react-router-dom";

const Destination = ({ name, setName }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className=" overflow-hidden">
      <img
        src="	https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/breadcrumb-01.jpg"
        className="fixed-bg"
        alt=""
      />
      <div className=" md:min-h-[250px]  bg-white min-h-[200px]  relative flex items-center justify-center overflow-hidden z-50">
        <div className="landing-img"></div>
        <div className="w-full 2xl:w-[68%] px-5 text-white flex justify-start  mt-auto">
          <h1 className=" leading-[55px] text-[40px] md:text-[70px]  font-[700] capitalize">
            Destination
          </h1>
        </div>
      </div>
      <div className=" w-full bg-white">
        <div className="flex 2xl:w-[68%]  xl:mx-auto flex-wrap px-5 gap-5 flex-col lg:flex-row py-20  ">
          <div
            className=" lg:w-[23%] w-full  destination-container relative"
            onClick={() => setName("Switzerland")}
          >
            <Link to={"/destination/destination-detail"}>
              <div className=" uppercase text-xs font-bold px-7 py-3 bg-secondary absolute z-10 text-white rounded-lg right-10 top-10">
                3 tours
              </div>
              <div className=" absolute z-10 p-10 bottom-0">
                <h4 className=" text-primary text-xl font-normal leading-7">
                  Travel to
                </h4>
                <h2 className=" text-white text-[26px] font-bold leading-9">
                  Switzerland
                </h2>
              </div>
              <div className=" rounded-lg overflow-hidden relative  h-80 object-cover">
                <div className="absolute bg-[#00000021] w-full h-full z-10"></div>

                <img
                  src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/image-08.jpg"
                  className=" object-cover destination-img"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <div
            className=" lg:w-[23%] w-full  destination-container relative"
            onClick={() => setName("France")}
          >
            <Link to={"/destination/destination-detail"}>
              <div className=" uppercase text-xs font-bold px-7 py-3 bg-secondary absolute z-10 text-white rounded-lg right-10 top-10">
                3 tours
              </div>
              <div className=" absolute z-10 p-10 bottom-0">
                <h4 className=" text-primary text-xl font-normal leading-7">
                  Travel to
                </h4>
                <h2 className=" text-white text-[26px] font-bold leading-9">
                  France
                </h2>
              </div>
              <div className=" rounded-lg overflow-hidden relative h-80 object-cover">
                <div className="absolute bg-[#00000021] w-full h-full z-10"></div>

                <img
                  src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/image-09.jpg"
                  className=" object-cover destination-img"
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div
            className=" lg:w-[49%] w-full  destination-container relative"
            onClick={() => setName("United Kingdom")}
          >
            <Link to={"/destination/destination-detail"}>
              <div className=" uppercase text-xs font-bold px-7 py-3 bg-secondary absolute z-10 text-white rounded-lg right-10 top-10">
                3 tours
              </div>
              <div className=" absolute z-10 p-10 bottom-0">
                <h4 className=" text-primary text-xl font-normal leading-7">
                  Travel to
                </h4>
                <h2 className=" text-white text-[26px] font-bold leading-9">
                  United Kingdom
                </h2>
              </div>
              <div className=" rounded-lg overflow-hidden relative w-full h-80 object-cover">
                <div className="absolute bg-[#00000021] w-full h-full z-10"></div>

                <img
                  src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/image-10.jpg"
                  className=" w-full h-full object-cover destination-img"
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div
            className=" lg:w-[23%] w-full  destination-container relative"
            onClick={() => setName("Thailand")}
          >
            <Link to={"/destination/destination-detail"}>
              <div className=" uppercase text-xs font-bold px-7 py-3 bg-secondary absolute z-10 text-white rounded-lg right-10 top-10">
                1 tours
              </div>
              <div className=" absolute z-10 p-10 bottom-0">
                <h4 className=" text-primary text-xl font-normal leading-7">
                  Travel to
                </h4>
                <h2 className=" text-white text-[26px] font-bold leading-9">
                  Thailand
                </h2>
              </div>
              <div className=" rounded-lg overflow-hidden relative h-80 object-cover">
                <div className="absolute bg-[#00000021] w-full h-full z-10"></div>

                <img
                  src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/image-11.jpg"
                  className=" object-cover destination-img"
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div
            className=" lg:w-[23%] w-full  destination-container relative"
            onClick={() => setName("Singapore")}
          >
            <Link to={"/destination/destination-detail"}>
              <div className=" uppercase text-xs font-bold px-7 py-3 bg-secondary absolute z-10 text-white rounded-lg right-10 top-10">
                2 tours
              </div>
              <div className=" absolute z-10 p-10 bottom-0">
                <h4 className=" text-primary text-xl font-normal leading-7">
                  Travel to
                </h4>
                <h2 className=" text-white text-[26px] font-bold leading-9">
                  Singapore
                </h2>
              </div>
              <div className=" rounded-lg overflow-hidden relative h-80 object-cover">
                <div className="absolute bg-[#00000021] w-full h-full z-10"></div>

                <img
                  src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/image-12.jpg"
                  className=" object-cover destination-img"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <div
            className=" lg:w-[23%] w-full  destination-container relative"
            onClick={() => setName("Italy")}
          >
            <Link to={"/destination/destination-detail"}>
              <div className=" uppercase text-xs font-bold px-7 py-3 bg-secondary absolute z-10 text-white rounded-lg right-10 top-10">
                2 tours
              </div>
              <div className=" absolute z-10 p-10 bottom-0">
                <h4 className=" text-primary text-xl font-normal leading-7">
                  Travel to
                </h4>
                <h2 className=" text-white text-[26px] font-bold leading-9">
                  Italy
                </h2>
              </div>
              <div className=" rounded-lg overflow-hidden relative  h-80 object-cover">
                <div className="absolute bg-[#00000021] w-full h-full z-10"></div>

                <img
                  src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/image-13.jpg"
                  className=" object-cover destination-img"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <div
            className=" lg:w-[23%] w-full  destination-container relative"
            onClick={() => setName("Japan")}
          >
            <Link to={"/destination/destination-detail"}>
              <div className=" uppercase text-xs font-bold px-7 py-3 bg-secondary absolute z-10 text-white rounded-lg right-10 top-10">
                2 tours
              </div>
              <div className=" absolute z-10 p-10 bottom-0">
                <h4 className=" text-primary text-xl font-normal leading-7">
                  Travel to
                </h4>
                <h2 className=" text-white text-[26px] font-bold leading-9">
                  Japan
                </h2>
              </div>
              <div className=" rounded-lg overflow-hidden relative  h-80 object-cover">
                <div className="absolute bg-[#00000021] w-full h-full z-10"></div>

                <img
                  src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/image-03.jpg"
                  className=" object-cover destination-img"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <div
            className=" lg:w-[47.50%] w-full destination-container relative"
            onClick={() => setName("Hong Kong")}
          >
            <Link to={"/destination/destination-detail"}>
              <div className=" uppercase text-xs font-bold px-7 py-3 bg-secondary absolute z-10 text-white rounded-lg right-10 top-10">
                3 tours
              </div>
              <div className=" absolute z-10 p-10 bottom-0">
                <h4 className=" text-primary text-xl font-normal leading-7">
                  Travel to
                </h4>
                <h2 className=" text-white text-[26px] font-bold leading-9">
                  Hong Kong
                </h2>
              </div>
              <div className=" rounded-lg overflow-hidden relative w-full h-80 object-cover">
                <div className="absolute bg-[#00000021] w-full h-full z-10"></div>

                <img
                  src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/bg-05.jpg"
                  className=" w-full h-full object-cover destination-img"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <div
            className=" lg:w-[23%] w-full  destination-container relative"
            onClick={() => setName("Italy")}
          >
            <Link to={"/destination/destination-detail"}>
              <div className=" uppercase text-xs font-bold px-7 py-3 bg-secondary absolute z-10 text-white rounded-lg right-10 top-10">
                2 tours
              </div>
              <div className=" absolute z-10 p-10 bottom-0">
                <h4 className=" text-primary text-xl font-normal leading-7">
                  Travel to
                </h4>
                <h2 className=" text-white text-[26px] font-bold leading-9">
                  Italy
                </h2>
              </div>
              <div className=" rounded-lg overflow-hidden relative  h-80 object-cover">
                <div className="absolute bg-[#00000021] w-full h-full z-10"></div>

                <img
                  src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-2.jpg"
                  className=" object-cover destination-img h-full w-full"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <div className=" lg:w-[23%] w-full  destination-container relative">
            <div className=" absolute z-20 p-12 bottom-5 flex flex-col justify-start  items-start gap-4">
              <span className=" uppercase text-xs font-bold px-5 py-3 bg-secondary  text-white rounded-lg ">
                up to 50% off
              </span>

              <h2 className=" text-white text-[26px] font-bold leading-9">
                Members are <br /> Saving up t 50%
              </h2>
              <a
                href="/about"
                className=" py-4 px-8 rounded-lg bg-white font-bold text-sm"
              >
                View Deals
              </a>
            </div>
            <div className=" rounded-lg overflow-hidden relative  h-80">
              <div className="absolute bg-[rgba(98,171,96,0.75)] w-full h-full z-10"></div>
              <img
                src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/tour-10.jpg"
                className=" h-full object-cover destination-img w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:w-[68%]  xl:mx-auto flex flex-col md:flex-row md:items-center items-start justify-between lg:min-h-[100vh] min-h-[200px] relative  overflow-hidden z-50  px-5 py-20">
        <div className={`bg-fixed-photo-for-music md:hidden`}></div>
        <div className="  text-white flex flex-col items-start">
          <div className="px-5 py-4 bg-[#f7921e2f] text-secondary rounded-lg font-semibold mb-7">
            <span>Are you ready to travel?</span>
          </div>
          <h2 className=" md:text-[48px] font-bold leading-tight mb-10">
            Ready to travel with real <br /> adventure and enjoy natural
          </h2>
          <div className=" cursor-pointer text-white px-5 py-4 rounded-lg duration-150 transition bg-[#7ecc5d] hover:bg-primary relative bottom-3">
            <a href="/tours" className=" capitalize font-bold">
              Discover more
            </a>
          </div>
        </div>
        <a
          href="https://www.youtube.com/watch?v=JA0g4KYMf_k"
          className="music-btn music-btn-2 hover:scale-95 duration-150 transition relative p-10 bg-white rounded-full "
        >
          <FaPlay className=" text-black" size={"2rem"} />
        </a>
      </div>
      <div className=" w-full  bg-white py-10">
        <div className="2xl:w-[68%] xl:mx-auto relative min-h-screen md:px-20 px-5 py-10 overflow-hidden ">
          <div className="flex flex-col lg:flex-row justify-center md:justify-between min-h-screen relative z-50 gap-y-10 ">
            <div className=" flex-[50%] ">
              <div className="relative flex justify-end ">
                <a href="/about" className=" team_img">
                  <div className=" rounded-xl overflow-hidden w-[90%]">
                    <img
                      src={
                        "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/image-1.jpg"
                      }
                      alt=""
                    />
                  </div>
                </a>
                <div className=" absolute -bottom-20 -left-10">
                  <a href="/about" className=" team_img">
                    <div className=" landing rounded-xl overflow-hidden w-[70%]">
                      <img
                        src={
                          "https://gaviaspreview.com/wp/gowilds/wp-content/plugins/gowilds-themer/elementor/assets/images/image-2.jpg"
                        }
                        alt=""
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className=" flex-[40%] flex flex-col md:pl-5">
              <div className="mb-10">
                <span className=" px-5 py-4 bg-[#64ab4513] text-primary rounded-lg font-semibold">
                  About Company
                </span>
              </div>
              <h2 className=" mb-10">
                <span className="text-[20px]  md:text-[40px] font-bold leading-tight">
                  Great Opportunity For Adventure & Travels
                </span>
              </h2>
              <div className="parent gap-14 flex flex-col">
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
                  <div className="flex flex-col md:gap-3 gap-1">
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
                  <div className="flex flex-col md:gap-3 gap-1">
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
                  <div className="flex flex-col md:gap-3 gap-1">
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
      </div>
      <Adventure_gallery />
    </div>
  );
};

export default Destination;
