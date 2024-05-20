import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || "default_value";

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-04-10",
});
