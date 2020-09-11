const express   = require("express"),
    app         = express(),
    mongoose    = require("mongoose"),
    MyQuote     = require("./models/myquotes"),
    seedDb		= require("./seeds");

//Deprecation warning options
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

mongoose.connect("mongodb://localhost/iAmFeelingLucky");

app.use(express.static(__dirname + "/public"));

seedDb();

app.get("/", (req, res) => {
    res.redirect("/iamfeelinglucky");
});

app.get("/iamfeelinglucky", (req,res) => {
    res.sendFile('i_am_feeling_lucky.html', { root: './public' });
});

app.get("/iamfeelinglucky/data", (req, res) => {
    //generate id randomly
    let randomId = Math.floor(Math.random() * 12) + 1;
    //get quote using generated id
    MyQuote.find({ "id": randomId }, (err, foundQuote) => {
        let quote = "You're off to great places, today is your day!";
        if (!err) {
            quote = foundQuote[0].quotes;
        }
        res.json({ quote: quote });
    });
});


var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("iAmFeelingLucky Server Started")
});