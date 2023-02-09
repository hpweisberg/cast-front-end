const Education = (props) => {
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
          <p>Graduated: {edu.graduated ? "Yes" : "No"}</p>
          </div>
          <form onSubmit={()=> props.handleDeleteEducation(props.talentId, edu._id)}>
        <button type='submit'>Delete</button>
      </form>
        </div>
      ))}
      </>
  
  )
}

export default Education;