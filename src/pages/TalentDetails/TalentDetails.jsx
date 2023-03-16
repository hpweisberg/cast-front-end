import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from "./TalentDetails.module.css"
import { Link } from "react-router-dom"


// components
import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import Training from "../../components/Training/Training";
import Icon from "../../components/Icon/Icon"

const TalentDetails = (props) => {

  const [form, setForm] = useState({
    _id: ''
  })
  const location = useLocation()
  const talent = location.state?.talent

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddToList(form._id, talent._id, props.profile.cdAccount._id)
  }

  return (
    <>
      <div className={styles.talentDetailsContainer}>
        <div className={styles.topRow}>
          <Link to={`/talent/`} className={styles.link}> <button className={styles.backBtn} ><Icon name='Back' /></button></Link>
          <div className={styles.nameGroup}>
            <h1>{talent.name}</h1>
            <h6>{talent.profile?.pronouns}</h6>
          </div>
          <Link to={`/profile/`} className={styles.link}><button className={styles.editBtn}><Icon name='BlankHold' /></button></Link>

        </div>

        <div className={styles.headshotDeatils}>
          <img className={styles.headshotImg} src={talent.headshot} alt="headshot" />
        </div>
        <div className={styles.actorDetails}>
          <p>Union Status: {talent.unionStatus}</p>
          <p>Location: {talent.profile.location}</p>
        </div>
        <div className={styles.line}>
          <p>Weight: {talent.weight}</p>
          <p>Height: {talent.height}</p>
        </div>
        <div className={styles.line}>
          <p>Eyes: {talent.eyes}</p>
          <p>Hair: {talent.hair}</p>
        </div>
        <p className={styles.aboutMe}>About: {talent.about}</p>
        {/* </div> */}
      </div>
      <div className={styles.buttonLinks}>
        <Link to={talent.reelLink}>
          <button>
            <Icon name='Reels' />
          </button>
        </Link>
        <form className={styles.addTalentToList} onSubmit={handleSubmit}>
          <select
            required
            name='_id'
            value={form._id}
            onChange={handleChange}
            placeholder={`select a list`}
            className={styles.listMenu}
          >
            <option>Select a List</option>
            {props.lists.map(list => (
              <option key={list._id} value={list._id}>{list.titleOfList}</option>
            ))}
          </select>
          <button className={styles.addBtn} type='submit'><Icon name='Add' /></button>
        </form>
      </div>
      {talent.experience ? <h1>Experience </h1> : ''}
      {talent.experience.map((experience, idx) =>
        <Experience key={idx} experience={experience} />
      )}
      {talent.education ? <h1>Education </h1> : ''}
      {talent.education.map((education, idx) =>
        <Education key={idx} education={education} />
      )}
      {talent.training ? <h1>Training </h1> : ''}
      {talent.training.map((training, idx) =>
        <Training key={idx} training={training} />
      )}
    </>
  )
}

export default TalentDetails;