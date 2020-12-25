const {Workout} = require('../models/workout'); 
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const menu = await Workout.find();
        res.send(menu);
    } catch (error) {
        console.log(error)
        res.send(error);
    }
});

module.exports = router; 