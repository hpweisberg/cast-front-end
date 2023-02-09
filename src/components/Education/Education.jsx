import '../Experience/Experience.css'

const Education = (props) => {
  const education = props.education

  return ( 
    <div id="edu" className='recordCard'>

      <h3>{education.institution}</h3> 
      <p>{education.degree} {education.major} {education.graduated && education.year}</p>

    </div>
  );
}

export default Education;