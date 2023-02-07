import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import Icon from '../../components/Icon/Icon'
import TalentSearch from "../../pages/TalentSearch/TalentSearch";
import styles from './TalentCard.module.css'



const TalentCard = (props) => {
  // console.log(props)
  return (
    <div className={styles.center}>
      <Link to={`/profiles/${props.profile._id}`} className={styles.link}>
        <section className={styles.talentCardContainer}>
          <img src={props.profile.photo} alt="user profile pic" className={styles.photo}></img>
          <div className={styles.overflow}></div>
          <div className={styles.glanceInfo}>

            <h3>{props.profile.name}</h3>
            <p className={styles.pronouns}>{props.profile.pronouns}</p>
            <p className={styles.union}>{props.profile.talentAccount.unionStatus}</p>
            <p className={styles.location}>{props.profile.location}</p>
            <p className={styles.reelsIcon}><Icon name='Reels' className={styles.reelsIcon} /> {props.profile.talentAccount?.reel}</p>
          </div>
        </section>
      </Link>
    </div>
  )
}

export default TalentCard;