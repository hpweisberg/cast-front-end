import { useParams } from "react-router-dom";

const Experience = (props) => {
  const experience = props.experience

  return ( 
    <>
      <h1>Experience Component</h1>
      <p>{experience.productionTitle}</p>
      <p>{experience.role}</p>
      <p>{experience.type}</p>
      <p>{experience.producingEntity}</p>
      <p>{experience.director}</p>
      <p>{experience.year}</p>
      <form onSubmit={()=> props.handleDeleteExperience(props.talentId, experience._id)}>
        <button type='submit'>Delete</button>
      </form>
    </>
  );
}

export default Experience;