import { Link } from "react-router-dom"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Icon from '../../components/Icon/Icon'
import TalentSearch from "../../pages/TalentSearch/TalentSearch"

import styles from './TalentCard.module.css'
import * as talentService from '../../services/talentService'
import * as profileService from '../../services/profileService'


const TalentCard = (props) => {
  const [talent, setTalent] = useState({})
  const [profile, setProfile] = useState({})
  // console.log(props.talent);

  useEffect(() => {
    const fetchTalentAcct = async () => {
      const talentAcct = await talentService.show(props.talent)
      console.log('fetchTalent', talentAcct);
      setTalent(talentAcct)
    }
    fetchTalentAcct()
  }, [props.talent])
  console.log('props.profile', talent.name, props.profle);

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await profileService.getProfile(props.profile)
      console.log('fetchProfile', profile);
      setProfile(profile)
    }
    fetchProfile()
  }, [props.profile])



  return (
    <div className={styles.center}>
      <Link to={`/profiles/${profile._id}`} className={styles.link}>
        <section className={styles.talentCardContainer}>
          <img src={props.profile.photo} alt="user profile pic" className={styles.photo}></img>
          <div className={styles.overflow}></div>
          <div className={styles.glanceInfo}>
            <h3>{talent.name}</h3>
            <p className={styles.pronouns}>{profile.pronouns}</p>
            <p className={styles.union}>{talent.unionStatus}</p>
            <p className={styles.location}>{profile.location}</p>
            <p className={styles.reelsIcon}><Icon name='Reels' className={styles.reelsIcon} /> {talent.reel}</p>

          </div>
        </section>
      </Link>
    </div>
  )
}


// export default TalentCard;