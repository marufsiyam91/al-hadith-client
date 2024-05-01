import Bookbar from "./Components/BookbarCompos/Bookbar";
import HadithCard from "./Components/HadithCard/HadithCard";
import Navbar from "./Components/Navbar";
import Settingsbar from "./Components/Settingsbar/Settingsbar";
import Topbar from "./Components/Topbar";

function App() {
  return (
    <main className="font-primary">
      <Topbar />

      <div className="flex">
        <div className="w-[96px]">
          <Navbar />
        </div>
        <div className="w-full h-[calc(100vh-80px)] bg-[#F2F4F6] rounded-tl-3xl p-5 pr-4 flex gap-4 justify-between">
          <div className="2xl:block hidden">
            <Bookbar />
          </div>
          <div className="w-full">
            <HadithCard />
          </div>
          <div className="4xl:block hidden">
            <Settingsbar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
