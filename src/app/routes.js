const express = require("express")
const router = express.Router()

const HomeController = require("./controllers/HomeController")

const HomeValidator = require("./validators/HomeValidator")

const  session = require("./middlewares/session")

router.get("/", HomeController.loginForm)
router.get("/home", session.onlyUser, HomeController.home)
router.post("/login", HomeValidator.login, HomeController.login)
router.post("/logout", HomeController.logout)

module.exports = router