/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ you: 'shall not pass!' });
  try {
    const verified = jwt.verify(
      token,
      process.env.TOKEN_SECRET || 'this a secret'
    );
    req.token = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid Token' });
  }
};
