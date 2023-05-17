import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './views/About/About.jsx';
import Detail from './components/Detail/Detail.jsx'
import { useState } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';

function App() {
   const [characters, setCharacters] = useState([])
   
   let onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   let onClose = (id) => {
      let parseado = parseInt(id);
      let filtrado = characters.filter((character) => character.id !== parseado)
      setCharacters(filtrado)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} onClose={onClose} />
         <Routes>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
      </div>
   );
}

export default App;
