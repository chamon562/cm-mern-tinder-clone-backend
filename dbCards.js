// this is going to outline the structure of the Cards inside the database the TinderCards
import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
});

// export default mongoose.model('define the collection name')  and pass in cardSchema right after
// sequel called tables and mongoDB called collection is same thing
// in node sequel you have collection> array of documents [documents] > 
// then this can have a collection of its own > [documents]> and so on
export default mongoose.model('cards', cardSchema)
// now pretty much have our database structure built up