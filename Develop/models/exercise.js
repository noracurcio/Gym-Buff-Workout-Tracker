

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    day: {
        type: Date
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
})


const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
