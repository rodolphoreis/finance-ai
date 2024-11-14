"use client";
import { PulsatingButtonWrapper } from "@/app/_components/PulsatingButton";
import { createStripeCheckout } from "../_actions/create-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";

const AcquirePlanButton = () => {
  const handleAcquirePlanClick = async () => {
    const { sessionId } = await createStripeCheckout();
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Missing Stripe publishable key");
    }
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );
    if (!stripe) {
      throw new Error("Failed to load Stripe");
    }
    await stripe.redirectToCheckout({ sessionId });
  };

  return (
    <PulsatingButtonWrapper
      className="text-md mt-5 w-full bg-yellow-500 px-5 py-1 font-extrabold text-white"
      pulseColor="#f4f66f50"
      duration="2s"
      onClick={handleAcquirePlanClick}
    >
      Adquirir plano
    </PulsatingButtonWrapper>
  );
};

export default AcquirePlanButton;
