import React, { useRef, useState } from "react";
import bgPopup from "../../assets/images/bg_popup.png";
import logoPopup from "../../assets/images/icons.png";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { DiGithubAlt } from "react-icons/di";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const SignIn = ({ setShowPage, setConfirmPage }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    inputRef.current?.focus();
  };

  const backGroundStyles = {
    backgroundImage: `url(${bgPopup})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  };

  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[920px] overflow-hidden">
        <div className="grid grid-cols-2">
          {/* Section images */}
          <div style={backGroundStyles}></div>
          {/* Section content */}
          <div className="bg-[#252525] w-full">
            <div className="py-8 flex flex-col justify-center items-center gap-4 text-white relative">
              <div className="absolute top-2 right-2 cursor-pointer">
                <IoClose
                  className="text-2xl font-playfair hover:scale-110 duration-200 transition-all ease-in-out hover:text-secondary"
                  onClick={() => {
                    setShowPage(false);
                    setShowPassword(false);
                    setConfirmPage("");
                  }}
                />
              </div>
              <img src={logoPopup} alt="" className="max-w-[60px]" />
              <h1 className="text-xl font-playfair">Welcome Back, Please login to your account</h1>
              <form className="flex flex-col gap-8 w-full px-14 pt-8">
                {/* Email */}
                <div className="flex flex-col relative group">
                  <label
                    className={`absolute left-2 text-xs transition-all duration-200 ease-in-out ${
                      email ? "top-[-10px] text-gray-200" : "top-1/3"
                    }`}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#504848] h-[42px] rounded-[0.225rem] pl-3 font-playfair outline-none"
                  />
                </div>
                {/* Password */}
                <div className="flex flex-col relative group">
                  <label
                    className={`absolute left-2 text-xs transition-all duration-200 ease-in-out ${
                      password ? "top-[-10px] text-gray-200" : "top-1/3"
                    }`}
                  >
                    Password
                  </label>
                  <input
                    ref={inputRef}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-[#504848] h-[42px] rounded-[0.225rem] pl-3 font-playfair outline-none"
                  />
                  {!showPassword ? (
                    <FaRegEyeSlash
                      className="absolute right-2 top-1/3 cursor-pointer"
                      onClick={handleShowPassword}
                    />
                  ) : (
                    <MdOutlineRemoveRedEye
                      className="absolute right-2 top-1/3 cursor-pointer"
                      onClick={handleShowPassword}
                    />
                  )}
                </div>
              </form>
              <div className="flex justify-center">
                <button className="px-6 py-2 bg-secondary text-black font-playfair font-semibold rounded-sm hover:bg-secondary/80 duration-150 transition">
                  Sign Up
                </button>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex-grow border-t border-gray-50"></div>
                <span className="mx-2 text-white text-xs font-playfair">Or</span>
                <div className="flex-grow border-t border-gray-50"></div>
              </div>
              <div className="flex items-center gap-6">
                <div className="p-2 bg-secondary rounded-md cursor-pointer hover:bg-secondary/90 hover:scale-105 duration-150 transition">
                  <FaFacebook />
                </div>
                <div className="p-2 bg-secondary rounded-md cursor-pointer hover:bg-secondary/90 hover:scale-105 duration-150 transition">
                  <RiInstagramFill />
                </div>
                <div className="p-2 bg-secondary rounded-md cursor-pointer hover:bg-secondary/90 hover:scale-105 duration-150 transition">
                  <DiGithubAlt />
                </div>
                <div className="p-2 bg-secondary rounded-md cursor-pointer hover:bg-secondary/90 hover:scale-105 duration-150 transition">
                  <FaGoogle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
