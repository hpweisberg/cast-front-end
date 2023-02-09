import { Link } from "react-router-dom"

// leaving useParams until the Link below has been confirmed to 100% work
import { useParams } from "react-router-dom"

import Icon from '../../components/Icon/Icon'

import styles from './TalentCard.module.css'

const TalentCard = ( {profile, talent} ) => {
  // const {profile} = props.talent


  return (
    <div className={styles.center}>
      <Link to={`/talent/${talent._id}`} state={{talent}} className={styles.link}>
        <section className={styles.talentCardContainer}>
          {(talent.headshot) ? <img src={talent.headshot} alt="user talent pic" className={styles.photo}></img> : <p>NO HEADSHOT</p>}
          <div className={styles.overflow}></div>
          <div className={styles.glanceInfo}>
            <h3>{talent.name}</h3>
            <p className={styles.pronouns}>{talent.profile?.pronouns}</p>
            <p className={styles.union}>{talent.unionStatus}</p>
            <p className={styles.location}>{talent.profile?.location}</p>
            <p className={styles.reelsIcon}><Icon name='Reels' className={styles.reelsIcon} /> {talent.reel}</p>
          </div>
        </section>
      </Link>
    </div>
  )
}


export default TalentCard;