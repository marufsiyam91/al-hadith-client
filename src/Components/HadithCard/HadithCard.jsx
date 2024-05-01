import { useEffect, useState } from "react";
import Section from "./Section";
import Hadith from "./Hadith";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiBooksFill } from "react-icons/pi";
import { BiSolidRightArrow } from "react-icons/bi";
import { RiBook3Line } from "react-icons/ri";

const HadithCard = () => {
  const [hadiths, setHadiths] = useState([]);
  const [sections, setSections] = useState([]);
  const [allHadiths, setAllHadiths] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [book, setBook] = useState([]);
  const [chapter, setChapter] = useState([]);

  // Fetch data from APIs
  useEffect(() => {
    const fetchHadiths = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://al-hadith-backend-1.onrender.com/api/hadiths"
        );
        if (!res.ok) {
          throw new Error("Something went wrong while fetching hadiths");
        }
        const fetchedHadiths = await res.json();
        setHadiths(fetchedHadiths);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchSections = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://al-hadith-backend-1.onrender.com/api/sections"
        );
        if (!res.ok) {
          throw new Error("Something went wrong while fetching sections");
        }
        const fetchedSections = await res.json();
        setSections(fetchedSections);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://al-hadith-backend-1.onrender.com/api/books"
        );
        if (!res.ok) {
          throw new Error("Something went wrong while fetching Books");
        }
        const fetchedBooks = await res.json();
        setBook(fetchedBooks);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    const fetchChapters = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://al-hadith-backend-1.onrender.com/api/chapters"
        );
        if (!res.ok) {
          throw new Error("Something went wrong while fetching Books");
        }
        const fetchedChapter = await res.json();
        setChapter(fetchedChapter);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHadiths();
    fetchSections();
    fetchBooks();
    fetchChapters();
  }, []);

  // Combine hadiths and sections into a single array
  useEffect(() => {
    const combined = [];
    const minLength = Math.min(sections.length, hadiths.length);

    for (let i = 0; i < minLength; i++) {
      combined.push(sections[i]);
      combined.push(hadiths[i]);
    }

    setAllHadiths(combined);
  }, [sections, hadiths]);

  console.log(allHadiths)

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
                      <GiHamburgerMenu />
                    </div>
                    <h2 className="text-xl font-primary">সহিহ বুখারী</h2>
                  </div>
                </div>

                <div className="hidden 2xl:flex items-center gap-1 p-4 pb-0">
                  <PiBooksFill className="text-xl text-gray-400" />
                  <BiSolidRightArrow className="text-sm text-gray-300" />
                  <p className="font-primary"> {book.book_name}</p>
                  <BiSolidRightArrow className="text-sm text-gray-300" />
                  <p className="font-primary">{book.id}</p>
                </div>
                <div className="hidden 2xl:flex justify-between items-center p-4 pt-6 border-t">
                  <div className="flex items-center gap-4">
                    <RiBook3Line className="text-[50px] text-[#2B9E76]" />
                    <div>
                      <h3 className="text-2xl font-medium font-primary">{book.title}</h3>
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
              <h2 className="text-2xl">{schapter.title}</h2>
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
