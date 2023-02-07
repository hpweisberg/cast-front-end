import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./TalentDetails.module.css"

// Services
import * as talentService from "../../services/talentService"

// components
import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import Training from "../../components/Training/Training";

const TalentDetails = (props) => {
  const { id } = useParams()
  const [talent, setTalent] = useState(null)

  useEffect(() => {
    const fetchTalent = async () => {
      const data = await talentService.show(id)
      setTalent(data)
    }
    fetchTalent()
  }, [id])

console.log('Talent State:', talent)

  return ( 
    <>
      <h1>Talent Details Component</h1> 
      {/* <p>{props.profile.name}</p> */}
      <Experience />
      <Education />
      <Training />
    </>
  );
}

export default TalentDetails;