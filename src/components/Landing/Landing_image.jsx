import React from "react";
import "./Landing_image.css";

const Landing_image = ({ about, page }) => {
    // Add About and Page from parent component 
    
  return (
    <>
      <div className=" md:min-h-[340px] min-h-[200px] relative flex items-center justify-center overflow-hidden z-50">
        <div className="landing-img"></div>
        <div className=" text-white text-center">
          <h1 className=" text-[32px] md:text-[44px] font-[700] capitalize">
            {about}
          </h1>
          <p className="text-[14px] md:text-[16px]  capitalize">
            Home / {page}
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing_image;
