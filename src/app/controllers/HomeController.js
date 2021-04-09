function hasMessages(req) {

    let { success, error } = req.session

    if(success || error){
            
        const messages = {
            success,
            error
        }

        req.session.success = ""
        req.session.error = ""

        return messages
    }

}

module.exports = {

    home(req, res) {
        try {

            const message = hasMessages(req)

            return res.render("home/index", message)

        } catch (error) {
            console.error(error)
        }
    },

    loginForm(req, res) {

        try {

            const message = hasMessages(req)
            
            return res.render("home/loginForm", message)

        } catch (error) {
            console.error(error)
        }
    },

    login(req, res) {

        try {

            req.session.success = "Login efetuado com sucesso!"

            return res.redirect("/home")

        } catch (error) {
            console.error(error)
        }
    },

    logout(req, res) {
        try {

            req.session = null

            return res.redirect("/")

        } catch (error) {
            console.error(error)
        }
    }
}