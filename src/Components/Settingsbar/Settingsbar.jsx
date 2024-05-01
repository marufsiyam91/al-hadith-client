import Sadaqa from "./Sadaqa"
import Settings from "./Settings"


const Settingsbar = () => {
  return (
    <div className="fixed z-20 top-0 right-0 bg-white 4xl:bg-transparent p-4 w-[350px] 4xl:w-[380px] h-full 4xl:relative flex items-center flex-col gap-6">
        <Settings/>
        <Sadaqa/>
    </div>
  )
}

export default Settingsbar