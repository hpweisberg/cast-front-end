import { useState } from "react"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styles from './EditProfile.module.css'


const EditProfile = (props) => {
  const location = useLocation()
  const signupType = location.state?.signupType
  const isCd = location.state?.isCd
  const talentId = location.state?.talentId
  const cdId = location.state?.cdId
  const profile = location.state?.profile

  const [photoData, setPhotoData] = useState({})

  //* edit profile

  const [form, setForm] = useState({
    pronouns: profile.pronouns,
    location: profile.location,
    phoneNumber: profile.location,
    website: profile.website,
    isCd: profile.isCd
  })


  const handleProfileChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    props.handleEditProfile(form)
  }

  //* edit talentAccount

  const [talentForm, setTalentForm] = useState({
    unionStatus: profile.talentAccount?.unionStatus,
    hair: profile.talentAccount?.hair,
    eyes: profile.talentAccount?.eyes,
    height: profile.talentAccount?.height,
    weight: profile.talentAccount?.weight,
    about: profile.talentAccount?.about,
    skills: profile.talentAccount?.skills,
    trades: profile.talentAccount?.trades,
    reelLink: profile.talentAccount?.reelLink,
    talentId: talentId,
  })

  const handleTalentChange = ({ target }) => {
    setTalentForm({ ...talentForm, [target.name]: target.value })
  }

  const handleTalentSubmit = (e) => {
    e.preventDefault()
    props.handleEditTalentProfile(talentForm)
    props.handleEditProfile(form)
  }

  //* edit CDAccount

  const [CDForm, setCDForm] = useState({
    company: profile.cdAccount?.company,
    cdId: cdId
  })

  const handleCDChange = ({ target }) => {
    setCDForm({ ...CDForm, [target.name]: target.value })
  }

  const handleCDSubmit = (e) => {
    e.preventDefault()
    props.handleEditCDProfile(CDForm)
    props.handleEditProfile(form)
  }
  console.log('cdId', cdId)

  const [render, setRender] = useState(false)


  useEffect(() => {
    const renderHelp = async () => {
      if (signupType === false || isCd === false) {
        setRender(false)
      } else {
        setRender(true)
      }
    }
    renderHelp()
  },)
  console.log(CDForm)

  return (
    <>
      <div className={styles.container}>
        <h2>Edit Profile Details</h2>
        <form onSubmit={handleProfileSubmit}>
          <label htmlFor="pronouns-input">Pronouns</label>
          <select
            name="pronouns"
            id="pronouns-input"
            value={form.pronouns}
            onChange={handleProfileChange}
          >
            <option value="He/Him/His">He/Him/His</option>
            <option value="She/Her/Hers">She/Her/Hers</option>
            <option value="They/Them/Theirs">They/Them/Theirs</option>
          </select>
          <label htmlFor="location-input">Location</label>
          <input
            type="text"
            name="location"
            id="location-input"
            onChange={handleProfileChange}
            value={form.location}
          />
          <label htmlFor="phone-number-input">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phone-number-input"
            onChange={handleProfileChange}
            value={form.phoneNumber}
          />
          <label htmlFor="website-input">Website</label>
          <input
            type="text"
            name="website"
            id="website-input"
            onChange={handleProfileChange}
            value={form.website}
          />
        </form>
      </div>
      {(render === false) ?
        <>
          <div className={styles.container}>

            <h2>Talent Account Details</h2>
            <form onSubmit={handleTalentSubmit}>
              <label htmlFor="union-status-input">Union Status</label>
              <select
                name="unionStatus"
                id="union-status-input"
                value={talentForm.unionStatus}
                onChange={handleTalentChange}
              >
                <option value="Not Affiliated">Not Affiliated</option>
                <option value="SAG">SAG</option>
                <option value="AEA">AEA</option>
              </select>
              <label htmlFor="hair-input">Hair</label>
              <select
                name="hair"
                id="hair-input"
                value={talentForm.hair}
                onChange={handleTalentChange}
              >
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
                <option value="Blonde">Blonde</option>
                <option value="Red">Red</option>
                <option value="Grey">Grey</option>
                <option value="Other">Other</option>
              </select>

              <label htmlFor="eyes-input">Eyes</label>
              <select
                name="eyes"
                id="eyes-input"
                value={talentForm.eyes}
                onChange={handleTalentChange}
              >
                <option value="Brown">Brown</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Other">Other</option>
              </select>

              <label htmlFor="height">Height</label>

              <input
                id='height'
                type="number"
                name="height"
                value={talentForm.height}
                onChange={handleTalentChange}
              />

              <label htmlFor="weight-input">Weight</label>
              <input
                id='weight-input'
                type="number"
                value={talentForm.weight}
                onChange={handleTalentChange}
                name="weight"
              />
              <label htmlFor="about-input">About</label>
              <textarea
                name="about"
                id="about-input"
                cols="30"
                rows="10"
                value={talentForm.about}
                onChange={handleTalentChange}
              >
              </textarea>
              <label htmlFor="skills-input">Skills</label>
              <select
                name="skills"
                id="skills-input"
                value={talentForm.category}
                onChange={handleTalentChange}
              >
                <option value="Please Select">Please Select</option>
                <option value="Brown">Brown</option>
              </select>
              <label htmlFor="trades-input">Trades</label>
              <select
                name="trades"
                id="trades-input"
                value={talentForm.category}
                onChange={handleTalentChange}
              >
                <option value="Please Select">Please Select</option>
                <option value="Brown">Brown</option>
              </select>
              <label htmlFor="reel-input">Reel Link</label>
              <input
                type="text"
                id="reel-input"
                name="reelLink"
                value={talentForm.reelLink}
                onChange={handleTalentChange}
              />
              <button type="submit">Save</button>
            </form>
          </div>
        </>
        :
        <>
          <h2>CD Account</h2>
          <div className={styles.container}>
            <form onSubmit={handleCDSubmit}>
              <label htmlFor="company-input">Company</label>
              <input
                type="text"
                name="company"
                id="company-input"
                value={CDForm.company}
                onChange={handleCDChange}
              />
              <button type="submit">Save</button>
            </form>
          </div>
        </>
      }
    </>
  )
}

export default EditProfile;