const express = require('express');
const router = express.Router();

const { registerUser, loginUser } = require('../controllers/user.controller');
const { fetchEvents, fetchSpecials } = require('../controllers/event.controller');
const { verifyToken } = require('../middlewares/specials.middleware');

 router.post('/register', registerUser);
 router.post('/login', loginUser);
 router.get('/events', fetchEvents);
 router.get('/specials', verifyToken, fetchSpecials);

 module.exports = router;