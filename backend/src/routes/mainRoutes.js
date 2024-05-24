import express from "express";
import mainController from "../controllers/mainController.js";

const router = express.Router();

// Route für das Erstellen eines Teams
router.get("/", mainController.getAllTeams);

// Route für das Erstellen eines Teams
router.get("/:id", mainController.getOneTeam);

// Route für das Erstellen eines Teams
router.post("/", mainController.createTeam);

// Route für das Erstellen eines Teams
router.post("/create-checkout-session", mainController.createCheckoutSession);

// Route für das Erstellen eines Teams
router.get("/retrieve-checkout-session/:stripeSessionId", mainController.retrieveCheckoutSession);

export default router;