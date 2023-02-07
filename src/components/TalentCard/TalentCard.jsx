import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

// import { useParams } from "react-router-dom"
import Icon from '../../components/Icon/Icon'
// import TalentSearch from "../../pages/TalentSearch/TalentSearch";
import styles from './TalentCard.module.css'
import * as talentService from '../../services/talentService'



const TalentCard = (props) => {
  const [talent, setTalent] = useState({})
  console.log(props.talent);

  useEffect(() => {
    const fetchTalent = async () => {
      const talentAcct = await talentService.show(props.talent)
      console.log('fetchTalent', talentAcct);
      setTalent(talentAcct)
    }
    fetchTalent()
  }, [props.talent])

    console.log(props);

  return (
    <div className={styles.center}>
      <Link to={`/profiles/${props.profile._id}`} className={styles.link}>
        <section className={styles.talentCardContainer}>
          <img src={talent.headshot} alt="user profile pic" className={styles.photo}></img>
          <div className={styles.overflow}></div>
          <div className={styles.glanceInfo}>

            <h3>{props.profile.name}</h3>
            <p className={styles.pronouns}>{props.profile.pronouns}</p>
            <p className={styles.union}>{talent.unionStatus}</p>
            <p className={styles.location}>{props.profile.location}</p>
            <p className={styles.reelsIcon}><Icon name='Reels' className={styles.reelsIcon} /> {talent.reel}</p>
          </div>
        </section>
      </Link>
    </div>
  )
}

export default TalentCard;