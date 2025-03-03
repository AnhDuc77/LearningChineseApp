import React from "react";
import Logo from "../assets/Logo/logoPinyin1.png";
import GG_ICON from "../assets/icon/aa.png";

const colors = {
  primary: "#060606",
  background: "#E0E0E0",
  disabled: "#D9D9D9"
};

const Login = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col justify-center items-center">
        <img
          src={Logo}
          alt="Hình ảnh bị lỗi"
          className="max-w-[25rem] object-contain"
        />
      </div>

      <div className="w-1/2 h-full bg-[rgba(254,169,40,0.4)] flex flex-col p-20 justify-between items-center">
        <h1 className="text-xl max-w-[500px] text-black font-semibold">PinYin Centre</h1>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Log in</h3>
            <p className="text-base mb-2">PinYin Centre xin chào! Hãy đăng nhập để truy cập vào khóa học.</p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm"> Remember Me</p>
            </div>

            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
              Forget password ?
            </p>
          </div>

          <div className="w-full flex flex-col my-4">
            <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Log in
            </button>
            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-slate-400"></div>
              <p className="text-md absolute text-black/80 ">or</p>
            </div>
            <button className="w-full text-black my-2 font-semibold bg-white border-1 border-black/40 rounded-md p-4 text-center flex items-center justify-center">
              <img src={GG_ICON} alt="h-6 mr-2" />
              Sign in with Google
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <p className="text-sm font-normal text-black">
            Don't have an account?
            <span className="font-semibold underline underline-offset-2 cursor-pointer">
              {" "}
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
