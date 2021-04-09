function checkAllFields(body){

    const keys = Object.keys(body)

    for(let key of keys){
        if(body[key] == "" || body[key] == undefined){
            return {
                user: body,
                error: "Por favor, preencha todos os campos."
            }
        }
    }
}

module.exports = {

    login(req, res, next){

        const {name, password} = req.body

        try {

            const verifyAllFields = checkAllFields(req.body)

            if(verifyAllFields){
                return res.render("home/loginForm", verifyAllFields)
            }

            if(name != "fabricio" || password != "1234"){
                return res.render("home/loginForm", {
                    user: req.body,
                    error: "Nome de usuário ou senha inválidos, tente novamente."
                })
            }  

            req.session.user  = {
                name,
                password
            }

            next()
            
        } catch (error) {
            console.error(error)
        }
    }
}