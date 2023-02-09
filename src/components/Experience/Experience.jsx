import { useParams } from "react-router-dom";

const Experience = (props) => {
  const experience = props.experience

  return ( 
    <>
      <h1>Experience Component</h1>
      <p>Production Title: {experience.productionTitle}</p>
      <p>Role: {experience.role}</p>
      <p>Type: {experience.type}</p>
      <p>Producing Entity: {experience.producingEntity}</p>
      <p>Director: {experience.director}</p>
      <p>Year: {experience.year}</p>
      <form onSubmit={()=> props.handleDeleteExperience(props.talentId, experience._id)}>
        <button type='submit'>Delete</button>
      </form>
    </>
  );
}

export default Experience;