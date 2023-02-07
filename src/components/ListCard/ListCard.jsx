import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import Icon from "../Icon/Icon"
import TalentSearch from "../../pages/TalentSearch/TalentSearch";
// import Profile from "../../pages/Profile/Profile";



const ListCard = (props) => {
  console.log(props)
  return ( 
    //? Link is not correct
    <Link to={`/profiles/${props.profile._id}`}>
        <h3>{props.profile.name}</h3>
        <img src={props.profile.photo} alt=""></img>
        <p>{props.profile.pronouns}</p>
        <p>{props.profile.location}</p>
        <p>{props.profile.talentAccount?.reel}</p>
        <p>{props.profile.talentAccount.unionStatus}</p>
      </Link>
      )
}

export default ListCard;