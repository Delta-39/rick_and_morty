import SearchBar from "./SearchBar/SearchBar";
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import imagen from '../../img/Rick-and-Morty-500x281.png'
import React from 'react'

export default function Nav(props) {
    const {onSearch} = props

    return (
        <div className={styles.container}>
            <SearchBar onSearch={onSearch}/>
            <div className={styles.buttonsContainer}>
                <Link to='/favorites' >
                    <button className={styles.buttonNav}>Favorites</button>
                </Link>
                <Link to='/about'>
                    <button className={styles.buttonNav}>About</button>
                </Link>
                <Link to='/home'>
                    <button className={styles.buttonNav}>Home</button>
                </Link>
            </div>
            <img src={imagen} alt="" />
        </div>
    )
}