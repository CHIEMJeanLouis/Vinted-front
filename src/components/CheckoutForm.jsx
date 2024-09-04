import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CheckoutForm = ({ title, price }) => {
  // console.log(title, price);
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
          title: title,
          amount: price,
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
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return completed ? (
    <div className="succeed">
      <h2> Merci pour votre achat</h2>
      <Link to="/">Cliquez ici pour revenir sur le site marchand</Link>
    </div>
  ) : (
    <div className="payment-form">
      <h2>Paiment d'un montant de {price / 100}€</h2>
      <div className="payment-detail">
        <h3>Résumé de la commande</h3>
        <p>{title}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button type="submit" disabled={!stripe || !elements || isLoading}>
          Pay
        </button>
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </div>
  );
};

export default CheckoutForm;
