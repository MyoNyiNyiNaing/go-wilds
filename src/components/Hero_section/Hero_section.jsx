import React, { useEffect, useState } from "react";

const Hero_section = ({about}) => {
  const [isFirstPhoto, setIsFirstPhoto] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstPhoto((prevIsFirstPhoto) => !prevIsFirstPhoto);
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, [isFirstPhoto]);

  useEffect(() => {
    if (!isFirstPhoto) {
      const revertTimer = setTimeout(() => {
        setIsFirstPhoto(true);
      }, 8000);

      return () => {
        clearTimeout(revertTimer);
      };
    }
  }, [isFirstPhoto]);

  return (
    <>
      <div className=" md:min-h-[340px] min-h-[200px] relative flex items-center overflow-hidden z-50">
        <div
          className={`background-animation ${
            isFirstPhoto ? "first-photo" : "second-photo"
          }`}
        ></div>
        <div className=" text-white 2xl:w-[68%]  w-[100%]  xl:mx-auto">
          <h1 className=" text-[30px] md:text-[52px] font-[700]">{about}</h1>
          <p className="text-[18px] md:text-[20px] pt-2">
            People Don't Take, Trips Take People
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero_section;
