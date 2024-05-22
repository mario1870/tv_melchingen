import { db } from "../drizzle/db.js";
import "dotenv/config";
import { stripe } from "../config/stripeConfig.js";
import { teams } from "../drizzle/schema.js";

// Methode zum Abrufen aller Teams
export const getAllTeams = async (req, res) => {
  try {
    // Alle Teams suchen
    const allTeams = await db.query.teams.findMany({
      where: (teams, { eq }) => eq(teams.paymentSuccessful, true),
    });
    res.status(200).json(allTeams);
  } catch (error) {
    res.status(500).json({ message: "Failed to get teams" });
  }
};

// Methode zum Erstellen eines neuen Teams
export const createTeam = async (req, res) => {
  try {
    // Nötige Parameter aus Body auslesen
    const { teamname, hostName, hostEmail, gender } = req.body;

    // Alle Teams suchen
    const isAvailable = await db.query.teams.findMany({
      where: (teams, { eq }) => and(eq(teams.teamname, teamname), eq(teams.paymentSuccessful, false)),
    });

    if(isAvailable.length === 0){
      // Neues Turnier in DB eintragen
      const newTeam = await db
      .insert(teams)
      .values({
        teamname: teamname,
        hostName: hostName,
        hostEmail: hostEmail,
        gender: gender,
      })
      .returning({ insertedId: teams.id });

      const teamId = newTeam[0].insertedId;

      res.status(201).json({ message: "Team erfolgreich erstellt", teamId });
    } else{
      res.status(201).json({ message: "Teamname vergeben" });
    }
  } catch (error) {
    res.status(500).json({ error: "Interner Serverfehler", error: error });
  }
};

export const createCheckoutSession = async (req, res) => {

    const { gender, teamId } = req.body;

    const session = await stripe.checkout.sessions.create({
        line_items: [{
          price_data: {
            currency: 'eur',
            product_data: {
              name: `Anmeldung Elfmeterturnier ${gender === "man" ? "Männer": "Frauen"}`,
            },
            unit_amount: gender === "man" ? 3000 : gender === "woman" ? 2500 : 20000000,
          },
          quantity: 1,
        }],
        metadata: {
          teamId: teamId,
        },
        mode: 'payment',
        ui_mode: 'embedded',
        return_url: 'https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}',
        locale: "de",
      });
    
      res.send({clientSecret: session.client_secret});
};

export default {
    getAllTeams,
    createTeam,
    createCheckoutSession,
};
