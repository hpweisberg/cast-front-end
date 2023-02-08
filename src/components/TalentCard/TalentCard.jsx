import { Link } from "react-router-dom"

// leaving useParams until the Link below has been confirmed to 100% work
import { useParams } from "react-router-dom"

import Icon from '../../components/Icon/Icon'

import styles from './TalentCard.module.css'

const TalentCard = (props) => {

  return (
    <div className={styles.center}>
      <Link to={`/talent/${props.talent}`} className={styles.link}>
        <section className={styles.talentCardContainer}>
          <img src={props.profile.photo} alt="user profile pic" className={styles.photo}></img>
          <div className={styles.overflow}></div>
          <div className={styles.glanceInfo}>
            <h3>{props.profile.name}</h3>
            <p className={styles.pronouns}>{props.profile.pronouns}</p>
            <p className={styles.union}>{props.profile.unionStatus}</p>
            <p className={styles.location}>{props.profile.location}</p>
            <p className={styles.reelsIcon}><Icon name='Reels' className={styles.reelsIcon} /> {props.profile.reel}</p>
          </div>
        </section>
      </Link>
    </div>
  )
}


export default TalentCard;