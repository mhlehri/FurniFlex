import { useState } from "react";
import img1 from "/src/assets/details5.png";
const DetailsUp = () => {
  const [qty, setQty] = useState(1);
  return (
    <div>
      <h5 className="bg-[#F9F1E7] p-8">
        Home &gt; Shop &gt; <span className="font-medium">product</span>
      </h5>
      <div className="flex justify-between gap-28">
        <div className="bg-[#F9F1E7] mt-11 w-[420px] flex items-center h-[500px] rounded-lg">
          <img src={img1} alt="sofa" className=" scale-110" />
        </div>
        <div className="flex-1 space-y-3">
          <h1 className="text-[42px]">Asgaard sofa</h1>
          <h4 className="text-2xl text-zinc-400">Rs. 250,000.00</h4>
          <p className="">
            <span className="rating border-r-2 pr-4">4</span>
            <span className="pl-4">5 Customer Review</span>
          </p>
          <p>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* size */}
          <p>Size</p>
          <div className="space-x-3">
            <label
              htmlFor="L"
              className="px-4 py-3 rounded-lg text-xs inline-block bg-[#F9F1E7]"
            >
              L
              <input
                onClick={(e) => console.log(e.target.value)}
                type="radio"
                hidden
                name="L"
                value="L"
                id="L"
              />
            </label>
            <label
              htmlFor="XL"
              className="px-4 py-3 rounded-lg text-xs inline-block bg-[#F9F1E7]"
            >
              XL
              <input
                onClick={(e) => console.log(e.target.value)}
                type="radio"
                hidden
                name="XL"
                value="XL"
                id="XL"
              />
            </label>
            <label
              htmlFor="XS"
              className="px-4 py-3 rounded-lg text-xs inline-block bg-[#F9F1E7]"
            >
              XS
              <input
                onClick={(e) => console.log(e.target.value)}
                type="radio"
                hidden
                name="XS"
                value="XS"
                id="XS"
              />
            </label>
          </div>

          {/* buttons */}
          <div className="btn space-x-6 text-xl">
            <span className="py-3 px-3 border-2 inline-block border-black rounded-lg ">
              <button
                onClick={() => {
                  if (qty === 1) return;
                  else {
                    setQty(qty - 1);
                    console.log();
                  }
                }}
              >
                -
              </button>
              <input
                disabled
                type="number"
                value={qty}
                max={5}
                name="qty"
                className="w-5 mx-3 outline-none text-center disabled:bg-white"
              />
              <button
                onClick={() => {
                  if (qty === 5) return;
                  else {
                    setQty(qty + 1);
                    console.log();
                  }
                }}
              >
                +
              </button>
            </span>
            <button className="py-3 px-6 border-2 border-black rounded-lg ">
              Add To Cart
            </button>
            <button className="py-3 px-6 border-2 border-black rounded-lg ">
              + Compare
            </button>
          </div>
          <div className="text-[#9F9F9F]">
            <p>SKU : SS001</p>
            <p>Category : Sofas</p>
            <p>Tags : Sofa, Chair, Home, Shop</p>
            <p>Share : </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsUp;
