import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import BookLoad from "./BookLoad";

const Bookbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(true);

  const chapterBtn = isShowMenu ? "py-3 font-primary text-lg font-medium text-center bg-primary w-1/2 rounded-tr-2xl text-white border-b outline-none" : "py-3 font-primary text-lg font-medium text-center bg-white w-1/2 rounded-tr-2xl border-b outline-none";
  const bookBtn = !isShowMenu ? "py-3 font-primary text-lg font-medium text-center bg-primary w-1/2 rounded-tl-2xl text-white border-b outline-none" : "py-3 font-primary text-lg font-medium text-center bg-white w-1/2 rounded-tl-2xl border-b outline-none";

  return (
    <div className="h-full w-[350px] bg-white rounded-2xl flex flex-col">
      <div className="flex justify-between">
        <button onClick={() => setIsShowMenu(false)} className={bookBtn}>
          বই
        </button>
        <button onClick={() => setIsShowMenu(true)} className={chapterBtn}>
          অধ্যায়
        </button>
      </div>

      <div className="px-4 mt-5"> 
        <label className="flex gap-2 items-center bg-[#F2F4F6] rounded-lg p-3">
          <IoIosSearch className="text-xl "/>
          <input
            type="text"
            className="bg-[#F2F4F6]"
            placeholder="Search For Filter"
          />
        </label>
      </div>

    <div className="flex flex-col gap-2 grow overflow-y-scroll bookbarScroll mt-4">
      <BookLoad/>
      <BookLoad/>
      <BookLoad/>
      <BookLoad/>
      <BookLoad/>
      <BookLoad/>
      <BookLoad/>
      <BookLoad/>
      <BookLoad/>
      <BookLoad/>
      <BookLoad/>
      <BookLoad/>
      <BookLoad/>
      <BookLoad/>
      <BookLoad/>
      <BookLoad/>
      <BookLoad/>
      <BookLoad/>
    </div>






    </div>
  );
};

export default Bookbar;
