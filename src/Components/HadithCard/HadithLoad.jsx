import { BiSolidRightArrow } from "react-icons/bi";
import { PiBooksFill } from "react-icons/pi";

const HadithLoad = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4 overflow-y-scroll hadithcard_scrollar">
      <div className="w-full h-auto bg-white rounded-xl hidden 2xl:flex flex-col gap-4 ">
        <div className="flex flex-col gap-2 ">
          <div className="hidden 2xl:flex items-center gap-1 p-4 pb-0">
            <PiBooksFill className="text-xl text-gray-400" />

            <BiSolidRightArrow className="text-sm text-gray-300" />
            <p className="w-24 h-3 rounded-lg loading bg-slate-100"> </p>
            <BiSolidRightArrow className="text-sm text-gray-300" />
            <div className="w-12 h-3 rounded-lg bg-slate-100 loading"></div>
          </div>
          <div className="hidden 2xl:flex justify-between items-center p-4 pt-6 border-t">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 loading rounded-lg"></div>
              <div className="flex flex-col gap-4">
                <div className="w-[230px] rounded-xl h-6 bg-slate-100 loading"></div>
                <div className="w-24 h-3 rounded-lg bg-slate-100 loading"></div>
              </div>
            </div>
            <div>
              <div className="w-[200px] h-4 rounded-lg bg-slate-100 loading"></div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full h-auto bg-white rounded-xl 2xl:flex flex-col gap-4 p-5">
            <div className="flex gap-4 items-center" >
              <div className="w-10 h-10 bg-slate-100 rounded-lg loading">
                
              </div>
              <div className="w-[60%] h-4 bg-slate-100 rounded-lg loading"></div>
            </div>
      </div>

      <div className="w-full h-auto bg-white p-4 rounded-xl flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-slate-100 rounded-lg loading">

                </div>
              <div className="w-[180px] h-5 rounded-xl bg-slate-100 loading"></div>
            </div>
            <div className="w-[220px] h-3 bg-slate-100 rounded-lg loading">

            </div>
           
            
      </div>

      <div className="flex flex-col gap-4 w-full h-auto bg-white rounded-xl p-4">
            <div className="flex justify-between">
                <div className="flex items-center gap-2 text-[#2B9E76]">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg loading">
                    </div>
                    <div className="w-6 h-4 bg-slate-100 rounded-lg loading"></div>
                </div>
                <div className="block xl:hidden">
                    <div className="w-20 h-4 rounded-lg bg-slate-100"></div>
                </div>
            </div>
            <div className="text-right flex items-end flex-col gap-3 mt-4">
                <div className="w-full h-4 rounded-lg bg-slate-100 loading"></div>
                <div className="w-full h-4 rounded-lg bg-slate-100 loading"></div>
                <div className="w-full h-4 rounded-lg bg-slate-100 loading"></div>
                <div className="w-full h-4 rounded-lg bg-slate-100 loading"></div>
            </div>
            <div className="w-16 h-4 rounded-lg bg-slate-100 mt-4 loading"></div>
            <p className="text-lg font-primary"></p>
            <div className="pt-4 flex justify-around border-t xl:border-t-0 xl:justify-between loading">
                <div className="hidden xl:block w-20 h-4 rounded-lg bg-slate-100 "></div>
                <div className="flex gap-8 text-[22px] text-[#979797] ">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg"></div>
                    <div className="w-8 h-8 bg-slate-100 rounded-lg"></div>
                    <div className="w-8 h-8 bg-slate-100 rounded-lg"></div>
                    <div className="w-8 h-8 bg-slate-100 rounded-lg"></div>
                </div>
            </div>
      </div>

      <div className="flex flex-col gap-4 w-full h-auto bg-white rounded-xl p-4">
            <div className="flex justify-between">
                <div className="flex items-center gap-2 text-[#2B9E76]">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg loading">
                    </div>
                    <div className="w-6 h-4 bg-slate-100 rounded-lg loading"></div>
                </div>
                <div className="block xl:hidden">
                    <div className="w-20 h-4 rounded-lg bg-slate-100"></div>
                </div>
            </div>
            <div className="text-right flex items-end flex-col gap-3 mt-4">
                <div className="w-full h-4 rounded-lg bg-slate-100 loading"></div>
                <div className="w-full h-4 rounded-lg bg-slate-100 loading"></div>
                <div className="w-full h-4 rounded-lg bg-slate-100 loading"></div>
                <div className="w-full h-4 rounded-lg bg-slate-100 loading"></div>
            </div>
            <div className="w-16 h-4 rounded-lg bg-slate-100 mt-4 loading"></div>
            <p className="text-lg font-primary"></p>
            <div className="pt-4 flex justify-around border-t xl:border-t-0 xl:justify-between loading">
                <div className="hidden xl:block w-20 h-4 rounded-lg bg-slate-100 "></div>
                <div className="flex gap-8 text-[22px] text-[#979797] ">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg"></div>
                    <div className="w-8 h-8 bg-slate-100 rounded-lg"></div>
                    <div className="w-8 h-8 bg-slate-100 rounded-lg"></div>
                    <div className="w-8 h-8 bg-slate-100 rounded-lg"></div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default HadithLoad;
