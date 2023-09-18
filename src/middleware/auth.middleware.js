const tokenService = require('../services/token.service');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = req.headers.Authorization.split(' ')[1];
    console.log(req.headers);
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const data = tokenService.validateAccess(token);

    req.user = data;

    next();
  } catch (e) {
    res.status(401).json({ message: e });
  }
};
