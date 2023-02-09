import { useParams } from "react-router-dom";
import styles from './Experince.module.css'

const Experience = (props) => {
  const experience = props.experience

  return ( 
    <>
    <div className={styles.container}>
      <h1>Experience</h1>
      <p><span className={styles.smallText}>Production Title: </span>{experience.productionTitle}</p>
      <p><span className={styles.smallText}>Role: </span>{experience.role}</p>
      <p><span className={styles.smallText}>Type: </span>{experience.type}</p>
      <p><span className={styles.smallText}>Producing Entity: </span>{experience.producingEntity}</p>
      <p><span className={styles.smallText}>Director: </span>{experience.director}</p>
      <p><span className={styles.smallText}>Year: </span>{experience.year}</p>
    </div>
    </>
  );
}

export default Experience;