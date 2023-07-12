const users = require('../utils/users');

const logIn = (req,res) =>{
    const {email , password} = req.query
    
    
    const filtradoUsuario = users.find(user => user.email === email && password === user.password)

    if (filtradoUsuario) {
        res.status(200).json({access: true})
    } else {
        res.status(200).json({access: false})
    }
}

module.exports = logIn