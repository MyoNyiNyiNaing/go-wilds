import React, { useEffect } from "react";
import "./contact.css";
import iconMap from "../../assets/images/map.png";
import iconMail from "../../assets/images/mail.png";
import iconPhone from "../../assets/images/24-hour.png";
import iconEarth from "../../assets/images/planet-earth.png";
import { GiEarthAmerica } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import Landing_image from "../../components/Landing/LandingImage";
import Explore_more from "../../components/Explore_more/ExploreMore";
import Reveal from "../../components/Animations/Reveal";
import RevealUp from "../../components/Animations/RevealUp";
const ContactPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="contact-page">
      <Landing_image about={"contact"} page={"contact"} />
      <div className="2xl:w-[68%] xl:w-[97%] w-[98%]  mx-auto pt-20 ">
        <div className="main-contact-section">
          <div className=" text-center mb-8 xl:w-[60%] lg:w-[65%] md:w-[80%] mx-auto flex flex-col gap-3 ">
            <Reveal>

            <span className="py-[9px] px-[22px]  self-center  inline-block text-primary bg-[#e2f0dc] rounded text-base font-[600]">
              Contact us
            </span>
            </Reveal>
            <Reveal value={-200}>

            <p className="text-[#1c231f] lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
              Ready to Get our best Services! Feel free to contact with us
            </p>
            </Reveal>
          </div>
          <RevealUp>
            
      
          <div className="contact-card-container flex gap-8 md:flex-row flex-col">
            <div className="contact-card-item">
              <img src={iconMap} alt="" />
              <p>Office Location</p>
              <span>55 Main Street</span>
              <span>2nd Floor New York</span>
            </div>
            <div className="contact-card-item">
              <img src={iconMail} alt="" />
              <p>Office Location</p>
              <span>55 Main Street</span>
              <span>2nd Floor New York</span>
            </div>
            <div className="contact-card-item">
              <img src={iconPhone} alt="" />
              <p>Office Location</p>
              <span>55 Main Street</span>
              <span>2nd Floor New York</span>
            </div>
          </div>
          </RevealUp>
        </div>
        <div className="contact-form-section py-28 flex justify-between  md:flex-nowrap  flex-wrap md:gap-0 gap-4">
          <div className="contact-form-text lg:w-[47%] md:w-[50%] w-[100%] px-5">
            <span className="py-[9px] px-[22px]  self-center  inline-block text-primary bg-[#e2f0dc] rounded text-base font-[600]">
              Contact with us
            </span>
            <p className=" mt-5 lg:text-5xl md:text-4xl sm:text-3xl text-2xl leading-[58px]  font-bold">
              Have questions? Feel free to write us
            </p>
            <p className=" text-[#82828a] leading-[29px] pt-[20px]">
              Man braid hell of edison bulb four brunch subway tile authentic,
              chillwave put a bird on church-key ramps heirloom. Set
              perspiciatis unde omnis estenatus voluptatem aperiae.
            </p>
            <div className="contact-icon-container flex gap-4 mt-8">
              <span className=" contact-social-icon">
                <FaTwitter />
              </span>
              <span className=" contact-social-icon">
                <FaFacebook />
              </span>
              <span className=" contact-social-icon">
                <FaInstagram />
              </span>
              <span className=" contact-social-icon">
                <IoLogoLinkedin />
              </span>
            </div>
          </div>
          <div className="contact-form md:w-[45%] w-[100%] flex flex-col gap-2 ">
            <div className=" flex gap-4  ">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="flex gap-4">
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea
              name=""
              className=" "
              rows={10}
              cols={40}
              id=""
              placeholder="Write a Message"
            ></textarea>
            <div className="">
              <button className="mt-3 py-4 px-8 bg-primary hover:bg-[#80c563] hover:shadow-xl ease-in-out duration-300 text-white rounded-lg font-bold">
                Send a Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Explore_more />
        <div className="map  ">
          <iframe
            className=" w-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317893.1993960357!2d-0.119554!3d51.503297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1686317170961!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width={600}
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
