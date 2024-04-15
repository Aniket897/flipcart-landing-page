import CategoryBanner from "./components/CategoryBanner";
import MainSlider from "./components/MainSlider";
import Navbar from "./components/Navbar";
import SmartPhoneDeals from "./components/SmartPhoneDeals";

const App = () => {
  return (
    <div>
      <Navbar />
      <CategoryBanner />
      <MainSlider />
      <div className="w-[97vw] mx-auto flex items-center gap-4 mt-[10px]">
        <SmartPhoneDeals />
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/5aa445524bb3a205.png?q=20"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default App;
