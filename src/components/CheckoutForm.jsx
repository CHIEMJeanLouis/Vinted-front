import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      if (elements == null) {
        return;
      }

      const { error: submitError } = await elements.submit();
      if (submitError) {
        setErrorMessage(submitError.message);
        return;
      }

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/v2/payment",
        {
          title: "Robe H&M 4/6 ans",
          amount: 590,
        }
      );

      const clientSecret = response.data.client_secret;

      const { error, paymentIntent } = await stripe.confirmPayment({
        elements: elements,
        clientSecret: clientSecret,
        confirmParams: {
          return_url: "http://localhost:5173",
        },
        redirect: "if_required",
      });

      if (error) {
        setErrorMessage(error.message);
      }

      if (paymentIntent.status === "succeeded") {
        setCompleted(true);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }

    return completed ? (
      <p> Merci pour votre achat !</p>
    ) : (
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button type="submit" disabled={!stripe || !elements || isLoading}>
          Pay
        </button>
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    );
  };
};
export default CheckoutForm;
