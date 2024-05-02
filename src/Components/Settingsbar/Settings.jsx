import { useState } from "react"
import { IoCloseOutline } from "react-icons/io5";



const Settings = ({CloseSettingsBar}) => {

    const [toggleDark, setToggleDark] = useState(true)

    const toggleBtn = toggleDark ? 'flex justify-start p-[2px] bg-[#ECEEF0] w-10 rounded-2xl transition duration-500' : 'flex justify-end p-[2px] bg-[#234036] w-10 rounded-2xl transition duration-500';
    const toggleCircle = toggleDark ? 'w-4 h-4 rounded-full bg-white transition duration-200 outline-none' : 'w-4 h-4 rounded-full bg-primary transition duration-200 outline-none'


  return (
    <div className="4xl:p-5 w-full 4xl:w-[340px] bg-white rounded-2xl">
        <div className="flex items-center justify-between 4xl:mb-0 mb-12 ">
        <h2 className="font-primary text-center text-2xl 4xl:text-xl font-medium">সেটিংস</h2>
        <IoCloseOutline onClick={() => CloseSettingsBar()} className="4xl:hidden block text-2xl"/>
        </div>

        <p className="mt-4 mb-2 font-primary text-md font-medium">আরবি ফন্ট সিলেক্ট করুন</p>

        <select name="font" id="font" className="px-4 py-3 w-full border rounded-lg outline-none mb-4">
            <option className="text-lg bg-[#F8F8F9]" value="KFGQ">KFGQ</option>
            <option className="text-lg bg-[#F8F8F9]" value="Me Quran">Me Quran</option>
            <option className="text-lg bg-[#F8F8F9]" value="Al Mushaf">Al Mushaf</option>
            <option className="text-lg bg-[#F8F8F9]" value="Amiri">Amiri</option>
            <option className="text-lg bg-[#F8F8F9]" value="Arial">Arial</option>
        </select>

        <p className="my-3 font-primary text-md font-medium">এরাবিক ফন্ট সাইজ</p>
        <input className="text-primary bg-primary w-full h-[5px] mb-2" type="range" name="font" min={18} max={40} />
        <p className="font-primary my-3 text-md font-medium">অনুবাদ ফন্ট সাইজ</p>
        <input className="text-primary bg-primary w-full h-[5px] mb-2" type="range" name="font" min={18} max={40} />

        <div className="flex items-center mt-6 justify-between">
            <p className="font-primary text-md font-medium">নাইট মোড</p>
            <button onClick={() => setToggleDark(prevState =>  !prevState)} className={toggleBtn}>
                <div className={toggleCircle}></div>
            </button>
        </div>
    </div>
  )
}

export default Settings