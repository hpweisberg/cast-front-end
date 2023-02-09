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
    </>
  );
}

export default Experience;