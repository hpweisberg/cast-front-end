const Education = (props) => {
  console.log('inside experience:::', props.experience)
  return ( 
    <>
    <h1>Education:</h1> 
  
      {props.education?.map((edu, idx) => (
        <div key={idx}>
          <div className="eduName">
          <p>{edu.institution}</p>
          </div>
          <div className="eduMid">
          <p>{edu.degree}</p>
          <p>{edu.major}</p>
          <p>{edu.graduated}</p>
          <p>{edu.year}</p>
          </div>
          
        </div>
      ))}
      </>
  )
}

export default Education;