import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './views/About/About.jsx';
import Detail from './components/Detail/Detail.jsx'
import Error404 from './views/Error404/Error404';
import Form from './components/Form/Form'
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';


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
      let parseoId = parseInt(id);
      let filtradoCharacters = characters.filter((character) => character.id !== parseoId)
      setCharacters(filtradoCharacters)
   }


   const navigate = useNavigate();
   const [access, setAccess] = useState(false)
   const email = ''
   const password = ''

   let login = (userData) =>{
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home')
      }
}
   useEffect(() => {
      !access && navigate('/');
   },[access]);

   const location = useLocation();
   const compararLocations = location.pathname !== '/'

   return (
      <div className='App'>
         {compararLocations ? <Nav onSearch={onSearch} onClose={onClose}/> : '' }
         <Routes>
            <Route exact path='/' element={<Form login={login} />} />
            <Route exact path='/home' element={<Cards onClose={onClose} characters={characters}/>}/>
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/detail/:id' element={<Detail/>} />
            <Route path='*' element={<Error404 />} />
         </Routes>
      </div>
   );
}

export default App;
