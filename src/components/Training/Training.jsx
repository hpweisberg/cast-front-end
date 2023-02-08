const Training = (props) => {
  const training = props.training
  
  return ( 
    <>
      <h1>Training Component</h1> 
      <p>Instituion: {training.institution}</p>
      <p>Focus: {training.focus}</p>
      <p>Teacher{training.Teacher}</p>
    </>
  );
}
 
export default Training;