import React, { useEffect } from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className=" bg-[#f5f7fa]">
      <div className="py-[100px]">
        <div className="login-form rounded-lg ">
          <div className="p-[50px]">
            <h3 className=" font-bold text-2xl text-center login-h3">Login</h3>
            <form action="">
              <div className=" py-[10px]">
                <label htmlFor="" className=" login-label">
                  Username or email
                </label>{" "}
                <br />
                <input type="text" className=" login-input" />
              </div>
              <div className=" py-[10px]">
                <label htmlFor="" className=" login-label">
                  Password
                </label>{" "}
                <br />
                <input type="password" className=" login-input" />
              </div>
              <div className="py-[10px] flex justify-center">
              <button className="reg-btn my-[10px] bg-primary text-white py-[18px] px-8 font-bold rounded-lg ">
                  Sign In
                </button>
              </div>
              <p className=" text-center desc">Do not have an account <span className=" text-primary"><Link to={'/register'}>Register</Link></span></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
