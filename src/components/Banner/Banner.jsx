import React from "react";
import BannerImg from "../../assets/website/banner-reason.jpg";
import { FaAward, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Banner"
              className="max-w-[600px] h-[450px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Lý do nên chọn Tiếng Trung Pinyin Centre
            </h1>
            <div className="flex flex-col gap-4">
              {/* Trung Tâm Tiếng Trung Hàng Đầu */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaAward className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Trung Tâm Tiếng Trung Hàng Đầu</p>
              </div>
              {/* Giảng Viên Chất Lượng, Trình Độ Cao */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiTeacher className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Giảng Viên Chất Lượng, Trình Độ Cao</p>
              </div>
              {/* Ưu Đãi Cho Học Sinh, Sinh Viên */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaUserGraduate className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Ưu Đãi Cho Học Sinh, Sinh Viên</p>
              </div>
              {/* Số Lượng Học Sinh Hơn 1000 */}
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaChalkboardTeacher className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Số Lượng Học Sinh Hơn 1000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
