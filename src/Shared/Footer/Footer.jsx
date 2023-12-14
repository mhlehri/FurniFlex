const Footer = () => {
  return (
    <div className="h-[450px] border-t-2">
      <div className="flex gap-10 justify-between items-center w-full h-full">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">FurniFlex</h1>
          <h4>400 University Drive Suite 200 Coral Gables, FL 33134 USA</h4>
        </div>
        <div className="flex justify-evenly flex-1 items-start">
          <ul className="space-y-5">
            <li className="text-[#9F9F9F] pb-4">Links</li>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul className="space-y-5">
            <li className="text-[#9F9F9F] pb-4">Help</li>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
          <ul className="space-y-5">
            <li className="text-[#9F9F9F] pb-4">Newsletter</li>
            <div>
              <input
                className="border-b-2 border-black pb-2 outline-none"
                type="text"
                placeholder="Enter Your Email Address"
              />
              <button className="ml-2  p-2.5 hover:scale-95 duration-300 bg-[#B88E2F] text-white">
                Subscribe
              </button>
            </div>
          </ul>
        </div>
      </div>
      <div className="py-12 border-t-2">
        2023 FurniFlex. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
