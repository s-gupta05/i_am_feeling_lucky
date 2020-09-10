const express   = require("express"),
    app         = express(),
    mongoose    = require("mongoose");

//Deprecation warning options
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);


mongoose.connect("mongodb://localhost/iAmFeelingLucky")
const myQuoteSchema = new mongoose.Schema({
    id: Number,
    quotes: String
});

const MyQuote = mongoose.model("MyQuote", myQuoteSchema);

app.get("/", (req, res) => {
    res.redirect("/iamfeelinglucky");
});

app.get("/iamfeelinglucky", (req, res) => {
    //generate id randomly
    let randomId = Math.floor(Math.random() * 12) + 1;
    //get quote using generated id
    MyQuote.find({ "id": randomId }, (err, foundQuote) => {
        console.log(foundQuote);
        let quote = "You're off to great places, today is your day!";
        if (!err) {
            quote = foundQuote[0].quotes;
        }
        res.send({ quote: quote });
    });
});


var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("iAmFeelingLucky Server Started")
});