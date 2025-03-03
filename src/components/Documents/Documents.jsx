import React, { useState } from 'react';

// Dữ liệu mẫu cho tài liệu
const documents = [
  {
    id: 1,
    title: "Tài Liệu từ vựng",
    description: "Hướng dẫn cơ bản về các kỹ năng nghe, nói, đọc, viết trong tiếng Trung.",
    image: "https://thanhmaihsk.edu.vn/wp-content/uploads/2021/09/so-tay-tu-vung-new-hsk2-400x400.png",  // Thay thế bằng link ảnh tài liệu thực tế
    link: "https://firebasestorage.googleapis.com/v0/b/interviewmangement-7da65.appspot.com/o/CV%2F638251590005270000cv.pdf?alt=media&token=0ebabb79-f011-4677-b83f-83671480e660", // Link tài liệu
  },
  {
    id: 2,
    title: "Tài liệu ngữ pháp",
    description: "Khóa học nâng cao giúp cải thiện các kỹ năng nói và viết.",
    image: "https://thanhmaihsk.edu.vn/wp-content/uploads/2021/09/so-tay-tu-vung-new-hsk2-400x400.png",
    link: "https://example.com/document2.pdf",
  },
  {
    id: 3,
    title: "Tài liệu ngữ pháp",
    description: "Khóa học dành cho những người muốn nâng cao khả năng nghe, nói, đọc, viết tiếng Trung.",
    image: "https://thanhmaihsk.edu.vn/wp-content/uploads/2021/09/so-tay-tu-vung-new-hsk2-400x400.png",
    link: "https://example.com/document3.pdf",
  },
  {
    id: 4,
    title: "Tài liệu ngữ pháp",
    description: "Khóa học nâng cao kỹ năng nghe, nói, đọc, viết tiếng Trung.",
    image: "https://thanhmaihsk.edu.vn/wp-content/uploads/2021/09/so-tay-tu-vung-new-hsk2-400x400.png",
    link: "https://example.com/document4.pdf",
  },
  {
    id: 5,
    title: "Tài liệu ngữ pháp",
    description: "Khóa học nâng cao kỹ năng nghe, nói, đọc, viết tiếng Trung.",
    image: "https://thanhmaihsk.edu.vn/wp-content/uploads/2021/09/so-tay-tu-vung-new-hsk2-400x400.png",
    link: "https://example.com/document4.pdf",
  },
  {
    id: 6,
    title: "Tài liệu ngữ pháp",
    description: "Khóa học nâng cao kỹ năng nghe, nói, đọc, viết tiếng Trung.",
    image: "https://thanhmaihsk.edu.vn/wp-content/uploads/2021/09/so-tay-tu-vung-new-hsk2-400x400.png",
    link: "https://example.com/document4.pdf",
  },
  {
    id: 7,
    title: "Khóa Học Tiếng Trung Cao Cấp",
    description: "Khóa học nâng cao kỹ năng nghe, nói, đọc, viết tiếng Trung.",
    image: "https://thanhmaihsk.edu.vn/wp-content/uploads/2021/09/so-tay-tu-vung-new-hsk2-400x400.png",
    link: "https://example.com/document4.pdf",
  },
  {
    id: 8,
    title: "Khóa Học Tiếng Trung Cao Cấp",
    description: "Khóa học nâng cao kỹ năng nghe, nói, đọc, viết tiếng Trung.",
    image: "https://thanhmaihsk.edu.vn/wp-content/uploads/2021/09/so-tay-tu-vung-new-hsk2-400x400.png",
    link: "https://example.com/document4.pdf",
  },
  {
    id: 9,
    title: "Khóa Học Tiếng Trung Cao Cấp",
    description: "Khóa học nâng cao kỹ năng nghe, nói, đọc, viết tiếng Trung.",
    image: "https://thanhmaihsk.edu.vn/wp-content/uploads/2021/09/so-tay-tu-vung-new-hsk2-400x400.png",
    link: "https://example.com/document4.pdf",
  },
  {
    id: 10,
    title: "Khóa Học Tiếng Trung Cao Cấp",
    description: "Khóa học nâng cao kỹ năng nghe, nói, đọc, viết tiếng Trung.",
    image: "https://thanhmaihsk.edu.vn/wp-content/uploads/2021/09/so-tay-tu-vung-new-hsk2-400x400.png",
    link: "https://example.com/document4.pdf",
  },
  // Thêm các tài liệu khác
];

// Component Documents với phân trang
const Documents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const documentsPerPage = 6; // Số lượng tài liệu hiển thị trên mỗi trang

  // Tính toán vị trí tài liệu bắt đầu và kết thúc trên mỗi trang
  const indexOfLastDocument = currentPage * documentsPerPage;
  const indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
  const currentDocuments = documents.slice(indexOfFirstDocument, indexOfLastDocument);

  // Tính số lượng trang
  const totalPages = Math.ceil(documents.length / documentsPerPage);

  // Hàm chuyển trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-8">Thư Viện Tài Liệu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentDocuments.map((document) => (
          <div key={document.id} className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800 transform transition duration-300 hover:scale-105">
            {/* Ảnh tài liệu */}
            <div className="relative overflow-hidden">
              <img
                src={document.image}
                alt={document.title}
                className="w-full h-48 object-cover transform transition duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4">
              {/* Tên tài liệu */}
              <h2 className="text-xl font-semibold text-red-600 mb-2">{document.title}</h2>
              {/* Mô tả tài liệu */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{document.description}</p>
              {/* Nút liên kết đến tài liệu */}
              <a
                href={document.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white py-2 px-4 rounded-lg inline-block text-center w-full transition duration-300 hover:bg-[#ff5733]"
              >
                Tải Tài Liệu
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Phân trang */}
      <div className="flex justify-center mt-8">
        <nav>
          <ul className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 rounded-lg border ${currentPage === index + 1 ? 'bg-red-600 text-white' : 'bg-white text-red-600 border-red-600 hover:bg-red-600 hover:text-white'}`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Documents;
