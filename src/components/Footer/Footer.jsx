import React from "react";
import "./footer.css";
import { FiCheckCircle } from "react-icons/fi";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaTelegramPlane,
} from "react-icons/fa";
import {IoLogoLinkedin} from 'react-icons/io5'
import { MdLocationOn, MdMail } from "react-icons/md";
import { HiArrowUpRight, HiPhone } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className=" bg-dark  text-white footer">
        <div className="2xl:w-[68%] xl:w-[97%] w-[100%]  xl:mx-auto">
          <div className="pt-[40px] md:pt-[80px] leading-9 first-footer md:flex  ">
            <div className="flex items-center  pl-[15px] md:pr-[60px] px-[15px] md:pb-[70px] pb-[30px] mb-[40px] md:mb-0 mobile-border">
              <div className="pr-[35px]">
                <Link to="/">
                  <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/icon-headphone.png" alt="" className="max-w-[80px]" />
                </Link>
              </div>
              <Link to={"/"}>
                {" "}
                <span className="footer-main-text lg:text-[28px] text-[18px] break-normal w-80">
                  Need any support for tour & travels ?
                </span>
              </Link>
              <div className="relative ml-2  w-36 hidden md:inline-block ">
                <Link to={"/"}>
                  <div className="rounded-full ml-auto arrow-icon bg-primary lg:w-16 lg:h-16 w-[50px] h-[50px] flex items-center justify-center ">
                    <HiArrowUpRight className="text-white  text-2xl mb-1 ml-1  transform -translate-x-0.5 -translate-y-0.5 " />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-center  pl-[15px] md:pr-[60px] px-[15px] pb-[70px] md:border-none ">
              <div className="pr-[35px]">
                <Link to={"/"}>
                  <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/01/icon-travel.png" alt="" className="max-w-[80px]" />
                </Link>
              </div>
              <Link to={"/"}>
                <span className=" footer-main-text lg:text-[28px] text-[18px]  break-normal w-80">
                  Ready to Get Started With Vacations!
                </span>
              </Link>
              <div className="relative ml-2  w-36  hidden md:inline-block ">
                <Link to={"/"}>
                  <div className="rounded-full ml-auto arrow-icon arrow-orange bg-secondary lg:w-16 lg:h-16 w-[50px] h-[50px] flex items-center justify-center ">
                    <HiArrowUpRight className="text-white  text-2xl mb-1 ml-1  transform -translate-x-0.5 -translate-y-0.5 " />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-[80px] main-footer-container flex lg:justify-evenly justify-between lg:flex-nowrap flex-wrap">
            <div className="footer-items lg:w-72 md:w-[45%] w-[80%] lg:mb-0 mb-8 flex flex-col gap-4">
              <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2022/12/logo-white.png" alt="" className=" max-w-[140px]" />
              <p className=" leading-7 text-[16px] mb-[16px]">
                To take trivial example which us ever undertakes laborious
                physica exercise except obsome.
              </p>
              <div className="footer-icon-container flex gap-4">
                <span className=" footer-social-icon">
                  <FaTwitter />
                </span>
                <span className=" footer-social-icon">
                  <FaFacebook />
                </span>
                <span className=" footer-social-icon">
                  <FaInstagram />
                </span>
                <span className=" footer-social-icon">
                  <IoLogoLinkedin />
                </span>
              </div>
            </div>
            <div className="footer-items lg:w-auto md:w-[45%] w-[80%] lg:mb-0 mb-8">
              <p className="footer-item-header">Pages</p>
              <div className=" flex flex-col gap-4 w-40">
                <Link>
                  <span className="footer-page-link-text">About us</span>
                </Link>
                <Link>
                  <span className="footer-page-link-text">Community Blog</span>
                </Link>
                <Link>
                  <span className="footer-page-link-text">Work with Us</span>
                </Link>
                <Link>
                  <span className="footer-page-link-text">Privacy Policy</span>
                </Link>
                <Link>
                  <span className="footer-page-link-text">Contact Us</span>
                </Link>
              </div>
            </div>
            <div className="footer-items flex  flex-col gap-4  lg:w-96 md:w-[45%] w-[80%] lg:mb-0 mb-8">
              <p className="footer-item-header mb-[10px]  ">
                <span className="newsHeader relative">Newsletter</span>
              </p>
              <div className="flex flex-col gap-4">
                <span className="text-[#e1e1e1] text=[16px] leading-6 break-words">
                  Subscribe our newsletter to get our latest update & news.
                </span>
                <div className=" flex">
                  <input
                    type="email"
                    placeholder="Email address"
                    className=" py-[18px] email-input w-full"
                  />
                  <button className=" bg-primary w-[50px] flex items-center justify-center send-icon">
                    <FaTelegramPlane className="text-xl" />
                  </button>
                </div>
                <div className=" flex gap-4 items-center  text-[#bfbfbf]">
                  <FiCheckCircle />
                  <span>I agree to all terms and policies</span>
                </div>
              </div>
            </div>
            <div className="footer-items lg:w-auto md:w-[45%] w-[80%] lg:mb-0 mb-8">
              <p className="footer-item-header">Contact</p>
              <div className="footer-contact-container gap-5 flex flex-col">
                <div className="footer-contact-item flex items-center gap-3">
                  <div className="contact-footer-icon">
                    <HiPhone />
                  </div>
                  <div className="">
                    <span className=" footer-contact-header">Drop a Line</span>
                    <p className=" footer-contact-text"> +00 (123) 456 889</p>
                  </div>
                </div>
                <div className="footer-contact-item flex items-center gap-3">
                  <div className="contact-footer-icon">
                    <MdMail />
                  </div>
                  <div className="">
                    <span className=" footer-contact-header">
                      Email Address{" "}
                    </span>
                    <p className=" footer-contact-text">contact@example.com</p>
                  </div>
                </div>
                <div className="footer-contact-item flex items-center gap-3">
                  <div className="contact-footer-icon">
                    <MdLocationOn />
                  </div>
                  <div className="">
                    <span className=" footer-contact-header">
                      Visit office{" "}
                    </span>
                    <p className=" footer-contact-text">
                      583 Main Street, NY, USA{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#101311] text-white text-center py-[15px] footer text-[12px] md:text-[16px] leading-7">
        <span>
          © 2023 Copyrights by Gowilds. All Rights Reserved. Developed by Team D
        </span>
      </div>
    </>
  );
};

export default Footer;
