let myFavorites = []

let postFav = (req,res) =>{
    myFavorites.push(req.body)
    return res.status(200).json(myFavorites)
}

let deleteFav = (req,res) =>{
    let id = Number(req.params.id)
    let elimanarFav = myFavorites.filter(fav => id !== fav.id)

    return res.status(200).json(elimanarFav)
}

module.exports = {postFav, deleteFav}