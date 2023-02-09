// import { useParams } from "react-router-dom";
// import TalentCard from "../TalentCard/TalentCard";

const Experience = (props) => {

  return ( 
    <>
    
    <h1>Experience:</h1>

    {props.experience?.map((exp, idx) => (
      <div key={idx}>
        <div className="expName">
        <p>{exp.type}</p>
        <p>{exp.productionTitle}</p>
        </div>
        <div className="expMid">
        <p>{exp.role}</p>
        <p>{exp.producingEntity}</p>
        </div>
        <p>{exp.director}</p>
        <p>{exp.year}</p>
        
      </div>
    ))}
    
    </>
  );
}

export default Experience;