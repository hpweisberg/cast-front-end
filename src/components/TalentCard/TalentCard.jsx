import { Link } from "react-router-dom"

// leaving useParams until the Link below has been confirmed to 100% work
import { useParams } from "react-router-dom"

import Icon from '../../components/Icon/Icon'

import styles from './TalentCard.module.css'

const TalentCard = (props) => {
  // const {profile} = props.talent
  console.log('Hunter test:',props)



  return (
    <div className={styles.center}>
      <Link to={`/talent/${props.talent._id}`} className={styles.link}>
        <section className={styles.talentCardContainer}>
          <img src={props.talent.headshot} alt="user talent pic" className={styles.photo}></img>
          <div className={styles.overflow}></div>
          <div className={styles.glanceInfo}>
            <h3>{props.talent.name}</h3>
            <p className={styles.pronouns}>{props.talent.profile?.pronouns}</p>
            <p className={styles.union}>{props.talent.unionStatus}</p>
            <p className={styles.location}>{props.talent.profile?.location}</p>
            <p className={styles.reelsIcon}><Icon name='Reels' className={styles.reelsIcon} /> {props.talent.reel}</p>
          </div>
        </section>
      </Link>
    </div>
  )
}


export default TalentCard;