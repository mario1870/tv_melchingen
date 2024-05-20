import { db } from "../drizzle/db.js";
import "dotenv/config";
import { stripe } from "../config/stripeConfig.js";
import { teams } from "../drizzle/schema.js";

// Methode zum Abrufen aller Teams
export const getAllTeams = async (req, res) => {
  try {
    // Alle Teams suchen
    const allTeams = await db.query.teams.findMany();

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
  } catch (error) {
    res.status(500).json({ error: "Interner Serverfehler", error: error });
  }
};

export const createCheckoutSession = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [{
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Anmeldung Elfmeterturnier',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        }],
        metadata: {
          teamId: "teamId",
        },
        mode: 'payment',
        ui_mode: 'embedded',
        return_url: 'https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}'
      });
    
      res.send({clientSecret: session.client_secret});
};

export default {
    getAllTeams,
    createTeam,
    createCheckoutSession,
};
