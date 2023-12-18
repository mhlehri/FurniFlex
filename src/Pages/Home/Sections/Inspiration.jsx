import Slider from "./Slider";

const Inspiration = () => {
  return (
    <div className="h-[540px] md:h-[670px] px-5 flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10">
      <div className="bg-[#FCF8F3] w-full absolute left-0 h-[540px] md:h-[670px] -z-40 "></div>
      <div className="w-full lg:w-1/3 text-center lg:text-left space-y-2 lg:space-y-5 py-5">
        <h1 className="text-2xl lg:text-[40px] font-bold">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-[#616161]">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button className="font-bold py-2 lg:py-3 hover:scale-95 duration-300 px-4 lg:px-10 text-white bg-[#B88E2F]">
          Explore More
        </button>
      </div>
      <Slider />
    </div>
  );
};

export default Inspiration;
