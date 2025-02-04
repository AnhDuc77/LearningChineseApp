import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Lecture from "../../assets/Lecture/Lecture.jpg";
import "aos/dist/aos.css";
import AOS from "aos";

const TeachersData = [
  {
    id: 1,
    img: Lecture,
    name: "Hoàng Bình",
    description:
      "Giảng viên có hơn 10 năm kinh nghiệm trong giảng dạy tiếng Trung.",
  },
  {
    id: 2,
    img: Lecture,
    name: "Tô Anh",
    description: "Chuyên gia luyện thi HSK với tỷ lệ đỗ trên 90%.",
  },
  {
    id: 3,
    img: Lecture,
    name: "Như Quỳnh",
    description: "Thạc sĩ ngôn ngữ học, giảng viên tại đại học danh tiếng.",
  },
  {
    id: 4,
    img: Lecture,
    name: "Duy Anh",
    description: "Tác giả sách học tiếng Trung bán chạy tại Việt Nam.",
  },
  {
    id: 5,
    img: Lecture,
    name: "Thanh Ninh",
    description: "Giảng viên chuyên về giao tiếp và phát âm tiếng Trung.",
  },
];

const Teachers = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Số giảng viên hiển thị trên mỗi trang

  const totalPages = Math.ceil(TeachersData.length / itemsPerPage);

  useEffect(() => {
    AOS.init({
      duration: 800, // Thời gian hiệu ứng (ms)
      once: true, // Hiệu ứng chỉ chạy một lần
    });
  }, []);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  return (
    <div
      className="mt-14 mb-12"
      data-aos="fade-up" // Hiệu ứng xuất hiện khi cuộn
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Đội Ngũ Giảng Viên</p>
          <h1 className="text-3xl font-bold">Giảng Viên Hàng Đầu</h1>
          <p className="text-xs text-gray-400">
            Chúng tôi tự hào với đội ngũ giảng viên chất lượng cao, giàu kinh
            nghiệm và tận tâm với học viên.
          </p>
        </div>

        {/* Giảng viên */}
        <div className="relative flex items-center justify-center overflow-hidden">
          {/* Nút trái */}
          <button
            onClick={prevPage}
            className="absolute left-0 z-10 bg-primary text-white p-2 rounded-full shadow-md hover:scale-105 transition duration-300"
          >
            <FaChevronLeft />
          </button>

          {/* Danh sách giảng viên */}
          <div className="flex justify-center w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
                width: `${totalPages * 100}%`,
              }}
            >
              {TeachersData.map((teacher, index) => (
                <div
                  key={teacher.id}
                  className={`w-[calc(100%/${itemsPerPage})] flex-shrink-0 p-6`}
                >
                  {/* Form bao quanh */}
                  <div
                    className={`${
                      index % 2 === 1 ? "bg-orange-300" : "bg-orange-100"
                    } hover:bg-orange-300 rounded-lg shadow-lg p-4 flex flex-col items-center text-center transition duration-300`}
                  >
                    <div className="relative overflow-hidden rounded-md">
                      <img
                        src={teacher.img}
                        alt={teacher.name}
                        className="h-[250px] w-[200px] object-cover rounded-md mb-4 transform transition duration-300 hover:scale-105"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{teacher.name}</h3>
                    <p className="text-sm text-gray-600">
                      {teacher.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nút phải */}
          <button
            onClick={nextPage}
            className="absolute right-0 z-10 bg-primary text-white p-2 rounded-full shadow-md hover:scale-105 transition duration-300"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
