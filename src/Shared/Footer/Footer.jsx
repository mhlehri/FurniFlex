const Footer = () => {
  return (
    <div className="border-t-2 px-4 py-4">
      <div className="flex gap-10 lg:flex-row flex-col justify-between items-center w-full h-full">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-center lg:text-left">
            FurniFlex
          </h1>
          <h4>400 University Drive Suite 200 Coral Gables, FL 33134 USA</h4>
        </div>
        <div className="flex justify-evenly flex-wrap gap-10 flex-1 items-start">
          <ul className="space-y-2 lg:space-y-5">
            <li className="text-[#9F9F9F] pb-4">Links</li>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul className="space-y-2 lg:space-y-5">
            <li className="text-[#9F9F9F] pb-4">Help</li>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
          <ul className="space-y-2 lg:space-y-5 mb-5">
            <li className="text-[#9F9F9F] pb-4">Newsletter</li>
            <li className="flex">
              <input
                className="border-b-2 border-black pb-2 text-sm outline-none"
                type="text"
                placeholder="Enter Your Email Address"
              />
              <button className="ml-2 p-2.5 text-sm hover:scale-95 duration-300 bg-[#B88E2F] text-white">
                Subscribe
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-12 border-t-2 mt-4">
        2023 FurniFlex. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
