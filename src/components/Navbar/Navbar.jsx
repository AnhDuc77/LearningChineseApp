import React from "react";
import Logo from "../../assets/Logo/logoPinyin1.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { Link } from 'react-router-dom';

const Menu = [
  {
    id: 1,
    name: "Trang Chủ",
    link: "/#",
  },
  {
    id: 2,
    name: "Thi Thử",
    link: "/#services",
  },
  {
    id: 3,
    name: "Thư Viện Đề Thi",
    link: "/#",
  },
  {
    id: 3,
    name: "Tin Tức",
    link: "/#",
  },
  {
    id: 3,
    name: "Liên Hệ",
    link: "/#",
  },
  {
    id: 44,
    name: "Admin",
    link: "/admin",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "HSK 9 Cấp",
    link: "/documents",
  },
  {
    id: 2,
    name: "Từ Vựng ",
    link: "/#",
  },
  {
    id: 3,
    name: "Ngữ Pháp",
    link: "/#",
  },
  {
    id: 4,
    name: "Thành Ngữ",
    link: "/#",
  },
  {
    id: 5,
    name: "Kho Tài Liệu, Sách Tiếng trung",
    link: "/#",
  },
  {
    id: 6,
    name: "Học Tiếng Trung Qua Bài Hát Và Phim Ảnh",
    link: "/#",
  },
  {
    id: 7,
    name: "Phương Pháp Học",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <Link 
              to="/"
              className="font-bold text-2xl sm:text-3xl flex items-center"
            >
              <img
                src={Logo}
                alt="Logo"
                className="w-20 object-contain"
              />
              <span>
                PINYIN
                <br />
                CENTRE
              </span>
            </Link>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <a
              href="#about"
              className="text-lg font-semibold text-gray-700 dark:text-gray-200 hidden sm:block hover:text-primary transition-all duration-200"
            >
              Về Pinyin Centre
            </a>

            <span className="text-gray-400 hidden sm:block">|</span>

            <a
              href="#curriculum"
              className="text-lg font-semibold text-gray-700 dark:text-gray-200 hidden sm:block hover:text-primary transition-all duration-200"
            >
              Giáo Trình Học
            </a>

            <span className="text-gray-400 hidden sm:block">|</span>

            <a
              href="#lecturers"
              className="text-lg font-semibold text-gray-700 dark:text-gray-200 hidden sm:block hover:text-primary transition-all duration-200"
            >
              Về Giảng Viên
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl text-blue-600 hover:text-blue-700 transition duration-200 cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl text-pink-500 hover:text-pink-600 transition duration-200 cursor-pointer" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-2xl text-red-500 hover:text-red-600 transition duration-200 cursor-pointer" />
              </a>
            </div>
            {/* <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div> */}

            {/* order button */}
            {/* <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button> */}

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center ">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Thư Viện
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
