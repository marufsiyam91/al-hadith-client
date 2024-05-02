import Sadaqa from "./Sadaqa"
import Settings from "./Settings"


const Settingsbar = ({CloseSettingsBar}) => { 


  return (
    <div className="fixed z-20 top-0 right-0 bg-white 4xl:bg-transparent p-6 4xl:p-0 w-full sm:w-7/12 md:w-96 2xl:w-[25%] 4xl:w-[340px] h-full 4xl:relative flex items-center flex-col gap-6 settingbarAppear">
        <Settings CloseSettingsBar={CloseSettingsBar} />
        <Sadaqa/>
    </div>
  )
}

export default Settingsbar