import rateLimit from 'express-rate-limit';

const rateLimitMiddleware = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 Minuten
  max: 100 // maximal 100 Anfragen pro IP innerhalb von 15 Minuten
});

export default rateLimitMiddleware;