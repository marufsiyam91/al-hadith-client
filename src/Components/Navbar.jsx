import { IoHomeOutline } from "react-icons/io5";
import { TbBooks } from "react-icons/tb";
import { IoBookOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";






const Navbar = () => {
  return (
    <nav className="w-[96px] h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-7">
            <div className="text-3xl hover:bg-[#F8F8F9] rounded-lg text-[#5B5B5B] p-4 "><IoHomeOutline/></div>
            <div className="text-3xl text-white p-4 bg-[#2B9E76] rounded-lg "><TbBooks/></div>
            <div className="text-3xl hover:bg-[#F8F8F9] rounded-lg text-[#5B5B5B] p-4"><IoBookOutline/></div>
            <div className="text-3xl hover:bg-[#F8F8F9] rounded-lg text-[#5B5B5B] p-4"><IoBookmarkOutline/></div>
            <div className="text-3xl hover:bg-[#F8F8F9] rounded-lg text-[#5B5B5B] p-4"><BiSolidMessageSquareDots/></div>
            <div className="text-3xl hover:bg-[#F8F8F9] rounded-lg text-[#5B5B5B] p-4"><FaRegPaperPlane/></div>
        </div>
    </nav>
  )
}

export default Navbar