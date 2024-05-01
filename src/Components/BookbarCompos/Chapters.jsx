import { TbHexagonFilled } from "react-icons/tb";

const Chapters = ({chapter: {title, id, hadis_range}}) => {
  return (
    <div className="flex py-4 px-3 items-center h-[6.25rem] rounded-2xl gap-4 bg-[#EBFCF6]">
      <div className="relative">
        <TbHexagonFilled className="w-[56px] h-auto text-primary"/>
        <p className="absolute top-[50%] left-[50%] text-white -translate-x-1/2 -translate-y-1/2 text-xl">{id}</p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-primary text-md font-medium">{title}</h2>
        <p className="font-primary text-sm">হাদিসের রেঞ্জ - {hadis_range}</p>
      </div>

    </div>
  )
}

export default Chapters