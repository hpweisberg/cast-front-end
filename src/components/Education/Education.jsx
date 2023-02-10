import '../Experience/Experience.css'
import styles from './Education.module.css'

const Education = (props) => {
  const education = props.education

  return (
    <>
      <h1>Education </h1>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>Institution: </p>
          <p>Degree: </p>
          <p>Major: </p>
          <p>Graduated: </p>
          <p>Year: {education.year}</p>
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