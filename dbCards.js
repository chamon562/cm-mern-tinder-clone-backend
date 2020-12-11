// this is going to outline the structure of the Cards inside the database the TinderCards
import mongoose from 'mongoose';

const cardScheme = mongoose.Schema({
    name: String,
    imgUrl: String,
});