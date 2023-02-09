import '../Experience/Experience.css'

const Education = (props) => {
  const education = props.education

  return ( 
    <div className='recordCard'>

      <h3>{education.institution} <span>{education.degree} {education.major} {education.year}</span></h3>
      {education.graduated && <p>Graduated {education.year}</p>}

    </div>
  );
}

export default Education;