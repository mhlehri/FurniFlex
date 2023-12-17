import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import Services from "../../Shared/Services/Services";
import { Link } from "react-router-dom";

const Cart = () => {
  const [qty, setQty] = useState(1);
  return (
    <div>
      <Cover title="Cart" />
      <div className="flex my-24 justify-between items-start">
        <div className="w-1/2">
          <table className="w-full rounded-lg text-center">
            <thead className="bg-[#F9F1E7] ">
              <tr className="rounded-lg">
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Subtotal</th>
                <th className="p-4 opacity-0">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center gap-3 p-5 whitespace-nowrap">
                  <img
                    className="rounded-lg bg-[#F9F1E7]"
                    src="/assets/details3.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                  <p>Asgaard sofa</p>
                </td>
                <td className="whitespace-nowrap">Rs. 250,000.00</td>
                <td>
                  <span className="py-3 hover:scale-95 duration-300 px-3 border-2 inline-block border-black rounded-lg ">
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
                </td>
                <td className="whitespace-nowrap">Rs. 250,000.00</td>
                <td>
                  <button>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      className="mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.625 7H20.125V4.8125C20.125 3.84727 19.3402 3.0625 18.375 3.0625H9.625C8.65977 3.0625 7.875 3.84727 7.875 4.8125V7H4.375C3.89102 7 3.5 7.39102 3.5 7.875V8.75C3.5 8.87031 3.59844 8.96875 3.71875 8.96875H5.37031L6.0457 23.2695C6.08945 24.202 6.86055 24.9375 7.79297 24.9375H20.207C21.1422 24.9375 21.9105 24.2047 21.9543 23.2695L22.6297 8.96875H24.2812C24.4016 8.96875 24.5 8.87031 24.5 8.75V7.875C24.5 7.39102 24.109 7 23.625 7ZM18.1562 7H9.84375V5.03125H18.1562V7Z"
                        fill="#B88E2F"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-[#F9F1E7] p-8 w-80 text-center space-y-6">
          <h1 className="text-3xl">Cart Totals</h1>
          <div className="">
            <p className="flex justify-between">
              Subtotal: <span>Rs. 250,000.00</span>
            </p>
            <p className="flex justify-between">
              Total:{" "}
              <span className="text-[#B88E2F] text-xl">Rs. 250,000.00</span>
            </p>
          </div>
          <Link
            to="/checkout"
            className="px-6 py-3 inline-block hover:scale-95 duration-300 rounded-xl border-2 border-black"
          >
            Checkout
          </Link>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Cart;
