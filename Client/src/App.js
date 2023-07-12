import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './views/About/About.jsx';
import Detail from './components/Detail/Detail.jsx'
import Error404 from './views/Error404/Error404';
import Form from './components/Form/Form'
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';


function App() {
   const [characters, setCharacters] = useState([]);
   const [displayedCharacterIds, setDisplayedCharacterIds] = useState([]);

   let onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            if (displayedCharacterIds.includes(data.id)) {
               window.alert('¡Este personaje ya se muestra en pantalla!');
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
               setDisplayedCharacterIds((oldIds) => [...oldIds, data.id]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   let onClose = (id) => {
      let parseoId = parseInt(id);
      let filtradoCharacters = characters.filter((character) => character.id !== parseoId);
      setCharacters(filtradoCharacters);
      setDisplayedCharacterIds(filtradoCharacters);
   }


   const navigate = useNavigate();
   const [access, setAccess] = useState(false)

   async function login(userData) {
      const {
         email,
         password
      } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
         const response = await axios.get(URL, {
            params: {
               email: email,
               password: password
            }
         });

         const {
            data
         } = response;
         const {
            access
         } = data;
         setAccess(data);
         if (access) {
            navigate('/home');
         }
      } catch (error) {
         console.error(error);
      }
   }

   useEffect(() => {
      !access && navigate('/');
   },[access]);

   const location = useLocation();
   const compararLocations = location.pathname !== '/'

   return (
      <div className='App'>
         {compararLocations ? <Nav onSearch={onSearch} /> : '' }
         <Routes>
            <Route exact path='/favorites' element={<Favorites characters={characters} />}/>
            <Route path='/' element={<Form login={login} />} />
            <Route exact path='/home' element={<Cards onClose={onClose} characters={characters}/>}/>
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/detail/:id' element={<Detail/>} />
            <Route path='*' element={<Error404 />} />
         </Routes>
      </div>
   );
}

export default App;
