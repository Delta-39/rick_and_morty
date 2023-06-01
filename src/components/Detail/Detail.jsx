import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import styles from './Detail.module.css'

export default function Detail(){
    let params = useParams();
    let id = params.id
    let [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return(
        <div className={styles.detailContainer}>
            <div className={styles.imageContainer}>
                {character.image &&(
                    <img className={styles.imagen} src={character.image} alt={character.name} />
                )}
            </div>
            <div className={styles.propertiesContainer}>
                {character.name &&(
                    <div>
                        <h1 className={styles.title}>{character.name}</h1>
                    </div>
                )}
                {character.status &&(
                    <div className={styles.row}>
                        <p>STATUS: </p>
                        <p>{character.status}</p>
                    </div>
                )}
                {character.species &&(
                    <div className={styles.row} >
                        <p>SPECIE: </p>
                        <p>{character.species}</p>
                    </div>
                )}
                {character.gender &&(
                    <div className={styles.row} >
                        <p>GENDER: </p>
                        <p>{character.gender}</p>
                    </div>
                )}
                {character.origin && character.origin.name &&(
                    <div className={styles.row} >
                        <p>ORIGIN:   </p>
                        <p>{character.origin.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}