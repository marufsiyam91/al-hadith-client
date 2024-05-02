import { useEffect, useState } from "react";
import Section from "./Section";
import Hadith from "./Hadith";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiBooksFill } from "react-icons/pi";
import { BiSolidRightArrow } from "react-icons/bi";
import { RiBook3Line } from "react-icons/ri";
import HadithLoad from "./HadithLoad";
import Bookbar from "../BookbarCompos/Bookbar";

const HadithCard = () => {
  const [data, setData] = useState({
    isLoading: true,
    error: null,
    book: [],
    chapter: [],
    hadiths: [],
    sections: [],
    allHadiths: [],
  });
  
  const [showBookbar, setShowBookbar] = useState(false)
  
  const closeBookbar = () => {
    setShowBookbar(false)
  }

  const { isLoading, error, book, chapter, allHadiths } = data;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hadithsRes, sectionsRes, booksRes, chaptersRes] = await Promise.all([
          fetch("https://al-hadith-backend-1.onrender.com/api/hadiths"),
          fetch("https://al-hadith-backend-1.onrender.com/api/sections"),
          fetch("https://al-hadith-backend-1.onrender.com/api/books"),
          fetch("https://al-hadith-backend-1.onrender.com/api/chapters")
        ]);
        
        if (!hadithsRes.ok || !sectionsRes.ok || !booksRes.ok || !chaptersRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const hadithsData = await hadithsRes.json();
        const sectionsData = await sectionsRes.json();
        const booksData = await booksRes.json();
        const chaptersData = await chaptersRes.json();

        setData({
          isLoading: false,
          error: null,
          book: booksData,
          chapter: chaptersData,
          hadiths: hadithsData,
          sections: sectionsData,
          allHadiths: combineHadithsAndSections(sectionsData, hadithsData)
        });
      } catch (error) {
        setData({ ...data, isLoading: false, error: error.message });
      }
    };

    fetchData();
  }, []);

  const combineHadithsAndSections = (sections, hadiths) => {
    const combined = [];
    const minLength = Math.min(sections.length, hadiths.length);

    for (let i = 0; i < minLength; i++) {
      combined.push(sections[i]);
      combined.push(hadiths[i]);
    }

    return combined;
  };

  



  if (isLoading) {
    return <HadithLoad />;
  }





  return (
    <div className="w-full h-full flex flex-col gap-4 overflow-y-scroll hadithcard_scrollar">
      {book && (
        <div className="w-full h-auto bg-white rounded-xl 2xl:flex flex-col gap-4 ">
          {book &&
            book.map((book) => (
              <div className="flex flex-col gap-2 " key={book.id}>
                <div>
                  <div className="2xl:hidden w-full h-auto p-4 flex items-center gap-4">
                    <div className="text-lg xl:text-xl">
                      <GiHamburgerMenu onClick={() => setShowBookbar(true)}/>
                    </div>
                    <h2 className="text-xl font-primary">সহিহ বুখারী</h2>
                  </div>
                </div>

                <div className="2xl:hidden fixed">
                {
                  showBookbar &&
                  <>
                  <Bookbar closeBookbar={closeBookbar}/>
                  <div className="fixed top-0 left-0 bg-black opacity-70 w-full h-full "></div>
                  </>
                }
                </div>



                <div className="hidden 2xl:flex items-center gap-1 px-4 py-2">
                  <PiBooksFill className="text-2xl text-gray-400" />
                  <BiSolidRightArrow className="text-sm text-gray-300" />
                  <p className="font-primary"> {book.book_name}</p>
                  <BiSolidRightArrow className="text-sm text-gray-300" />
                  <p className="font-primary">{book.id}</p>
                </div>
                <div className="hidden 2xl:flex justify-between items-center p-4 pt-6 border-t">
                  <div className="flex items-center gap-4">
                    <RiBook3Line className="text-[50px] text-[#2B9E76]" />
                    <div>
                      <h3 className="text-2xl font-medium font-primary mb-1">{book.title}</h3>
                      <p className="font-primary">সর্বমোট হাদিস {book.number_of_hadis}</p>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-medium">{book.title_ar}</h2>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
      {chapter && (
        <div className="w-full h-auto bg-white rounded-xl 2xl:flex flex-col gap-4 p-4">
          {chapter.map((schapter) => (
            <div className="flex gap-4 items-center" key={schapter.id}>
              <div className="w-10 h-10 bg-[#2B9E76] flex items-center justify-center text-white rounded-xl">
                {schapter.id}
              </div>
              <h2 className="text-xl">{schapter.title}</h2>
            </div>
          ))}
        </div>
      )}

      {allHadiths.map((item, index) => (
        <>
          {item.title && (
            <Section
              key={index}
              number={item.number}
              title={item.title}
              preface={item.preface}
            />
          )}
          {item.narrator && (
            <Hadith
              key={index}
              id={item.hadith_id}
              arabic={item.ar}
              bangla={item.bn}
              rabi={item.narrator}
              grade={item.grade}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default HadithCard;
