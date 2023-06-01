import React, {useState} from "react";
import styles from "./Favorites.module.css";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../Card/Card";

const Favorites = (props) => {
    const { myFavorites } = props;
    const dispatch = useDispatch()

    const [aux, setAux] = useState(false)

    let handleOrder = (e) =>{
        let valorOrden = e.target.value
        dispatch(orderCards(valorOrden))
        setAux(!aux)
    }

    let handleFilter = (e) =>{
        let valorFilter = e.target.value
        dispatch(filterCards(valorFilter))
    }

    return (
        <>
        <div className={styles.contenedorFiltros} >
            <select onChange={handleOrder} name="" id="">
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter} name="" id="">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
                <option value='gender'>All Characters</option>
            </select>
        </div>
        <div className={styles.contenedorFavoritos} >
            {myFavorites.map((char) => {
                return (
                    <Card
                        key={char.id}
                        id={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin}
                        image={char.image}
                    />
                );
            })}
        </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

export default connect(mapStateToProps, null)(Favorites);