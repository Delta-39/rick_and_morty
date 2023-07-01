import { Link } from 'react-router-dom';
import styles from './SearchBar.module.css'
import React, { useState } from 'react';

export default function SearchBar(props) {
   const [id, setId] = useState('')

   const {onSearch} = props

   let handleChange = (event) =>{
      setId(event.target.value)
   }

   let addRandomCharacter = () => {
      const randomId = Math.floor(Math.random() * 826) + 1; 
      onSearch(randomId);
   }

   return (
      <>
      <Link to='/'>
         <button className={styles.buttonLogOut}>LogOut</button>
      </Link>
      <div>
         <button className={styles.buttonRandom} onClick={addRandomCharacter} >Random</button>
      </div>
      <div className={styles.container}>
         <input placeholder='Type your id' className={styles.input} onChange={handleChange} value={id} type='search' />
         <button className={styles.button} onClick={() => onSearch(id)}>Agregar</button>
      </div>
      </>
   );
}
