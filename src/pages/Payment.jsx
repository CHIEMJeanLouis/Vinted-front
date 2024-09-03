import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = () => {
  const token = Cookies.get("token");
  const location = useLocation();
  const { title } = location.state;
  const { price } = location.state;
  console.log(title, price);

  const options = {
    mode: "payment",
    amount: price,
    currency: "eur",
  };

  return token ? (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm title={title} price={price} />
    </Elements>
  ) : (
    <Navigate to="/login" />
  );
};

export default Payment;
