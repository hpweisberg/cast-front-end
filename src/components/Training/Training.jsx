import styles from './Training.module.css'

const Training = (props) => {
  const training = props.training

  return (
    <>
      <div className={styles.container}>


        <div className={styles.left}>
          <p>Institution: </p>
          <p>Focus: </p>
          <p>Teacher: </p>
        </div>
        <div className={styles.right}>
          <p>{training.institution}</p>
          <p>{training.focus}</p>
          <p>{training.teacher}</p>
        </div>
      </div>
    </>
  );
}

export default Training;