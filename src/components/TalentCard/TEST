import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Icon from '../../components/Icon/Icon'
import TalentSearch from "../../pages/TalentSearch/TalentSearch"
import styles from './TalentCard.module.css'



const TalentCard = (props) => {
  // console.log(props)

  const [routeType, setRouteType] = useState({id: 'test'})



  useEffect(() => {
    const handleRouteType = () => {
      setRouteType('talent')
    }
    handleRouteType()
  }, [])

  console.log("routeType from card", routeType)
  return (
    <div className={styles.center}>
      <Link to={`/talent/${props.profile.talentAccount._id}`} state={{routeType: routeType}} className={styles.link}>
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