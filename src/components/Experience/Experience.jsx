import styles from './Experience.module.css'

const Experience = (props) => {
  const experience = props.experience

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>Title:</p>
          <p>Role: </p>
          <p>Type: </p>
          <p>Year: </p>
          <p>Produced by: </p>
          <p>Director: </p>
        </div>
        <div className={styles.right}>
          <p>{experience.productionTitle}</p>
          <p>{experience.role}</p>
          <p>{experience.type}</p>
          <p>{experience.year}</p>
          <p>{experience.producingEntity}</p>
          <p>{experience.director}</p>
        </div>
      </div>
    </>
  );
}

export default Experience;