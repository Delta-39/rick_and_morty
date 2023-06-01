import styles from './SearchBar.module.css'
import React, { useState } from 'react';

export default function SearchBar(props) {
   const [id, setId] = useState('')

   let handleChange = (event) =>{
      setId(event.target.value)
   }

   return (
      <div className={styles.container}>
         <input className={styles.input} onChange={handleChange} value={id} type='search' />
         <button className={styles.button} onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}
