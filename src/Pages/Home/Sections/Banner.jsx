const Banner = () => {
  return (
    <div className="bg-[url('src/assets/BannerBackground.png')]  bg-fixed bg-cover w-full h-[85vh] flex justify-end">
      <div className="w-[35%]  rounded-xl  p-9  space-y-3  bg-[#FFF3E3] self-center mr-10">
        <p className="font-semibold">New Arrival</p>
        <h1 className="lg:text-5xl font-bold leading-[65px] text-[#B88E2F]">
          Discover Our New Collection
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="font-bold lg:py-6 hover:scale-95 duration-300 lg:px-16 text-white bg-[#B88E2F]">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
