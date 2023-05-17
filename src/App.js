import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './views/About/About.jsx';
import Detail from './components/Detail/Detail.jsx'
import Error404 from './views/Error404/Error404';
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
            <Route exact path='/home' element={<Cards onClose={onClose} characters={characters}/>}/>
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/detail/:id' element={<Detail/>} />
            <Route path='*' element={<Error404 />} />
         </Routes>
      </div>
   );
}

export default App;
