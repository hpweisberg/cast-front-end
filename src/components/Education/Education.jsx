import styles from './Education.module.css'

const Education = (props) => {
  const education = props.education

  return (
    <>
      <h1>Education</h1>
      <div className={styles.container}>
        <div className={styles.left}>
          <p><span className={styles.smallText}>Institution: </span></p>
          <p><span className={styles.smallText}>Degree: </span></p>
          <p><span className={styles.smallText}>Major: </span></p>
          <p><span className={styles.smallText}>Graduated: </span></p>
          <p><span className={styles.smallText}>Year: </span></p>
        </div>
        <div className={styles.right}>

          <p>{education.institution}</p>
          <p>{education.degree}</p>
          <p>{education.major}</p>
          <p>{education.graduated ? "Yes" : "No"}</p>
          <p>{education.year}</p>
        </div>
      </div>
    </>
  );
}

export default Education;