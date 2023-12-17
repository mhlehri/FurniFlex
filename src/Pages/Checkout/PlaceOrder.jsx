const PlaceOrder = () => {
  return (
    <div className="w-1/3 space-y-3 p-5">
      <h1 className="text-2xl flex justify-between">
        Product
        <span>Subtotal</span>
      </h1>
      <p className="flex justify-between">
        Asgaard sofa × 1<span>Subtotal</span>
      </p>
      <p className="flex justify-between">
        Subtotal<span>Rs. 250,000.00</span>
      </p>
      <p className="flex justify-between pb-5 border-b-2">
        Total
        <span className="text-[#B88E2F] text-2xl font-bold">
          Rs. 250,000.00
        </span>
      </p>
      <input type="radio" className="mr-3" checked name="" id="cod" />
      <label htmlFor="cod">Cash On Delivery</label>
      <p>
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our privacy policy.
      </p>
      <button
        to="/checkout"
        className="px-12 py-3 hover:scale-95 duration-300 rounded-xl border-2"
      >
        Place Order
      </button>
    </div>
  );
};

export default PlaceOrder;
