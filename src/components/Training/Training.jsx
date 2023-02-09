import '../Experience/Experience.css'

const Training = (props) => {
  const training = props.training
  
  return ( 
    <div className='recordCard'>

      <h3>{training.institution}</h3>
      <p>Focus: {training.focus}</p>
      <p>Teacher: {training.teacher}</p>
    </div>
  );
}

export default Training;