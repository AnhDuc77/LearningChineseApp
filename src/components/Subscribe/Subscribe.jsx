import React from "react";
import Banner from "../../assets/website/banner-subcribe.jpg";

const Subscribe = () => {
  return (
    <div className="container mx-auto my-20 px-4 sm:px-8">
      <div
        data-aos="zoom-in"
        className="grid grid-cols-1 sm:grid-cols-2 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      >
        {/* Hình ảnh bên trái */}
        <div
          className="h-[300px] sm:h-auto"
          style={{
            backgroundImage: `url(${Banner})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        {/* Form bên phải */}
        <div className="flex flex-col justify-center p-6 space-y-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
          <h1 className="text-2xl font-semibold text-center sm:text-left">
            Đăng Ký Để Nhận Tư Vấn Về Khóa Học Ngay Hôm Nay!
          </h1>
          <form className="space-y-4">
            {/* Họ tên */}
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Họ và Tên
              </label>
              <input
                type="text"
                id="name"
                placeholder="Nhập họ và tên"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Nhập email của bạn"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
              />
            </div>

            {/* Số điện thoại */}
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium">
                Số Điện Thoại
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Nhập số điện thoại"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
              />
            </div>

            {/* Nút gửi */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:scale-105 transition-all duration-300"
              >
                Đăng Ký
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
