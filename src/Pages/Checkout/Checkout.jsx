import FormCheckout from "./FormCheckout";
import PlaceOrder from "./PlaceOrder";

const Checkout = () => {
  return (
    <div className="flex justify-center gap-20 my-20">
      <FormCheckout />
      <PlaceOrder />
    </div>
  );
};

export default Checkout;
