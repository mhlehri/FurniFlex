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
          className="nex absolute right-2 top-1/3 z-50"
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
        className="transition ease-out duration-300 flex  gap-6"
        style={{ transform: `translateX(-${currentSlider * 40}%)` }}
      >
        <img
          src={slide1}
          className={`${currentSlider === 0 ? "h-[580px]" : "h-[480px]"}`}
          alt=""
        />
        <img
          src={slide2}
          className={`${currentSlider === 1 ? "h-[580px]" : "h-[480px]"}`}
          alt=""
        />
        <img
          src={slide3}
          className={`${currentSlider === 2 ? "h-[580px]" : "h-[480px]"}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Slider;
