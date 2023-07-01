
const users = require('../utils/users')

const logIn = (req,res) =>{
    const {email , password} = req.query
    
    const filtradoUsuario = users.filter(user => user.email === email && password === user.password)

    if (filtradoUsuario > 0) {
        res.status(200).json({access: true})
    } else {
        res.status(200).json({access: false})
    }
}

module.exports = logIn