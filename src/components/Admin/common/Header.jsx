import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, LogOut } from "lucide-react";
import logo from "../../../assets/Logo/logoPinyin1.png";
import DarkMode from "./ThemeToggle";

const Header = ({ title }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="relative bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700 z-[999]">
			<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
				{/* Tiêu đề trang */}
				<h1 className="text-2xl font-semibold text-gray-100">{title}</h1>

				{/* User Profile */}
				<div className="relative">
					{/* Avatar + Tên (Bấm vào để mở menu) */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 
                        hover:bg-gray-700/50 focus:outline-none"
					>
						<img
							src={logo}
							alt="User Avatar"
							className="w-10 h-10 rounded-full border border-gray-500"
						/>
						<span className="text-gray-100 font-medium hidden sm:block">abc</span>
					</button>
					{/* <div>
						<DarkMode/>
					</div> */}

					{/* Dropdown Menu */}
					<AnimatePresence>
						{isMenuOpen && (
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.2 }}
								className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-[9999]"
							>
								{/* Cài đặt */}
								<button className="flex items-center w-full px-4 py-2 text-gray-100 hover:bg-gray-700 transition-all">
									<Settings size={18} className="mr-3" />
									Cài đặt
								</button>

								{/* Đăng xuất */}
								<button
									onClick={() => alert("Đăng xuất thành công!")}
									className="flex items-center w-full px-4 py-2 text-red-400 hover:bg-red-500 hover:text-white transition-all"
								>
									<LogOut size={18} className="mr-3" />
									Đăng xuất
								</button>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</header>
	);
};

export default Header;
