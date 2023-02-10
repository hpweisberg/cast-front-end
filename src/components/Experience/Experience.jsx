import styles from './Experience.module.css'

const Experience = (props) => {
  const experience = props.experience

  return (
    <div className={styles.container}>
    <div className={styles.recordCard}>
      <h3>{experience.productionTitle} ({experience.year}, {experience.type})</h3>
      <p>{experience.role}</p>
      <p>Produced by: {experience.producingEntity}</p>
      <p>Director: {experience.director}</p>
    </div>
    </div>
  );
}

export default Experience;