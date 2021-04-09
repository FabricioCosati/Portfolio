const express = require("express")
const nunjucks = require("nunjucks")
const router = require("./app/routes")

const cookieSession = require("cookie-session")

const server = express()

server.use(cookieSession({
    name: "session",
    keys: ["akitongne"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 horas
}))

server.use((req, res, next) =>{
    res.locals.session = req.session
    
    next()
})

server.set("view engine", "njk")

server.use(express.urlencoded({ extended: true }))
server.use(express.static("public"))
server.use(router)

nunjucks.configure("src/app/views", {
    express: server,
    noCache: true,
    autoescape: false,
})

server.listen(5000, function () {
    console.log("Server listening on port 5000")
})