import { useParams } from "react-router-dom";
import styles from './Experince.module.css'

const Experience = (props) => {
  const experience = props.experience

  return (
    <>

      <h1>Experience</h1>
      <div className={styles.container}>
        <div className={styles.left}>
          <p><span className={styles.smallText}>Production Title: </span></p>
          <p><span className={styles.smallText}>Role: </span></p>
          <p><span className={styles.smallText}>Type: </span></p>
          <p><span className={styles.smallText}>Producing Entity: </span></p>
          <p><span className={styles.smallText}>Director: </span></p>
          <p><span className={styles.smallText}>Year: </span></p>
        </div>
        <div className={styles.right}>
          <p>{experience.productionTitle}</p>
          <p>{experience.role}</p>
          <p>{experience.type}</p>
          <p>{experience.producingEntity}</p>
          <p>{experience.director}</p>
          <p>{experience.year}</p>
        </div>
      </div>
    </>
  );
}

export default Experience;