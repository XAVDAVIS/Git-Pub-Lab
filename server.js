const express = require("express")
const app = express()
const drinks = require("./models/drinks")

const port = 3000

app.get("", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get("/drinks/", (req, res) => {
    res.render("drinks_index.ejs", {
        allDrinks: drinks,
    })
})
app.get("/drinks/:indexOfDrinksArray", (req, res ) => {
    res.render("drinks_show.ejs", {
        drink: drinks[req.params.indexOfDrinksArray],
    })
})

app.listen(3000, () => {
    console.log("server.js is running on port 3000")
})