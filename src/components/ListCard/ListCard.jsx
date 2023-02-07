import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import Icon from '../../components/Icon/Icon'
import TalentSearch from "../../pages/TalentSearch/TalentSearch";
import styles from './ListCard.module.css'



const ListCard = (props) => {
  console.log(props)
  return (
    <div className={styles.center}>
    <Link to={`/profiles/${props.profile._id}`} className={styles.link}>
      <section className={styles.listCardContainer}>
        <img src={props.profile.photo} alt="user profile pic" className={styles.photo}></img>
        <div className={styles.glanceInfo}>

          <h3>{props.profile.name}</h3>
          <p>{props.profile.pronouns}</p>
          <p>{props.profile.location}</p>
          <p>{props.profile.talentAccount.unionStatus}</p>
          {/* <p><Icon name='reels'/> {props.profile.talentAccount?.reel}</p> */}
          <img src="../../assets/icons/reels.png" alt="" />
        </div>
      </section>
    </Link>
    </div>
  )
}

export default ListCard;