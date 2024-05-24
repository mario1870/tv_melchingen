// tournamentController.js
import "dotenv/config";
import { teams } from "../drizzle/schema.js";
import { eq } from "drizzle-orm";
import { db } from "../drizzle/db.js";
import { stripe } from "../config/stripeConfig.js";
import { sendRegistrationEmail } from "../services/sendRegistrationMailService.js";

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = process.env.ENDPOINT_SECRET || "default_value";

// Methode zum Erstellen eines Stripeaccounts --> Returnt die Account ID
export const paymentCompleted = async (req, res) => {
  const sig = req.headers["stripe-signature"];

  // Überprüfen, ob Signatur vorhanden ist
  if (!sig) {
    res.status(400).send("Stripe Signature not found in headers");
    return;
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.async_payment_succeeded":
      const checkoutSessionAsyncPaymentSucceeded = event.data.object;
      break;
    case "checkout.session.completed":
      const checkoutSessionCompleted = event.data.object;

      if (checkoutSessionCompleted.metadata) {
        const { metadata, customer_details } = event.data.object;

        const { teamId } = metadata;
        const { email } = customer_details;

        try {
          // Team in der Datenbank aktualisieren => paymentSuccessful
          await db
            .update(teams)
            .set({ paymentSuccessful: true })
            .where(eq(teams.id, teamId));

          if (email !== null) {
            await sendRegistrationEmail(email, teamId);
            res.send("Email sent successfully");
          } else {
            res.status(500).send("Error teamId email or name is null");
          }
        } catch (error) {
          console.error("Failed to send email:", error);
          res.status(500).send("Error sending email");
        }
      }
      break;
    case "checkout.session.async_payment_failed":
      const checkoutSessionAsyncPaymentFailed = event.data.object;
      console.log("CH_CPM555");
      break;
    case "checkout.session.expired":
      const checkoutSessionExpired = event.data.object;
      console.log("CH_CPM555");
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send();
};
export default { paymentCompleted };
