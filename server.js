const express = require("express")
const drinks = require("./models/drinks")
const foods = require("./models/food")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send('Welcome to the GitPub App!')
})

// before ejs file is linked
// app.get("/drinks/", (req, res) => {
//     res.send(drinks)
// })

//drinks link route
app.get("/drinks/", (req, res) => {
    res.render("drinks_index.ejs", {
        allDrinks: drinks,
    })
})

app.get("/food/", (req, res) => {
    res.render("food_index.ejs", {
        allFood: foods,
    })
})

// add showroute

app.get("/drinks/:indexOfDrinksArray", (req, res) => {
    res.render("drinks_show.ejs", {
    drink: drinks[req.params.indexOfDrinksArray],
    })
})

app.get("/food/:indexOfFoodsArray", (req, res) => {
    res.render("food_show.ejs", {
    food: foods[req.params.indexOfFoodsArray],
    })
})

app.listen(3000, () => {
    console.log( `server.js is listening on ${port}`)
})