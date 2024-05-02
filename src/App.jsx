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
        <div className="w-full h-[calc(100vh-120px)] xl:h-[calc(100vh-80px)] bg-[#F2F4F6] xl:rounded-tl-3xl flex  gap-6 justify-between">
          <div className="2xl:block hidden 2xl:m-5 2xl:mr-0">
            <Bookbar />
          </div>
          <div className="w-full mt-5 4xl:mr-0 xl:mr-5 mr-3 2xl:ml-0 xl:ml-5 ml-3">
            <HadithCard />
          </div>
          <div className="4xl:block hidden 4xl:m-5 4xl:ml-0">
            <Settingsbar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
