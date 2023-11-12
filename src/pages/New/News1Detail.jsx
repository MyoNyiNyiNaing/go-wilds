import React, { useEffect } from "react";
import {
	FaFacebookF,
	FaFolderOpen,
	FaLinkedinIn,
	FaRegComments,
	FaTumblr,
	FaTwitter,
	FaUserAlt,
} from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BsArrowRight } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";
import Landing_image from "../../components/Landing/LandingImage";


const News1Detail = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	return (
		<>
		<Landing_image about={'A Place Where Start New Life With Adventure Travel'} page={'city tours'} />
			<div className="  2xl:w-[68%]  w-[100%]  xl:mx-auto overflow-hidden md:flex-row lg:flex justify-between md:mt-20 mt-10">
				{/* first one */}
				<div className="  w-full lg:w-7/12 flex-col mx-auto">
					<div className=" ">
						<div className=" w-full">
							<img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/blog-01.jpg" alt="" />
						</div>
						<div className=" flex gap-4 py-3">
							<div className=" flex  gap-2 text-[15px]">
								<FaUserAlt className=" text-xl text-green-500 " />
								<h2 className=" text-sm text-gray-500">Admin</h2>
							</div>
							<div className=" flex gap-2 text-[15px]">
								<FaFolderOpen className=" text-xl text-green-500 " />
								<h2 className=" text-sm text-gray-500">Adventure</h2>
							</div>
						</div>
					</div>
					{/* description */}
					<div className=" p-4">
						<div className=" flex-col">
							<h2 className=" text-[30px]  font-semibold my-3">
								Things to see and do when visiting Japan
							</h2>
							<p className=" flex flex-wrap text-[16px]   text-gray-500 leading-[1.8em]">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium totam rem
								
								aperiam, eaque ipsa quae ab illo veritatis et quasi beatae vitae
								dicta sunt explicabo.
							</p>
						</div>
						<div className=" flex-col">
							<h2 className=" text-2xl font-semibold my-3">
								Build camping easily.
							</h2>
							<p className=" flex flex-wrap text-[16px]   text-gray-500 leading-[1.8em]">
								Less time collecting water means more time in class. Clean water
								and proper toilets at school means teenage
								
								girls don’t have to stay home for a week out of every month.
							</p>
						</div>
						<div className=" flex-col">
							<div className=" p-5 shadow-sm border-l-2 border-green-600 bg-gray-100">
								<div className=" py-4">
									<RiDoubleQuotesR className=" text-[38px] " />
								</div>
								<p className=" text-[#313131] flex flex-wrap text-[18px]  py-2">
									Metus eu, nisi nibh et adipiscing natoque morbi integer
									scelerisque tincidunt mauris.
									
									Lectus molestie nisl rutrum cras dictum lectus molestie
									leoenim.
								</p>
								<TfiLayoutLineSolid className=" text-3xl text-gray-300" />
								<span className=" text-sm font-bold"> said Polito</span>
							</div>
						</div>
						<div className=" flex-col">
							<h2 className=" text-[20px] font-semibold my-3">
								Great opportunity for adventure & travels
							</h2>
							<p className=" text-[#313131] flex flex-wrap text-[16px] ">
								Neque porro quisquam estey qui dolorem ipsum quia dolor sit
								amet, consectetur, adipisci velit sed quia non
								<br />
								numquam eius modie tempora incidunt ut labore et dolore magnam
								aliquam quaerat voluptatem. Ut enim ad
								<br />
								minima veniam quis nostrum exercitationem ullam.
							</p>
						</div>
					</div>
					<hr className=" " />
					{/* tags parts */}
					<div className=" ">
						<div className=" p-4 flex flex-col md:flex-row gap-y-5 items-center justify-between">
							<div className="flex gap-3 items-center">
								<p>Tags:</p>
								<div className="flex gap-3 items-center ">
									<button className=" px-2 font-[700] py-1 text-[14px] leading-[28px] bg-[#f3f8f6] tracking-wider hover:bg-green-600 hover:text-white duration-300">
										Adventure
									</button>
									<button className=" px-2 font-[700] py-1 text-[14px] leading-[28px] bg-[#f3f8f6] tracking-wider hover:bg-green-600 hover:text-white duration-300">
										Camping{" "}
									</button>
									<button className=" px-2 font-[700] py-1 text-[14px] leading-[28px] bg-[#f3f8f6] tracking-wider hover:bg-green-600 hover:text-white duration-300">
										Travels
									</button>
								</div>
							</div>
							<div className="mt-3 md:mt-0">
								<div className=" flex items-center gap-3">
									<div className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 hover:bg-green-500 hover:text-white duration-300">
										<FaFacebookF className=" " />
									</div>
									<div className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 hover:bg-green-500 hover:text-white duration-300">
										<FaTwitter />
									</div>
									<div className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 hover:bg-green-500 hover:text-white duration-300">
										<FaLinkedinIn />
									</div>
									<div className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 hover:bg-green-500 hover:text-white duration-300">
										<FaTumblr />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* admin */}
					<div className="flex flex-col md:flex-row items-center gap-3 p-4 bg-[#f3f8f6]">
						<div className="w-[150px] h-[150px] rounded">
							<img src="https://secure.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=190&d=mm&r=g" />
						</div>
						<div className="">
							<div className=" px-1 py-3">
								<h2 className=" capitalize font-semibold">Admin</h2>
								<TfiLayoutLineSolid className=" text-3xl text-green-500" />
							</div>
							<div className=" text-gray-500 leading-[30px]">
								It has survived not only five centuries, but also the leap into
								electronic <br /> typesetting simply fee text aunchanged. It was
								popularised in the <br />
								sheets containing lorem ipsum is simply free text.
							</div>
						</div>
					</div>
					{/* add a comment */}
					<div className="">
						<div className="p-4">
							<div className="">
								<div className=" px-1 py-3">
									<h2 className=" text-sm font-semibold">Add a comment</h2>
									<TfiLayoutLineSolid className=" text-3xl text-green-500" />
								</div>
								<p className=" text-gray-400 text-[16px] leading-[1.8rem]">
									Your email address will not be published.
								</p>
								<form className=" p-4">
									<div className=" mt-5">
										<input
											type="text"
											className=" block text-[16px] leading-[1.8rem] w-full px-6 py-4 bg-gray-100 text-lg  placeholder-gray-400 focus:outline-none  shadow-lg   "
											placeholder="Your Name *"
										/>
									</div>
									<div className=" mt-5">
										<input
											type="text"
											className=" text-[16px] leading-[1.8rem] block w-full px-6 py-4 bg-gray-100 text-lg  placeholder-gray-400 focus:outline-none  shadow-lg   "
											placeholder="Your Email *"
										/>
									</div>
									<div className=" flex-col md-flex-row items-center gap-2 mt-4">
										<input class=" p-5" type="checkbox" name="status" />
										<p className=" text-gray-400 text-[16px] leading-[1.8rem]">
											Save my name, email, and website in this browser for the
											next time I comment.
										</p>
									</div>
									<div className=" mt-4">
										<textarea
											className=" text-[16px] leading-[1.8rem] block w-full px-7 py-5 bg-gray-100 text-lg  placeholder-gray-400 focus:outline-none  shadow-lg   "
											cols="80"
											rows="5"
											placeholder="Write your comment"
										></textarea>
									</div>
									<button className=" text-[16px] leading-[1.8rem] mt-4 px-6 py-2 bg-green-500 text-white hover:bg-green-400 duration-200 rounded">
										Post a comment
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/* for second div */}
				<div className=" w-full  lg:w-4/12 gap-3">
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

export default News1Detail;
