import styles from './Error404.module.css'
import errorImage from '../../img/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png'
import {Link} from 'react-router-dom'
import React from 'react'

export default function Error404(){
    return(
        <div className={styles.container}>
            <div className={styles.containerImg}>
                <h1>4</h1>
                <img src={errorImage} alt="Portal-Rick-and-Morty" />
                <h1>4</h1>
            </div>
            <p>wubba lubba dub dub!</p>
            <p>The portal gun warped to an unknown universe.</p>
            <Link to='/home' >
                <button className={styles.button}>Home</button>
            </Link>
        </div>
    )
}