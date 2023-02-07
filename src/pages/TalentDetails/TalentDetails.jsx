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
import Icon from "../../components/Icon/Icon"

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
      <div className={styles.talentDetailsContainer}>
        <div className={styles.topRow}>
          <button className={styles.backBtn}><Icon name='Back' /></button>
          <div className={styles.nameGroup}>
            <h1>NAME</h1>
            <h6>PRONOUNS</h6>
          </div>
          <button className={styles.editBtn}><Icon name='Edit' /></button>
        </div>
        <div className={styles.headshotDeatils}>
          <div className={styles.headshotImg}>IMG</div>
          <div className={styles.actorDetails}>
            <p>UNION</p>
            <p>LOCATION</p>
            <div className={styles.line}>
            <p>AGE</p>
              <p>WEIGHT</p>
              <p>HEIGHT</p>
            </div>
            <div className={styles.line}>
              <p>EYE</p>
              <p>HAIR</p>
            </div>
            <p>ABOUT</p>
            <p>UNION</p>
            {/* <p>{talent.location}</p> */}
            {/* <p>{talent.age}</p> */}
            {/* <p>{talent.weight}lb</p> */}
            {/* <p>{talent.height}</p> */}
            {/* <p>{talent.eyes}</p> */}
            {/* <p>{talent.hair}</p> */}
            {/* <p>{talent.about}</p> */}
          </div>
        </div>
        <h1>Talent Details Component</h1>

        {/* <p>{talent.about}</p> */}
        <Experience />
        <Education />
        <Training />
      </div>
    </>
  );
}

export default TalentDetails;