

const Training = (props) => {
  const training = props.training
  


  return ( 
    <>
      <h1>Training Component</h1> 
      <p>Instituion: {training.institution}</p>
      <p>Focus: {training.focus}</p>
      <p>Teacher: {training.teacher}</p>
      <form onSubmit={()=> props.handleDeleteTraining(props.talentId, training._id)}>
        {/* we need to setup this button to only show if the logged in user is the one that created the record. How do we access the id of the profile logged in? */}
        <button type='submit'>Delete</button>
      </form>
    </>
  );
}
 
export default Training;