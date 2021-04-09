module.exports = {

    onlyUser(req, res, next){

        try {

            if(!req.session.user){
                req.session.error = "Por favor, faça o login antes de continuar."

                return res.redirect("/")
            }

            next()
            
        } catch (error) {
            console.error(error)
        }
    }
}