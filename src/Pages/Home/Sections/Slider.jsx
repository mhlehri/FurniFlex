import slide1 from "/src/assets/slide1.png";
import slide2 from "/src/assets/slide2.png";
import slide3 from "/src/assets/slide3.png";
import { useState } from "react";
const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const nextSlider = () => {
    if (currentSlider === 2) {
      return setCurrentSlider(0);
    }
    return setCurrentSlider(currentSlider + 1);
  };
  return (
    <div className={` w-2/3 relative overflow-hidden`}>
      <div>
        <button
          onClick={nextSlider}
          className="nex absolute right-2 top-1/2 z-50 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 bg-white rounded-full p-3 shadow-md shadow-gray-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.00006 5L16.0001 12L9.00006 19"
              stroke="#B88E2F"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        className="transition ease-out duration-300 flex  gap-6 "
        style={{ transform: `translateX(-${currentSlider * 41}%)` }}
      >
        <div
          className={`${
            currentSlider === 0 ? "h-[580px] " : "h-[480px]"
          } min-w-max relative`}
        >
          <img src={slide1} className="w-full h-full" alt="" />
          <div
            className={`absolute bottom-6 left-6 bg-[#FFFFFFB8] p-14 ${
              currentSlider === 0 ? "block" : "hidden"
            } `}
          >
            <h4 className="flex items-center gap-2">
              01{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="2"
                viewBox="0 0 27 2"
                fill="none"
              >
                <path d="M0 1H27" stroke="#616161" />
              </svg>{" "}
              Bed Room
            </h4>
            <h2 className="text-2xl font-semibold mt-1">Inner Peace</h2>
          </div>
        </div>
        <div
          className={`${
            currentSlider === 1 ? "h-[580px]" : "h-[480px]"
          } min-w-max relative`}
        >
          <img src={slide2} className="w-full h-full" alt="" />
          <div
            className={`absolute bottom-6 left-6 bg-[#FFFFFFB8] p-14 ${
              currentSlider === 1 ? "block" : "hidden"
            } `}
          >
            <h4 className="flex items-center gap-2">
              02{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="2"
                viewBox="0 0 27 2"
                fill="none"
              >
                <path d="M0 1H27" stroke="#616161" />
              </svg>{" "}
              Bed Room
            </h4>
            <h2 className="text-2xl font-semibold mt-1">Inner Peace</h2>
          </div>
        </div>
        <div
          className={`${
            currentSlider === 2 ? "h-[580px]" : "h-[480px]"
          } min-w-max relative`}
        >
          <img src={slide3} className="w-full h-full" alt="" />
          <div
            className={`absolute bottom-6 left-6 bg-[#FFFFFFB8] p-14 ${
              currentSlider === 2 ? "block" : "hidden"
            } `}
          >
            <h4 className="flex items-center gap-2">
              03{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="2"
                viewBox="0 0 27 2"
                fill="none"
              >
                <path d="M0 1H27" stroke="#616161" />
              </svg>{" "}
              Bed Room
            </h4>
            <h2 className="text-2xl font-semibold mt-1">Inner Peace</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
