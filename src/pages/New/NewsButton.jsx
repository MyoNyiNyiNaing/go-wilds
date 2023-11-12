import React, { useState } from "react";
import "./News.css";
import { FaRegComments, FaUserCircle } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RiDoubleQuotesR } from "react-icons/ri";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BsArrowRight } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import Landing_image from "../../components/Landing/Landing_image";

const NewsButton = () => {
	return (
		<>
			<Landing_image page={"adventure"} about={"adventure"} />
			
            <div className="  2xl:w-[68%]  w-[100%]  xl:mx-auto overflow-hidden md:flex-row lg:flex justify-between md:mt-20 mt-10">
				{/* first one */}
				<div className=" w-full lg:w-7/12 flex-col mx-auto">
					<div className=" mt-10 grid grid-flow-row md:grid-cols-2  lg:grid-cols-3  gap-10">
						<div className="flex flex-col w-fit md:w-96 border shadow-md px-4 py-3 rounded">
							<div className=" relative">
								<Link to={"/new1detail"}>
									<img
										src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/blog-01-500x360.jpg"
										className=" rounded w-fit mx-auto"
									/>
								</Link>
								<Link to={'/newsbutton'}>
									<button className=" absolute bottom-[-12px] tracking-wider left-6 bg-secondary text-white px-3 py-1 text-[15px] hover:underline">
										{" "}
										Adventure
									</button>
								</Link>

								<div className=" absolute top-0 left-3/4  bg-green-600 text-white flex flex-col items-center justify-center w-fit rounded px-2 py-1 ">
									<p className=" text-sm mb-0">19</p>
									<p className=" text-sm">Dec</p>
								</div>
							</div>
							<div className=" p-3 flex flex-col items-start">
								<div className=" flex p-3 ">
									<div className=" flex items-center">
										<FaUserCircle className=" text-xl text-green-400 mx-2" />
										<h4 className="text-sm text-gray-500">Admin</h4>
									</div>
									<div className=" flex items-center">
										<FaRegComments className=" text-xl text-green-400 mx-2" />
										<h4 className=" text-sm text-gray-500">0 comments</h4>
									</div>
								</div>
								<div className=" p-3">
									<Link to={"/new1detail"}>
										<h2 className=" font-extrabold  text-[22px]   hover:text-green-600 duration-300 cursor-pointere p-2">
											Things to see and do when visiting Japan
										</h2>
									</Link>
									<p className=" text-[16px] text-gray-500  p-2">
										There are many variations of but the majority have simply
										free text.
									</p>
									<Link>
										<div className=" flex items-center  p-2">
											<h2 className=" text-sm text-gray-500 hover:tracking-widest ease-linear duration-300">
												Read More
											</h2>
											<AiOutlineArrowRight className=" text-green-400 mx-2" />
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* for second div */}
				<div className=" w-full  lg:w-4/12 gap-3 mb-10">
					<div className="">
						{/* for column 2 first component */}
						<div className=" p-5 shadow-md border bg-[#f3f8f6] rounded">
							<div className=" px-1 py-3 text-[16px] font-[800]">
								<h2 className=" capitalize"> All Catagories</h2>
								<TfiLayoutLineSolid className=" text-3xl text-green-500" />
							</div>
							<div className=" flex-col gap-2 text-[16px]">
								<div className=" p-5 flex justify-between items-center border-b-2 duration-300 hover:border-green-400 cursor-pointer">
									<p className=" text-gray-400 hover:text-green-500 ">
										{" "}
										Adventure
									</p>
									<BsArrowRight className=" text-green-600" />
								</div>
								<div className=" p-5 flex justify-between items-center border-b-2 duration-300 hover:border-green-400 cursor-pointer">
									<p className=" text-gray-400 hover:text-green-500 ">
										{" "}
										City Tours
									</p>
									<BsArrowRight className=" text-green-600" />
								</div>
								<div className=" p-5 flex justify-between items-center border-b-2 duration-300 hover:border-green-400 cursor-pointer">
									<p className=" text-gray-400 hover:text-green-500 ">
										{" "}
										Life Style
									</p>
									<BsArrowRight className=" text-green-600" />
								</div>
								<div className=" p-5 flex justify-between items-center  duration-300 hover:border-green-400 cursor-pointer">
									<p className=" text-gray-400 hover:text-green-500 ">
										{" "}
										Wild Camping
									</p>
									<BsArrowRight className=" text-green-600" />
								</div>
							</div>
						</div>
						{/* for column 2 second component */}
						<div className=" p-5 shadow-md bg-[#f3f8f6] mt-4 border-rounded">
							<div className=" p-5 text-[16px] font-[700] tracking-[1px]">
								<h2 className=" capitalize">Recent Posts</h2>
								<TfiLayoutLineSolid className=" text-3xl text-green-500" />
							</div>
							<div className=" flex items-center gap-3">
								<div className=" w-[80px] h-[80px] rounded ">
									<img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/blog-01-300x300.jpg" />
								</div>
								<div className=" py-4">
									<div className=" flex items-center">
										<FaRegComments className=" text-xl text-green-400 mx-2" />
										<h4 className=" text-[12px]  text-gray-500 capitalize">
											0 comments
										</h4>
									</div>
									<div className="  mt-2  ">
										<h2 className=" text-[16px] leading-[24px] flex flex-wrap font-semibold hover:text-green-500 cursor-pointer">
											Things to see and do when
											
											visiting Japan
										</h2>
									</div>
								</div>
							</div>
							<div className=" flex items-center gap-3">
								<div className=" w-[80px] h-[80px] rounded ">
									<img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/blog-02-300x300.jpg" />
								</div>
								<div className=" py-4">
									<div className=" flex items-center">
										<FaRegComments className=" text-xl text-green-400 mx-2" />
										<h4 className=" text-[12px]  text-gray-500 capitalize">
											0 comments
										</h4>
									</div>
									<div className="  mt-2 ">
										<h2 className=" text-[16px] flex flex-wrap leading-[24px]  font-semibold hover:text-green-500 cursor-pointer">
										A place where start new life with adventure travel
										</h2>
									</div>
								</div>
							</div>
							<div className=" flex items-center gap-3">
								<div className=" w-[80px] h-[80px] rounded ">
									<img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/blog-03-300x300.jpg" />
								</div>
								<div className=" py-4">
									<div className=" flex items-center">
										<FaRegComments className=" text-xl text-green-400 mx-2" />
										<h4 className=" text-[12px]  text-gray-500 capitalize">
											0 comments
										</h4>
									</div>
									<div className="  mt-2 ">
										<h2 className=" text-[16px] flex flex-wrap leading-[24px]  font-semibold hover:text-green-500 cursor-pointer">
											Journeys are best measured with
											
											friends
										</h2>
									</div>
								</div>
							</div>
						</div>
						{/* for third component  */}
						<div className=" p-5 shadow-sm border rounded bg-[#f3f8f6] mt-4">
							<div className=" px-1 py-3">
								<h2 className=" capitalize">Tags</h2>
								<TfiLayoutLineSolid className=" text-3xl text-green-500" />
							</div>
							<div className="flex gap-3 items-center flex-wrap ">
								<button className=" px-4 py-2 text-sm bg-gray-200 tracking-normal hover:bg-green-600 hover:text-white duration-300">
									<p className="text-[10px]">ADVENTURE</p>
								</button>
								<button className=" px-4 py-2  bg-gray-200 tracking-normal hover:bg-green-600 hover:text-white duration-300">
									<p className="text-[10px]">CAMPING</p>{" "}
								</button>
								<button className=" px-4 py-2  bg-gray-200 tracking-normal hover:bg-green-600 hover:text-white duration-300">
									<p className="text-[10px]">NATURAL</p>
								</button>
								<button className=" px-4 py-2  bg-gray-200 tracking-normal hover:bg-green-600 hover:text-white duration-300">
									<p className="text-[10px]">POLICY</p>
								</button>
								<button className=" px-4 py-2  bg-gray-200 tracking-normal hover:bg-green-600 hover:text-white duration-300">
									<p className="text-[10px]">SOLAR ENERGY</p>{" "}
								</button>
								<button className=" px-4 py-2  bg-gray-200 tracking-normal hover:bg-green-600 hover:text-white duration-300">
									<p className="text-[10px]">TRAVELS</p>
								</button>
							</div>
							
						</div>
						{/* for fourth component */}
						<div className=" shadow-md border rounded bg-gray-50 mt-4">
							<div className=" md:min-h-[340px]  min-h-[200px] relative flex items-center justify-center overflow-hidden cursor-pointer">
								
									<div className=" bg-tour bg-gray-700 z-0"></div>
									<div className=" z-0 absolute bottom-5 left-6">
										<div className=" text-left">
											<p className=" text-lg text-green-500">Travel to</p>
											<h2 className=" text-3xl text-white font-semibold">
												United Kingdom
											</h2>
										</div>
									</div>
									<button className="absolute top-3 right-3 bg-orange-400 text-white px-3 py-1 rounded tracking-wider text-sm ">
										3 Tours
									</button>
								
							</div>
						</div>
						{/* for fifth component */}
						<div className=" mt-4 ">
							<div className=" md:min-h-[340px]  min-h-[200px] relative flex items-center justify-center overflow-hidden">
								<div className=" bg-booking"></div>
								<div className=" z-0 flex-col justify-center items-center ">
									<div className=" w-[65px] mx-auto bg-green-500 h-[65px] rounded-full flex items-center justify-center">
										<LuPhoneCall className=" text-xl text-white" />
									</div>
									<div className=" text-lg text-white font-extrabold">
										<p className=" text-center">
											Quick booking
											<br />
											Process
										</p>
									</div>
									<hr className=" w-full" />
									<div className=" text-center">
										<p className=" text-sm text-gray-200">Talk to an expert</p>
										<h2 className=" text-white text-lg font-semibold">
											+ 1- (246) 333-0089
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewsButton;
