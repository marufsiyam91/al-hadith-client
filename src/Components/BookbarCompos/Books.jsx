import { TbHexagonFilled } from "react-icons/tb";


const Books = ({book: {title, number_of_hadis, abvr_code}}) => {

  return (
    <div className="flex py-4 px-3 items-center h-[6.25rem] rounded-2xl gap-4 bg-[#EBFCF6]">
      <div className="relative">
        <TbHexagonFilled className="w-[56px] h-auto text-primary"/>
        <p className="absolute top-[50%] left-[50%] text-white -translate-x-1/2 -translate-y-1/2 text-xl">{abvr_code}</p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-primary text-md font-medium">{title}</h2>
        <p className="font-primary text-sm">সর্বমোট হাদিস - {number_of_hadis}</p>
      </div>

    </div>
  )
}

export default Books