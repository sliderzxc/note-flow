require('dotenv').config()

const PORT = process.env.PORT
const express = require('express')
const app = express()

app.listen(PORT, () => {
    console.log(`Server started on url http://localhost:${PORT}`)
})