import { BiSolidBookOpen } from "react-icons/bi";
const Section = ({number, title, preface}) => {
    return(
          <div className="w-full h-auto bg-white p-4 rounded-xl flex flex-col gap-4">
            <div className="flex items center gap-2">
              <BiSolidBookOpen className="text-3xl text-[#2B9E76]"/>
              <h4 className="text-lg font-primary">{number}</h4>
            </div>
            <p className="font-primary">{title}</p>
            {
              preface && <p className="border-t pt-4 font-primary">{preface}</p>
            }
          </div>
    )
}

export default Section