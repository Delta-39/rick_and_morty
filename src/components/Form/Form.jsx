// import styles from './Form.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'
import {validation} from './validation.js'
import styles from './Form.module.css'
import imagen from '../../img/pngwing.com.png'
import imagenTitulo from '../../img/Rick-and-Morty-500x281.png'

export default function Form(props){
    const[userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) =>{
        const propiedad = event.target.name
        const valor = event.target.value
        const updatedUserData = {...userData, [propiedad]: valor}
        validation(updatedUserData, setErrors)
        setUserData(updatedUserData)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.login(userData)
    }

    return(
        <div className={styles.container}>
            <img src={imagenTitulo} alt="Titulo-Rick-and-Morty" />
            <form onSubmit={handleSubmit} className={styles.formulario}>
                <div className={styles.containerImagen} >
                    <img src={imagen} alt='' />
                </div>
                <label htmlFor="">E-mail</label>
                <input onChange={handleChange} value={userData.email} type="text" name='email'/>
                {errors.email && <div className={styles.errorContainer} >
                    <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#28c34c", }} /><span>{errors.email}</span>
                    </div>}
                <label htmlFor="">Password</label>
                <input onChange={handleChange} value={userData.password} type="password" name='password'/>
                {errors.password && <div className={styles.errorContainer} >
                    <FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#28c34c", }} /><span>{errors.password}</span>
                </div> }
                <button>Submit</button>
            </form>
        </div>)
}