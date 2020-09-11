var mongoose	= require("mongoose");

//Create schema
const myQuoteSchema = new mongoose.Schema({
    id: Number,
    quotes: String
});

const MyQuote = mongoose.model("MyQuote", myQuoteSchema);

module.exports = MyQuote;