const Footer = () => {
  return (
    <div className="h-[450px] border-t-2 mt-12">
      <div className="flex gap-10 justify-between items-center w-full h-full">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">FurniFlex</h1>
          <h4>400 University Drive Suite 200 Coral Gables, FL 33134 USA</h4>
        </div>
        <div className="flex justify-evenly flex-1 items-center">
          <ul>
            <li className="text-[#9F9F9F]">Links</li>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul>
            <li className="text-[#9F9F9F]">Links</li>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
          <ul>
            <li className="text-[#9F9F9F]">Links</li>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="py-12">2023 FurniFlex. All rights reserved</div>
    </div>
  );
};

export default Footer;
