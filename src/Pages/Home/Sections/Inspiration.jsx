import Slider from "./Slider";

const Inspiration = () => {
  return (
    <div className="h-[670px] flex items-center overflow-hidden gap-10">
      <div className="bg-[#FCF8F3] w-screen absolute left-0 h-[670px] -z-40"></div>
      <div className=" lg:w-1/3 lg:space-y-5">
        <h1 className="lg:text-[40px] font-bold">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-[#616161]">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button className="font-bold lg:py-3 hover:scale-95 duration-300 lg:px-10 text-white bg-[#B88E2F]">
          Explore More
        </button>
      </div>
      <Slider />
    </div>
  );
};

export default Inspiration;
