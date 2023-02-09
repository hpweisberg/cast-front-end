const Training = (props) => {
  return ( 
    <>
    <h1>Training:</h1> 
  
      {props.training?.map((train, idx) => (
        <div key={idx}>
          <div className="trainName">
          <p>{train.institution}</p>
          </div>
          <div className="trainMid">
          <p>{train.focus}</p>
          <p>{train.teacher}</p>
          </div>
          
        </div>
      ))}
      </>
  )
}

export default Training;