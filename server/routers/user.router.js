const router = require('express').Router();

const {
    signIn,
    signUp,
    signOut
} = require('../controllers/user.controller');

router.route('/api/signin').post(signIn);
router.route('/api/signup').post(signUp);
router.route('/api/signout').get(signOut);

module.exports = router;