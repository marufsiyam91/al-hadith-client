import { TbHexagonFilled } from "react-icons/tb";


const BookLoad = () => {
  return (
    <div className="ml-4 mr-[11px] px-2 py-4 rounded-xl flex items-center gap-2 hover:bg-[#EBFCF6] loadingBook">
        <TbHexagonFilled className="w-[56px] h-auto text-[#f1f5f4]"/>
        <div className="w-full flex flex-col gap-4">
            <div className="w-[70%] h-3 rounded-md bg-[#f1f5f4]"></div>
            <div className="w-[40%] h-2 rounded-md bg-[#f1f5f4]"></div>
        </div>
    </div>
  )
}

export default BookLoad