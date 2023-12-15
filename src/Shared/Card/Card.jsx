import { Link } from "react-router-dom";
const Card = ({ image, name, price, type, dis }) => {
  return (
    <Link className="card" to="/details">
      <div className="relative cardImgContainer">
        <div className="bg-[#3A3A3A]/80 cardHover absolute top-0 left-0  w-full h-full">
          <div className="bg-red-400 absolute w-12 h-12 rounded-full leading-[48px] text-white text-center font-medium top-3 right-3">
            -30%
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center text-white font-semibold text-center space-y-4">
            <button className="text-[#B88E2F]  bg-white px-10 py-5">
              Add to cart
            </button>
            <div className="icons flex items-center gap-4 flex-wrap">
              <Link className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12 10.6667C11.4747 10.6667 11 10.8734 10.644 11.2047L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.0587 12.2054C10.0211 12.3563 10.0014 12.5112 10 12.6667C10 13.0623 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5145C11.6001 14.6658 12.0022 14.7054 12.3902 14.6283C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0569C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5359 13.44 11.2235 13.1111 11.0038C12.7822 10.784 12.3956 10.6667 12 10.6667Z"
                    fill="white"
                  />
                </svg>
                Share
              </Link>
              <Link className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z"
                    fill="white"
                  />
                </svg>
                Compare
              </Link>
              <Link className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
                    stroke="white"
                    strokeWidth="1.8"
                  />
                </svg>
                Like
              </Link>
            </div>
          </div>
        </div>
        <img src={image} alt="image1" className="w-full h-full" />
      </div>
      <div className="bg-[#F4F5F7] p-4 space-y-2">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="font-medium text-[#898989]">{type}</p>
        <div className="pb-4 flex justify-between">
          <h4 className="text-xl font-semibold">{price}</h4>{" "}
          <span className="line-through text-[#B0B0B0]">{dis}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
