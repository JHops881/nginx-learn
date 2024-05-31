const express = require("express")

const app = express()

const id = process.env.WORKER_ID

app.get("/", (req, res) => {
    res.send(`I am an endpoint ${id}`)
})

app.listen(80, () => {
    console.log("listening on port 80...")
})