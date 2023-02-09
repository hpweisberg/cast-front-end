import styles from './Training.module.css'

const Training = (props) => {
  const training = props.training



  return (
    <>
      <h1>Training</h1>
      <div className={styles.container}>
        <div className={styles.left}>
          <p><span className={styles.smallText}>Instituion: </span></p>
          <p><span className={styles.smallText}>Focus: </span></p>
          <p><span className={styles.smallText}>Teacher:  </span></p>
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