import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { addFav, removeFav } from "../../redux/actions"
import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'


export function Card(props) {
   const { id, name, status, species, gender, origin, image, removeFav, addFav, myFavorites } = props

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav)
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer} >
            <img className={styles.imagen} src={image} alt='' />
            <button className={styles.button} onClick={() => props.onClose(id)}>X</button>
            {isFav ? (
               <button className={styles.corazon} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.corazon} onClick={handleFavorite}>🤍</button>)}
            <Link to={`/detail/${id}`}>
               <h2 className={styles.nombre}>{name}</h2>
            </Link>
         </div>
         <div className={styles.statusContainer}>
            <h2 className={styles.texto}><span className={styles.span}>Status</span>: {status}</h2>
            <h2 className={styles.texto}><span className={styles.span}>Species</span>: {species}</h2>
         </div>
         <div className={styles.genderContainer} >
            <h2 className={styles.texto}><span className={styles.span}>Gender</span>:{gender}</h2>
            <h2 className={styles.texto}><span className={styles.span}>Origin</span>:{origin}</h2>
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      },
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);