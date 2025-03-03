import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Course from "../../assets/courses/course1.jpg";

// Dữ liệu mẫu cho các khóa học
const courses = [
  {
    id: 1,
    image:
      Course,
    title: "KHÓA CƠ BẢN 4 KỸ NĂNG",
    description:
      "Đào tạo bài bản 4 kỹ năng nghe – nói, đọc – viết đạt chuẩn đầu ra theo HSK và HSKK",
  },
  {
    id: 2,
    image:
      "https://thanhmaihsk.edu.vn/wp-content/uploads/2023/04/hoc-truc-tuyen.jpg",
    title: "KHÓA HỌC TRỰC TUYẾN",
    description:
      "Học trực tuyến từ xa trên nền tảng Google Meet, cam kết đầu ra như các lớp Offline",
  },
  {
    id: 3,
    image:
    Course,
    title: "KHÓA LUYỆN THI HSKK",
    description:
      "Học viên thi đạt chuẩn HSKK trung cấp, HSKK cao cấp với số điểm cao 70+ điểm",
  },
  {
    id: 4,
    image:
    Course,
    title: "KHÓA LUYỆN THI HSK",
    description:
      "Lộ trình luyện thi tinh gọn, cấp tốc. Chinh phục HSK sau 1 khóa học",
  },
  {
    id: 5,
    image:
    Course,
    title: "KHÓA DOANH NGHIỆP",
    description:
      "Khóa tiếng Trung với lộ trình học thiết kế riêng theo nhu cầu của Doanh nghiệp",
  },
  {
    id: 6,
    image:
    Course,
    title: "KHÓA HỌC THEO YÊU CẦU",
    description:
      "Khóa học Vip 1 kèm 1, 1 kèm 3 theo yêu cầu có thời gian học linh hoạt",
  },
];

const Courses = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-red-600 mb-8">
        CÁC KHÓA HỌC TIẾNG TRUNG TẠI Pinyin Centre
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            data-aos="fade-up"
            className="bg-white shadow-md rounded-lg overflow-hidden dark:bg-gray-800 transform transition duration-300 hover:scale-105"
          >
            <div className="relative overflow-hidden">
              {/* Hình ảnh khóa học với hiệu ứng hover */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[200px] object-cover transform transition duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-red-600 mb-2">
                {course.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
