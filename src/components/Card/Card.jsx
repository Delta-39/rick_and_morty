import styles from './Card.module.css'
import{Link} from 'react-router-dom'


export default function Card(props) {
   const {id, name, status, species , gender, origin, image} = props
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer} >
            <img className={styles.imagen} src={image} alt='' />
            <button className={styles.button}  onClick ={()=>props.onClose(id)}>X</button>
            <Link to={`/detail/${id}`}>
               <h2 className={styles.nombre}>{name}</h2>
            </Link>
         </div>
         <div className={styles.statusContainer}>
            <h2 className={styles.texto}><span className={styles.span}>Status</span>: {status}</h2>
            <h2 className={styles.texto}><span className={styles.span}>Species</span>: {species}</h2>
         </div>
         <div className={styles.genderContainer} >
            <h2 className={styles.texto}><span className={styles.span}>Gender</span>:{gender}</h2>
            <h2 className={styles.texto}><span className={styles.span}>Origin</span>:{origin}</h2>
         </div>
      </div>
   );
}
