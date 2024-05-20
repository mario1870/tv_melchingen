import express from "express";
import webhookController from "../controllers/webhookController.js";

const router = express.Router();

// Route für das Erstellen eines Teams
router.post("/", express.raw({ type: "application/json" }), webhookController.paymentCompleted);


export default router;
