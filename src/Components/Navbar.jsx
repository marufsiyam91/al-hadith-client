import { IoHomeOutline } from "react-icons/io5";
import { TbBooks } from "react-icons/tb";
import { IoBookOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";






const Navbar = () => {
  return (
    <nav className="fixed bottom-0 w-full xl:w-[96px] py-2 xl:h-[calc(100vh-80px)] xl:shadow-none shadow-[0_10px_20px_rgba(0,0,0,0.3)]  xl:flex items-center justify-center">
        <div className="flex flex-row xl:flex-col items-center h-full justify-around xl:justify-center gap-4 esm:gap-7">
            <div className="text-2xl xl:text-3xl hover:bg-[#F8F8F9] hover:text-primary rounded-lg text-[#5B5B5B] p-2 xl:p-4 "><IoHomeOutline/></div>
            <div className="text-2xl xl:text-3xl text-white p-2 xl:p-4 bg-[#2B9E76] rounded-lg "><TbBooks/></div>
            <div className="text-2xl xl:text-3xl hover:bg-[#F8F8F9] hover:text-primary rounded-lg text-[#5B5B5B] p-2 xl:p-4"><IoBookOutline/></div>
            <div className="text-2xl xl:text-3xl hover:bg-[#F8F8F9] hover:text-primary rounded-lg text-[#5B5B5B] p-2 xl:p-4"><IoBookmarkOutline/></div>
            <div className="text-2xl xl:text-3xl hover:bg-[#F8F8F9] hover:text-primary rounded-lg text-[#5B5B5B] p-2 xl:p-4 xl:block hidden"><BiSolidMessageSquareDots/></div>
            <div className="text-2xl xl:text-3xl hover:bg-[#F8F8F9] hover:text-primary rounded-lg text-[#5B5B5B] p-2 xl:p-4"><FaRegPaperPlane/></div>
        </div>
    </nav>
  )
}

export default Navbar