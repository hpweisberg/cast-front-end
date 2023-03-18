import { useState } from "react"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const CreateProfile = (props) => {

  const location = useLocation()
  const signupType = location.state?.signupType
  const isCd = location.state?.isCd

  //* edit profile

  const [form, setForm] = useState({
    pronouns: '',
    location: '',
    phoneNumber: '',
    website: '',
    isCd: signupType
  })

  const handleProfileChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  //* edit talentAccount

  const [talentForm, setTalentForm] = useState({
    unionStatus: 'Please Select',
    hair: '',
    eyes: '',
    height: '',
    weight: '',
    about: '',
    skills: '',
    trades: '',
    reelLink: '',
  })

  const handleTalentChange = ({ target }) => {
    setTalentForm({ ...talentForm, [target.name]: target.value })
  }

  const handleTalentSubmit = (e) => {
    e.preventDefault()
    props.handleAddTalentProfile(talentForm)
    props.handleEditProfile(form)
  }

  //* edit CDAccount

  const [CDForm, setCDForm] = useState({
    company: '',
  })

  const handleCDChange = ({ target }) => {
    setCDForm({ ...CDForm, [target.name]: target.value })
  }

  const handleCDSubmit = (e) => {
    e.preventDefault()
    props.handleAddCDProfile(CDForm)
    props.handleEditProfile(form)
  }

  const [render, setRender] = useState(false)


  useEffect(() => {
    const renderHelp = async () => {
      if (signupType === "talent" || isCd === false) {
        setRender(false)
      } else {
        setRender(true)
      }
    }
    renderHelp()
  },)


  return (
    <>
      <h2>Edit Profile Details</h2>
      <form>
        <label htmlFor="pronouns-input">Pronouns</label>
        <select
          name="pronouns"
          id="pronouns-input"
          onChange={handleProfileChange}
          value={form.pronouns}
        >
          <option value="Please Select">Please Select</option>
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
      {(render === false) ?
        <>
          <h2>Talent Account Details</h2>
          <form onSubmit={handleTalentSubmit}>
            <label htmlFor="union-status-input">Union Status</label>
            <select
              name="unionStatus"
              id="union-status-input"
              value={talentForm.unionStatus}
              onChange={handleTalentChange}
            >
              <option value="Please Select">Please Select</option>
              <option value="SAG">SAG</option>
              <option value="AEA">AEA</option>
              <option value="Not Affiliated">Not Affiliated</option>
            </select>
            <label htmlFor="hair-input">Hair</label>
            <select
              name="hair"
              id="hair-input"
              value={talentForm.hair}
              onChange={handleTalentChange}
            >
              <option value="Please Select">Please Select</option>
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
              <option value="Please Select">Please Select</option>
              <option value="Brown">Brown</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="height">Height (in inches)</label>
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
              name="weight"
              onChange={handleTalentChange}
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
        </>
        :
        <>
          <h2>CD Account</h2>
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
        </>
      }
    </>
  )
}

export default CreateProfile;