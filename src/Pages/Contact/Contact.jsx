import Cover from "../../Shared/Cover/Cover";
import Services from "../../Shared/Services/Services";

const Contact = () => {
  return (
    <div>
      <Cover title="Contact" />

      {/* title & subtitle */}
      <div className="space-y-3 mt-20">
        <h1 className="text-4xl font-semibold text-center">
          Get In Touch With Us
        </h1>
        <p className="text-[#9F9F9F] max-w-2xl text-center mx-auto ">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      {/* contact info & form container */}
      <div className="flex justify-around py-20">
        {/* contact info */}
        <div className="space-y-10 px-5 max-w-xs">
          <div className="flex gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="28"
              viewBox="0 0 22 28"
              fill="none"
            >
              <path
                d="M11 0.120087C8.08369 0.123477 5.28779 1.26659 3.22564 3.29867C1.16348 5.33075 0.00345217 8.08587 1.17029e-05 10.9597C-0.00348119 13.3081 0.774992 15.5929 2.21601 17.4634C2.21601 17.4634 2.51601 17.8527 2.56501 17.9088L11 27.7118L19.439 17.9039C19.483 17.8517 19.784 17.4634 19.784 17.4634L19.785 17.4605C21.2253 15.5907 22.0034 13.3071 22 10.9597C21.9966 8.08587 20.8365 5.33075 18.7744 3.29867C16.7122 1.26659 13.9163 0.123477 11 0.120087ZM11 14.9013C10.2089 14.9013 9.43553 14.6702 8.77773 14.237C8.11993 13.8039 7.60724 13.1883 7.30449 12.4681C7.00174 11.7478 6.92253 10.9553 7.07687 10.1907C7.23121 9.42608 7.61217 8.72374 8.17158 8.17249C8.73099 7.62124 9.44373 7.24583 10.2197 7.09374C10.9956 6.94165 11.7998 7.01971 12.5307 7.31804C13.2616 7.61638 13.8864 8.12159 14.3259 8.7698C14.7654 9.418 15 10.1801 15 10.9597C14.9987 12.0047 14.5768 13.0065 13.827 13.7454C13.0771 14.4843 12.0605 14.9 11 14.9013Z"
                fill="black"
              />
            </svg>
            <div>
              <h3>Address</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="flex gap-4">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.6091 21.425L20.5279 16.805C20.2877 16.5867 19.972 16.4703 19.6476 16.4803C19.3232 16.4903 19.0154 16.626 18.7891 16.8587L15.7979 19.935C15.0779 19.7975 13.6304 19.3462 12.1404 17.86C10.6504 16.3687 10.1991 14.9175 10.0654 14.2025L13.1391 11.21C13.3721 10.9839 13.508 10.676 13.5181 10.3515C13.5281 10.027 13.4115 9.71129 13.1929 9.47124L8.5741 4.39124C8.35541 4.15044 8.05145 4.00437 7.72679 3.98407C7.40214 3.96376 7.08235 4.07082 6.83535 4.28249L4.12285 6.60874C3.90674 6.82564 3.77775 7.11431 3.76035 7.41999C3.7416 7.73249 3.3841 15.135 9.1241 20.8775C14.1316 25.8837 20.4041 26.25 22.1316 26.25C22.3841 26.25 22.5391 26.2425 22.5804 26.24C22.886 26.2229 23.1745 26.0933 23.3904 25.8762L25.7154 23.1625C25.9279 22.9163 26.0357 22.5968 26.0159 22.2721C25.996 21.9475 25.85 21.6435 25.6091 21.425Z"
                fill="black"
              />
            </svg>
            <div>
              <h3>Phone</h3>
              <p>
                Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_63_247)">
                <path
                  d="M23 11.5C23 14.55 21.7884 17.4751 19.6317 19.6317C17.4751 21.7884 14.55 23 11.5 23C8.45001 23 5.52494 21.7884 3.36827 19.6317C1.2116 17.4751 0 14.55 0 11.5C0 8.45001 1.2116 5.52494 3.36827 3.36827C5.52494 1.2116 8.45001 0 11.5 0C14.55 0 17.4751 1.2116 19.6317 3.36827C21.7884 5.52494 23 8.45001 23 11.5ZM11.5 5.03125C11.5 4.84063 11.4243 4.65781 11.2895 4.52302C11.1547 4.38823 10.9719 4.3125 10.7812 4.3125C10.5906 4.3125 10.4078 4.38823 10.273 4.52302C10.1382 4.65781 10.0625 4.84063 10.0625 5.03125V12.9375C10.0625 13.0642 10.0961 13.1886 10.1597 13.2982C10.2233 13.4077 10.3147 13.4985 10.4247 13.5614L15.456 16.4364C15.6211 16.5256 15.8146 16.5467 15.995 16.4952C16.1755 16.4437 16.3287 16.3236 16.4218 16.1607C16.5149 15.9977 16.5406 15.8048 16.4933 15.6232C16.4461 15.4415 16.3297 15.2856 16.169 15.1886L11.5 12.5206V5.03125Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_63_247">
                  <rect width="23" height="23" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div>
              <h3>Working Time</h3>
              <p>
                Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        {/* contact form */}
        <form className="w-1/3">
          <label htmlFor="name">Your name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="abc"
            className="px-5 py-3 my-2 rounded-lg outline-[#B88E2F] border-2 w-full"
          />
          <label htmlFor="email">Your email</label>
          <input
            required
            type="text"
            id="email"
            name="email"
            placeholder="abc@example.com"
            className="px-5 py-3 my-2 rounded-lg outline-[#B88E2F] border-2 w-full"
          />
          <label htmlFor="sub">Subject</label>
          <input
            type="text"
            id="sub"
            name="sub"
            placeholder="This is an optional"
            className="px-5 py-3 my-2 rounded-lg outline-[#B88E2F] border-2 w-full"
          />
          <label htmlFor="message">Message</label>
          <textarea
            required
            id="message"
            name="message"
            rows="5"
            placeholder="Hi! i’d like to ask about"
            className="px-5 py-3 my-2 rounded-lg outline-[#B88E2F] border-2 w-full"
          />
          <button className="font-bold lg:py-3 hover:scale-95 duration-300 lg:px-10 text-white bg-[#B88E2F]">
            Submit
          </button>
        </form>
      </div>

      {/* services */}
      <Services />
    </div>
  );
};

export default Contact;
