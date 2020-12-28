const {Workout} = require('../models/workout'); 
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const schema = await Workout.find();
        console.log(schema)
        res.send(schema);
    } catch (error) {
        console.log(error)
        res.send(error);
    }
});
router.post('/', async (req, res) => {
    try {
        const schema = new Schema({});
        const result = await schema.save()
        res.send(result)
        console.log(result)
    } catch (error) {
        return res.status(400).send({
            message: error.message
        });
    }
});


module.exports = router; 