import React, { useEffect, useState } from "react";
import "./News.css";
import { FaRegComments, FaUserCircle } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const News01Page1 = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	return (
		<>
			<section className=" ">
				<div className=" container mx-auto mb-3">
					<div className=" mt-10 grid grid-flow-row md:grid-cols-2  lg:grid-cols-3  gap-5">
						<div className="flex flex-col w-fit border shadow-md px-4 py-3 rounded-xl ">
							<div className=" relative">
								<Link to={"/new1detail"}>
									<img
										src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/blog-01-500x360.jpg"
										className=" rounded-lg w-fit mx-auto "
									/>
								</Link>
								<Link to={"/newsbutton"}>
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
						<div className="flex flex-col w-fit border shadow-md px-4 py-3 rounded-xl ">
							<div className=" relative">
								<Link to={"/new1detail"}>
									<img
										src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/blog-02-500x360.jpg"
										className=" rounded-lg w-fit mx-auto "
									/>
								</Link>

								<Link to={"/newsbutton"}>
									<button className=" absolute bottom-[-12px] tracking-wider left-6 bg-secondary text-white px-3 py-1 text-sm hover:underline">
										{" "}
										City Tours
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
									<h2 className=" font-extrabold text-[22px]   hover:text-green-600 duration-300 cursor-pointer p-2">
										A place where start new life with adventure travel
									</h2>
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
						<div className="flex flex-col w-fit border shadow-md px-4 py-3 rounded-xl ">
							<div className=" relative">
								<Link to={"/new1detail"}>
									<img
										src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/blog-03-500x360.jpg"
										className=" rounded-lg w-fit mx-auto "
									/>
								</Link>
								<Link to={"/newsbutton"}>
									<button className=" absolute bottom-[-12px] tracking-wider left-6 bg-secondary text-white px-3 py-1 text-sm hover:underline">
										{" "}
										Life Style
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
									<h2 className=" font-extrabold text-[22px]   hover:text-green-600 duration-300 cursor-pointer p-2">
										Journeys are best measured with friends
									</h2>
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
						<div className="flex flex-col w-fit border shadow-md px-4 py-3 rounded-xl ">
							<div className=" relative">
								<Link to={"/new1detail"}>
									<img
										src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/blog-04-500x360.jpg"
										className=" rounded-lg w-fit mx-auto "
									/>
								</Link>
								<Link to={"/newsbutton"}>
									<button className=" absolute bottom-[-12px] tracking-wider left-6 bg-secondary text-white px-3 py-1 text-sm hover:underline">
										{" "}
										Life Style
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
									<h2 className=" font-extrabold text-[22px]   hover:text-green-600 duration-300 cursor-pointer p-2">
										Travel the most beautiful places in the world
									</h2>
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
						<div className="flex flex-col w-fit border shadow-md px-4 py-3 rounded-xl ">
							<div className=" relative">
								<Link to={"/new1detail"}>
									<img
										src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/blog-05-500x360.jpg"
										className=" rounded-lg w-fit mx-auto "
									/>
								</Link>
								<Link to={"/newsbutton"}>
									<button className=" absolute bottom-[-12px] tracking-wider left-6 bg-secondary text-white px-3 py-1 text-sm hover:underline">
										{" "}
										Wlid Camping
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
									<h2 className=" font-extrabold text-[22px]   hover:text-green-600 duration-300 cursor-pointer p-2">
										Top 10 destinations & adventure travel trips
									</h2>
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
						<div className="flex flex-col w-fit border shadow-md px-4 py-3 rounded-xl ">
							<div className=" relative">
								<Link to={"/new1detail"}>
									<img
										src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/blog-06-500x360.jpg"
										className=" rounded-lg w-fit mx-auto "
									/>
								</Link>
								<Link to={"/newsbutton"}>
									<button className=" absolute bottom-[-12px] tracking-wider left-6 bg-secondary text-white px-3 py-1 text-sm hover:underline">
										{" "}
										Life Style
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
									<h2 className=" font-extrabold text-[22px]   hover:text-green-600 duration-300 cursor-pointer p-2">
										The surfing man will adventure your mind
									</h2>
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
			</section>
		</>
	);
};

export default News01Page1;
