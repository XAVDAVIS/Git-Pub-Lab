const express = require("express")
const app = express()
const port = 3000

app.get("", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.listen(3000, () => {
    console.log("server.js is running on port 3000")
})