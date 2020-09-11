const mongoose = require("mongoose"),
    MyQuote = require("./models/myquotes");

let data = [
    { id: 1, quotes: "The secret of getting ahead is getting started - Mark Twain" },
    { id: 2, quotes: "Only the paranoid survive - Andy Grove" },
    { id: 3, quotes: "It’s hard to beat a person who never gives up - Babe Ruth" },
    { id: 4, quotes: "If people are doubting how far you can go, go so far that you can’t hear them anymore - Michele Ruiz" },
    { id: 5, quotes: "Everything you can imagine is real ― Pablo Picasso" },
    { id: 6, quotes: "Do one thing every day that scares you ― Eleanor Roosevelt" },
    { id: 7, quotes: "Do what you feel in your heart to be right, for you’ll be criticized anyway ― Eleanor Roosevelt" },
    { id: 8, quotes: "Happiness is not something ready made. It comes from your own actions ― Dalai Lama XIV" },
    { id: 9, quotes: "Whatever you are, be a good one ― Abraham Lincoln" },
    { id: 10, quotes: "Impossible is just an opinion – Paulo Coelho" },
    { id: 11, quotes: "Your passion is waiting for your courage to catch up – Isabelle Lafleche" },
    { id: 12, quotes: "Don’t be afraid to give up the good to go for the great – John D. Rockefeller" }
]

function seedDb() {
    MyQuote.deleteMany({}, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Collection truncated");

        //Add new data
        data.forEach((seed) => {
            MyQuote.create(seed, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
        console.log("Added documents");
    });
}

module.exports = seedDb;