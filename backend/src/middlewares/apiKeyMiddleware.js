
// apiKeyMiddleware.js

const API_KEYS = ['BLkPz1SnQsg8GMhqGRsN', 'BLkPz1SnQsg8GMhqGRsN'];

const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.header('auth');
  if (API_KEYS.includes(apiKey)) {
    next();
  } else {
    res.status(403).json({ error: 'Unauthorized' });
  }
};

export default apiKeyMiddleware;
