import slide1 from "/assets/slide1.png";
import slide2 from "/assets/slide2.png";
import slide3 from "/assets/slide3.png";
import { useState } from "react";
const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliders = [
    { img: slide1, tags: "Bed room" },
    { img: slide2, tags: "Living room" },
    { img: slide3, tags: "Drawing room" },
    { img: slide1, tags: "Drawing room" },
    { img: slide2, tags: "Drawing room" },
    { img: slide3, tags: "Drawing room" },
    { img: slide1, tags: "Drawing room" },
  ];

  const nextSlider = () => {
    if (currentSlider === sliders.length - 1) {
      return setCurrentSlider(0);
    }
    return setCurrentSlider(currentSlider + 1);
  };
  return (
    <div className=" sm:w-2/3 relative overflow-hidden">
      {/* arrow */}
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

      {/* slider container */}
      <div
        className="ease-linear duration-300 flex gap-[2%]"
        style={{ transform: `translateX(-${currentSlider * 52}%)` }}
      >
        {/* sliders */}
        {sliders.map((slide, inx) => (
          <div
            key={inx}
            className={`${
              currentSlider === inx
                ? "h-[310px] md:h-[480px] lg:h-[580px] duration-200"
                : "h-[260px] md:h-[380px] lg:h-[480px]"
            } min-w-[50%] relative`}
          >
            <img src={slide.img} className="w-full h-full" alt="" />
            <div
              className={`absolute bottom-2 md:bottom-6 left-3 md:left-6 bg-[#FFFFFFB8] p-4 ${
                currentSlider === inx
                  ? "opacity-1 duration-700 transition"
                  : "opacity-0"
              }`}
            >
              <h4 className="flex items-center md:gap-2 text-sm ">
                {"0" + (inx + 1)}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden md:block w-7 h-1"
                  viewBox="0 0 27 2"
                  fill="none"
                >
                  <path d="M0 1H27" stroke="#616161" />
                </svg>{" "}
                {slide.tags}
              </h4>
              <h2 className="md:text-2xl font-semibold mt-1">Inner Peace</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
