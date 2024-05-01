import { FaRegStar } from "react-icons/fa";
import { BsCopy } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { SlShare } from "react-icons/sl";
import { PiWarningOctagonLight } from "react-icons/pi";
import { BsBoxArrowUpRight } from "react-icons/bs";





const Hadith = ({id, arabic, bangla, rabi, grade}) => {
    return(
        <div className="flex flex-col gap-4 w-full h-auto bg-white rounded-xl p-4">
            <div className="flex justify-between">
                <div className="flex items-center gap-2 text-[#2B9E76]">
                    <FaRegStar className="text-2xl"/>
                    <p className="text-lg font-primary">{id}</p>
                </div>
                <div className="block xl:hidden">
                    <button className="bg-[#2B9E76] text-white  py-1 px-3 rounded-lg font-primary">{grade}</button>
                </div>
            </div>
            <div className="text-right text-2xl font-thin font-primary">{arabic}</div>
            <p className="text-[#2B9E76] text-xl font-primary">{rabi}</p>
            <p className="text-lg font-primary">{bangla}</p>
            <div className="pt-4 flex justify-around border-t xl:border-t-0 xl:justify-between">
                <p className="hidden xl:block font-primary">হাদিসের মান : <button className="bg-[#2B9E76] text-white  py-1 px-3 rounded-lg">{grade}</button></p>
                <div className="flex gap-8 text-[22px] text-[#979797]">
                    <BsCopy />
                    <CiBookmark />
                    <SlShare />
                    <PiWarningOctagonLight />
                    <BsBoxArrowUpRight />
                </div>
            </div>
        </div>
    )
  }

  export default Hadith