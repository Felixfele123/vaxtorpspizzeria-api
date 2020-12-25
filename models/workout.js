const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    workoutID: {
        type: Number,
        required: true,
      },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
      },
    newWeek: {
        type: Boolean,
        required: true,
      }, 
    expanded: {
        type: Boolean,
        required: true,
      }, 
    inProgress: {
        type: Boolean,
        required: true,
      },
    excirceses: {
        type: [Object],
        maxlength: 100
    }
})
const Workout = mongoose.model('Workout', workoutSchema);


exports.Workout = Workout