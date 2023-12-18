const Banner = () => {
  return (
    <div className="bg-[url('/assets/BannerBackground.png')] bg-fixed bg-cover w-full h-[50vh] md:h-[500px] lg:h-[700px] flex justify-end">
      <div className=" md:w-[70%] lg:w-[35%] rounded-xl p-9 space-y-1 lg:space-y-3 bg-[#FFF3E3] self-center mr-10">
        <p className="font-semibold">New Arrival</p>
        <h1 className="text-xl lg:text-5xl font-bold lg:leading-[65px] text-[#B88E2F]">
          Discover Our New Collection
        </h1>
        <p className="text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="font-bold py-4 lg:py-6 hover:scale-95 duration-300 px-6 lg:px-16 text-white bg-[#B88E2F]">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
