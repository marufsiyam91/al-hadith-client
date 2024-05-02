import {  useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import BookLoad from "./BookLoad";
import Books from "./Books";
import Chapters from './Chapters';
import { IoCloseOutline } from "react-icons/io5";


const Bookbar = ({closeBookbar}) => {
  const [isShowMenu, setIsShowMenu] = useState(true);
  const [books, setBooks] = useState([])
  const [chapters, setChapters] =useState([])
  const [loading, setLoading] = useState(false)




  useEffect(() => {
    setLoading(true);
  
    const fetchData = async () => {
      try {
        const [booksResponse, chaptersResponse] = await Promise.all([
          fetch('https://al-hadith-backend-1.onrender.com/api/books'),
          fetch('https://al-hadith-backend-1.onrender.com/api/chapters')
        ]);
  
        if (!booksResponse.ok || !chaptersResponse.ok) {
          throw new Error('Something went wrong while fetching data');
        }
  
        const booksData = await booksResponse.json();
        const chaptersData = await chaptersResponse.json();
  
        setBooks(booksData);
        setChapters(chaptersData);
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);






  const chapterBtn = isShowMenu ? "py-3 font-primary text-lg font-medium text-center bg-primary w-1/2 2xl:rounded-tr-2xl text-white outline-none" : "py-3 font-primary text-lg font-medium text-center bg-white w-1/2 2xl:rounded-tr-2xl outline-none";
  const bookBtn = !isShowMenu ? "py-3 font-primary text-lg font-medium text-center bg-primary w-1/2 2xl:rounded-tl-2xl text-white outline-none" : "py-3 font-primary text-lg font-medium text-center bg-white w-1/2 2xl:rounded-tl-2xl outline-none";

  return (
    <div className="fixed z-10 top-0 left-0 2xl:relative h-full w-full sm:w-96 2xl:w-[350px] bg-white 2xl:rounded-2xl 2xl:flex flex-col BookLoadAnimation">

      <div className="2xl:hidden flex items-center justify-between px-5 py-6">
        <h2 className="text-xl font-medium">ক্যাটাগরি</h2>
        <IoCloseOutline onClick={() => closeBookbar()} className="text-2xl"/>
      </div>

      <div className="flex justify-between 2xl:border-t-0 border-t border-b">
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
            className="bg-[#F2F4F6] outline-none"
            placeholder="Search For Filter"
          />
        </label>
      </div>

    {
      isShowMenu ?

    (<div className="flex flex-col p-4 gap-y-2">
      {
        chapters &&
          chapters.map((chapter) => <Chapters key={chapter.id} chapter={chapter}/>)
      }
    </div>)
    :
    (<div className="flex flex-col p-4 gap-y-2">
    {
      books &&
        books.map((book) => <Books key={book.id} book={book}/>)
    }
    </div>)
    } 

    {
      loading &&
        <div className="flex flex-col gap-2 grow overflow-y-scroll bookbarScroll -mt-4">
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
    }
    






    </div>
  );
};

export default Bookbar;
