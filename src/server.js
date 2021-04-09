const express = require("express")
const nunjucks = require("nunjucks")
const router = require("./app/routes")

const server = express()

server.set("view engine", "njk")

server.use(express.urlencoded({extended: true}))
server.use(express.static("public"))
server.use(router)

nunjucks.configure("src/app/views", {
    express: server,
    noCache: true,
    autoescape: false,
})

server.listen(5000, function(){
    console.log("Server listening on port 5000")
})