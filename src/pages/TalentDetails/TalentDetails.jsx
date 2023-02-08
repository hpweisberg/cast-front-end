import { useState, useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import styles from "./TalentDetails.module.css"

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
  // const [talent, setTalent] = useState(null)
  const [form, setForm] = useState({
    _id: ''
  })
  const location = useLocation()
  const talent = location.state?.talent
  console.log('talent log:::', talent)

  
  const handleChange = ({target}) => {
    setForm({...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddToList(form._id, talent._id)
  }
  // console.log('FORM', form._id);
  // console.log('TALENT',talent._id);
  return (
    <>
    {/* <h1>{props.talent.about}</h1> */}
    <h1>test</h1>
    <h1>{talent.about}</h1>
    <h1>{talent.name}</h1>
    <h1>{talent.profile.email}</h1>
        <Experience />
        <Education />
        <Training />



        <>
      <div className={styles.talentDetailsContainer}>
        <div className={styles.topRow}>
          <button className={styles.backBtn}><Icon name='Back' /></button>
          <div className={styles.nameGroup}>
            <h1>{talent.name}</h1>
            <h6>{talent.profile.pronouns}</h6>
          </div>
          <button className={styles.editBtn}><Icon name='Edit' /></button>
        </div>
        <div className={styles.headshotDeatils}>
          <img className={styles.headshotImg} src={talent.headshot} alt="headshot" />
          <div className={styles.actorDetails}>
            <p>{talent.unionStatus}</p>
            <p>{talent.profile.location}</p>
            <div className={styles.line}>
              <p>{talent.weight}</p>
              <p>{talent.height}</p>
            </div>
            <div className={styles.line}>
              <p>{talent.eyes}</p>
              <p>{talent.hair}</p>
            </div>
            <p>{talent.about}</p>
          </div>
        </div>
        <div className={styles.buttonLinks}>
          <Icon name='Reels' />
          <Icon name='Calendar' />
          <Icon name='Add' />
        </div>
        <h1>Talent Details Component</h1>

        {/* <p>{talent.about}</p> */}
        <Experience />
        <Education />
        <Training />
      </div>
      <form onSubmit={handleSubmit}>
          <select
              required
              name='_id'
              value={form._id}
              onChange={handleChange}
              placeholder={`select a list`}
          >
            <option>Select a List</option>
            {props.lists.map(list => (
              <option key={list._id} value={list._id}>{list.titleOfList}</option>
            ))}
          </select>
          <button type='submit'>Add to List!</button>
        </form>
    </>
    </>
  )
}

export default TalentDetails;