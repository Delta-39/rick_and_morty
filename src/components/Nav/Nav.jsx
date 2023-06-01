import SearchBar from "./SearchBar/SearchBar";
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import React from 'react'

export default function Nav(props) {
    return (
        <div className={styles.container}>
            <SearchBar onSearch={props.onSearch}/>
            <div className={styles.buttonsContainer}>
                <Link to='/favorites' >
                    <button className={styles.button}>Favorites</button>
                </Link>
                <Link to='/about'>
                    <button className={styles.button}>About</button>
                </Link>
                <Link to='/home'>
                    <button className={styles.button} >Home</button>
                </Link>
            </div>
        </div>
    )
}