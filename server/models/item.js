import mongoose from "mongoose";
const { Schema } = mongoose;

// create schema
const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    unitsRemaining: {
        type: Number,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    }
});

// create model
const Item = mongoose.model("Item", itemSchema);

export default Item;
