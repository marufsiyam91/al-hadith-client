import { ImBooks } from "react-icons/im";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";




const Topbar = () => {
  return (
    <div className="flex items-center h-16 xl:h-20 justify-between px-4">
      <div className="flex gap-6 items-center">
        <div className="border border-[#1FA471] p-2 rounded-lg">
          <ImBooks className="text-xl xl:text-2xl text-[#1FA471]" />
        </div>
        <div className="xl:block hidden">
          <h2 className="font-primary text-xl font-semibold">হাদিস সমূহ</h2>
          <p className="font-primary text-sm">হাদিস পড়ুন শিখুন এবং জানুন</p>
        </div>
        <div className="xl:hidden eesm:block hidden">
            <h2 className="text-xl sm:text-[1.7rem] font-primary text-primary">আল হাদিস</h2>
        </div>
      </div>

      <div className="flex items-center gap-4 xl:gap-[68px]">
        <label className="border-2 rounded-lg hidden xl:flex gap-3 items-center p-3">
        <IoSearchOutline className="text-lg text-[#5C5C5C]"/>
        <input type="text" placeholder="Search Hadith" className="pr-8 focus:outline-none text-base"/>
        </label>
        <div className="xl:hidden block p-[10px] bg-[#ECEEF0] rounded-lg"><IoSearchOutline className="text-xl  text-[#5C5C5C]"/></div>

        <button className="4xl:flex hidden font-primary bg-primary text-white gap-2 text-base items-center py-3 px-5 rounded-lg font-medium">সাপোর্ট করুন <span  className="text-2xl"><BiSolidDonateHeart /></span></button>
        <div className="block 4xl:hidden bg-primary p-[10px] rounded-lg"><IoSettingsSharp className="text-xl  text-white"/></div>
      </div>
    </div>
  );
};

export default Topbar;
