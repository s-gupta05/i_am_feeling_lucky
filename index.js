const   express     = require("express"),
        app         = express(),
        mongoose    = require("mongoose");


mongoose.connect("mongodb://localhost/iAmFeelingLucky")
const myQuoteSchema = new mongoose.Schema({
    id: Number,
    quotes: String
});

const MyQuote = mongoose.model("MyQuote", myQuoteSchema);


app.listen(3000, function(){
    console.log("iAmFeelingLucky Server Started")
});