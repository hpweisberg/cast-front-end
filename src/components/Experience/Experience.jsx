import { useParams } from "react-router-dom";
import './Experience.css'

const Experience = (props) => {
  const experience = props.experience

  return ( 
    <div className='recordCard'>
      <h3>{experience.productionTitle} ({experience.year}, {experience.type})</h3>
      <p>{experience.role}</p>
      <p>Produced by: {experience.producingEntity}</p>
      <p>Director: {experience.director}</p>

    </div>
  );
}

export default Experience;