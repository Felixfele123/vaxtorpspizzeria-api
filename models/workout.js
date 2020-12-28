const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    name: String,
    exirceses: Array
})
const Workout = mongoose.model('Workout', workoutSchema);


exports.Workout = Workout