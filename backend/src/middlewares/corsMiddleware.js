import cors from "cors";

// Definiere die erlaubten Ursprünge (Domains)
const allowedOrigins = [
    'https://www.tv-melchingen.de',
    'http://localhost:5173' // füge hier deine lokale Entwicklungs-URL hinzu
];

// Konfiguriere die CORS-Optionen
const corsOptions = {
    origin: function (origin, callback) {
        // Wenn der Origin nicht im Array der erlaubten Origins ist und der Origin nicht definiert ist (z.B. bei Tools wie Postman), gib einen Fehler zurück
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Nicht erlaubter Origin'));
        }
    }
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
