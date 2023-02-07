import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./TalentDetails.module.css"
import { useLocation } from "react-router-dom"

// Services
import * as talentService from "../../services/talentService"
// import * as profileService from "../../services/profileService"

// components
import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import Training from "../../components/Training/Training";

const TalentDetails = (props) => {
  const { talentId } = useParams()
  const [talent, setTalent] = useState(null)
  const location = useLocation()
  const routeType = location.state?.routeType

  useEffect(() => {
    console.log('id:', talentId)
      const fetchTalent = async () => {
        const data = await talentService.show(talentId)
        setTalent(data)
      }
      fetchTalent()
  }, [talentId])

  console.log('Talent State:', talent)
  console.log('routeType:', routeType)
  console.log('props:', props)


  return (
    <>
      <h1>Talent Details Component</h1>
      {/* <p>{props.profile.name}</p> */}
      {/* {props.talent.name} */}
      <p>{talent.about}</p>
      <Experience />
      <Education />
      <Training />
    </>
  );
}

export default TalentDetails;