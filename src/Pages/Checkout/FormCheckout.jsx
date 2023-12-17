const FormCheckout = () => {
  return (
    <form className="w-1/3 p-4 ">
      <h1 className="font-semibold text-3xl py-4">Billing details</h1>
      <div className="flex gap-4 ">
        <div className="w-1/2">
          <label htmlFor="name">First Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            className="px-5 py-3 my-4 w-full rounded-lg outline-[#B88E2F] border-2 "
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="name">Last Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            className="px-5 py-3 my-4 rounded-lg outline-[#B88E2F] border-2 w-full"
          />
        </div>
      </div>
      <label htmlFor="company">Company Name (Optional)</label>
      <input
        required
        type="text"
        id="company"
        name="company"
        className="px-5 py-3 my-4 rounded-lg outline-[#B88E2F] border-2 w-full"
      />
      <label htmlFor="country">Country / Region</label>
      <input
        type="text"
        id="country"
        name="country"
        className="px-5 py-3 my-4 rounded-lg outline-[#B88E2F] border-2 w-full"
      />
      <label htmlFor="street">Street address</label>
      <input
        type="text"
        id="street"
        name="street"
        className="px-5 py-3 my-4 rounded-lg outline-[#B88E2F] border-2 w-full"
      />
      <label htmlFor="town">Town / City</label>
      <input
        type="text"
        id="town"
        name="town"
        className="px-5 py-3 my-4 rounded-lg outline-[#B88E2F] border-2 w-full"
      />
      <label htmlFor="province">Province</label>
      <input
        type="text"
        id="province"
        name="province"
        className="px-5 py-3 my-4 rounded-lg outline-[#B88E2F] border-2 w-full"
      />
      <label htmlFor="zip">ZIP code</label>
      <input
        type="number"
        id="zip"
        name="zip"
        className="px-5 py-3 my-4 rounded-lg outline-[#B88E2F] border-2 w-full"
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="number"
        id="phone"
        name="phone"
        className="px-5 py-3 my-4 rounded-lg outline-[#B88E2F] border-2 w-full"
      />
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        id="email"
        name="email"
        className="px-5 py-3 my-4 rounded-lg outline-[#B88E2F] border-2 w-full"
      />
    </form>
  );
};

export default FormCheckout;
