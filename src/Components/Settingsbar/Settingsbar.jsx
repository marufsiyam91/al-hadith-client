import Sadaqa from "./Sadaqa"
import Settings from "./Settings"


const Settingsbar = () => {
  return (
    <div className="4xl:flex flex-col hidden">
        <Settings/>
        <Sadaqa/>
    </div>
  )
}

export default Settingsbar