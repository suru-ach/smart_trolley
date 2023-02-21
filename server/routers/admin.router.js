const router = require('express').Router();

router.route('/api/dropDB').get((req, res) => {
    require('../database/scripts/dropDB');
    res.status(200).json({status: "success", data: null});
});

router.route('/api/createDB').get((req, res) => {
    require('../database/scripts/createDB');
    res.status(200).json({status: "success", data: null});
})

router.route('/api/createTable').get((req, res) => {
    require('../database/scripts/createTable');
    res.status(200).json({status: "success", data: null});
})

module.exports = router;