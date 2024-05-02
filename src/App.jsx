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
        <div className="xl:w-[96px]">
          <Navbar />
        </div>
        <div className="w-full h-[calc(100vh-120px)] xl:h-[calc(100vh-80px)] bg-[#F2F4F6] xl:rounded-tl-3xl p-3 xl:p-5 pr-4 flex gap-6 justify-between">
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
