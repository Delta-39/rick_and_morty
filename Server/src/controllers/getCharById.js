const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios')


let getCharById = async (req,res) =>{
    const { id } = req.params
    try{
        const response = await axios.get(`${URL}${id}`)
        if (response.data.error) {
            return res.status(404).send('Not Found')
        } else {
            const {id,status,name,species,origin,image,gender} = response.data
            return res.status(200).json({id, status,name,species,origin,image,gender})
        }
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = getCharById