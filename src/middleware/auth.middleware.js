const tokenService = require('../services/token.service');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = req.headers.Authorization.split(' ')[1];
    if (!token) {
      return res.status(402).json({ message: 'Unauthorized2' });
    }

    const data = tokenService.validateAccess(token);

    req.user = data;

    next();
  } catch (e) {
    res.status(403).json({ message: 'Unauthorized3' });
  }
};
