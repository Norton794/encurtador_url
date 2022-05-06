import { URLController } from './controller/URLController'
import { MongoConnection } from './database/MongoConnection'
import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));


const database = new MongoConnection()
database.connect()

const urlController = new URLController()
app.post('/shorten', urlController.shorten)
app.get("/:hash", urlController.redirect)
app.listen(4430, () => {
    console.log("Rodando na 4430")
})