import { db } from "../drizzle/db.js";
import "dotenv/config";
import { stripe } from "../config/stripeConfig.js";
import { teams } from "../drizzle/schema.js";
import { and, eq } from "drizzle-orm";

// Methode zum Abrufen aller Teams
export const getAllTeams = async (req, res) => {
  try {
    const allTeams = await db.query.teams.findMany({
      where: (teams, { eq }) => eq(teams.paymentSuccessful, true),
    });
    res.status(200).json(allTeams);
  } catch (error) {
    res.status(500).json({ message: "Failed to get teams" });
  }
};

// Methode zum Abrufen aller Teams
export const getOneTeam = async (req, res) => {
  try {

    // Team-ID aus Params extrahieren
    const teamId = req.params.id;

    // Team suchen
    const team = await db.query.teams.findFirst({
      where: (teams, { eq }) => eq(teams.id, teamId),
    });

    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    res.status(200).json(team);
  } catch (error) {
    console.error("Error getting team:", error);
    res.status(500).json({ message: "Failed to get teams" });
  }
};

// Methode zum Erstellen eines neuen Teams
export const createTeam = async (req, res) => {
  try {
    const { teamname, hostName, hostEmail, gender } = req.body;

    if (!teamname || !hostName || !hostEmail || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    // Alle Teams suchen
    const isAvailable = await db.query.teams.findFirst({
      where: (teams, { eq }) => and(eq(teams.teamname, teamname), eq(teams.paymentSuccessful, false)),
    });

    if (isAvailable) {
      return res.status(409).json({ message: "Team name already taken" });
    }

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

    const { gender, teamId, email } = req.body;

    const session = await stripe.checkout.sessions.create({
        line_items: [{
          price: gender === "man" ? "price_1PJdxQCI8cvk3GBMHBGaoN0c" : "price_1PJdxkCI8cvk3GBMVU8jTZXG",
          quantity: 1,
        }],
        metadata: {
          teamId: teamId,
        },
        mode: 'payment',
        ui_mode: 'embedded',
        cancel_url: `https://www.tv-melchingen.de/elfmeterturnier`,
        success_url: `https://www.tv-melchingen.de/elfmeterturnier/team/${teamId}`,
        customer_email: sendEmail,
        locale: "de",
      });
    
      res.send({clientSecret: session.client_secret});
};

export default {
    getAllTeams,
    getOneTeam,
    createTeam,
    createCheckoutSession,
};
