import React, { useEffect } from "react";
import "./register.css";
import { Link } from "react-router-dom";
const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="register-bg ">
      <div className="  xl:w-[1000px] md:max-w-[1000px] md:w-[98%] 2xl:max-w-[1170px] mx-auto md:py-[100px]  ">
        <div className="reg-form flex md:flex-nowrap sm:w-[98%] mx-auto md:w-full flex-wrap rounded-lg sm:mb-[100px] md:mb-0">
          <div className="w-full md:w-5/12 bg-[#EFF6FE] relative ">
            <span className=" img-reg">
              <img
                src="https://gaviaspreview.com/wp/gowilds/wp-content/themes/gowilds/assets/images/register.png"
                alt=""
              />
            </span>
            <div className=" absolute left-0 bottom-[20px] w-full">
              <div className=" px-[20px] py-[10px] mx-auto text-[#1C231F] bg-white inner-content inline-block">
                <span className=" font-[500]">Already a member</span>
                <Link to={"/login"}>
                  <span className="reg-btn py-[2px] px-[20px] ml-2  rounded-lg text-sm font-bold bg-primary text-white">
                    Login
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12 p-[50px]">
            <h3 className=" text-3xl font-bold mb-[6px] ">
              Create a free account
            </h3>
            <p className=" desc ">
              A few clicks away from creating your account
            </p>
            <form action="" className=" mx-[-15px]">
              <div className="">
                <div className=" py-[10px] px-[15px] md:w-[177px] lg:w-auto">
                  <label htmlFor=" ">Username*</label> <br />
                  <input
                    type="text"
                    className=" register-input w-full sm:w-auto"
                  />
                </div>
              </div>
              <div className=" flex sm:flex-row flex-col">
                <div className=" py-[10px] px-[15px] md:w-[177px] lg:w-auto">
                  <label htmlFor=" ">First name*</label> <br />
                  <input
                    type="text"
                    className=" register-input w-full sm:w-auto"
                  />
                </div>
                <div className=" py-[10px] px-[15px] md:w-[177px] lg:w-auto">
                  <label htmlFor=" ">Last name*</label> <br />
                  <input
                    type="text"
                    className=" register-input w-full sm:w-auto"
                  />
                </div>
              </div>
              <div className=" flex sm:flex-row flex-col">
                <div className=" py-[10px] px-[15px]  md:w-[177px] lg:w-auto">
                  <label htmlFor=" ">Your email*</label> <br />
                  <input
                    type="email"
                    className=" register-input w-full sm:w-auto"
                  />
                </div>
                <div className=" py-[10px] px-[15px] md:w-[177px] lg:w-auto ">
                  <label htmlFor="">Confirm email*</label> <br />
                  <input
                    type="email"
                    className=" register-input w-full sm:w-auto"
                  />
                </div>
              </div>
            </form>
            <p className=" desc my-[10px]">
              A password will be emailed to you.
            </p>
            <button className="reg-btn my-[10px] bg-primary text-white py-[18px] px-8 font-bold rounded-lg">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
