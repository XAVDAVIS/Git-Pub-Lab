const express = require("express")
const app = express()
const drinks = require("./models/drinks")
const foods = require("./models/food")
const port = 3000

app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get("/drinks/", (req, res) => {
    res.render("drinks_index.ejs", {
        allDrinks: drinks,
    })
})

app.get("/foods/", (req, res) => {
    res.render("food_index.ejs", {
        allFood: foods,
    })
})

app.get("/drinks/:indexOfDrinksArray", (req, res ) => {
    res.render("drinks_show.ejs", {
    drink: drinks[req.params.indexOfDrinksArray],
    })
})

app.get("/foods/:indexOfFoodsArray", (req, res ) => {
    res.render("food_show.ejs", {
        food: foods[req.params.indexOfFoodsArray],
    })
})

app.listen(3000, () => {
    console.log("server.js is running on port 3000")
})
