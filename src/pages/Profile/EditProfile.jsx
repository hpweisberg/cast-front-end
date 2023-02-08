import { useState } from "react"
import { Link } from "react-router-dom"
import styles from './EditProfile.css'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Profile from "./Profile";

const EditProfile = (props) => {
  
  const location = useLocation()
  const signupType = location.state?.signupType
  const isCd = location.state?.isCd
  const signupComplete = location.state?.signupComplete
  const talentId = location.state?.talentId
  const cdId = location.state?.cdId

  console.log("cdId", cdId)

  const [photoData, setPhotoData] = useState({})

  //* edit profile

  const [form, setForm] = useState({
    pronouns: '',
    location: '',
    phoneNumber: '',
    website: '',
    isCd: signupType
  })
  

  const handleProfileChange = ({target}) => {
    setForm({...form, [target.name]: target.value})
  }
  
  const handleProfileSubmit = (e) => {
    e.preventDefault()
    props.handleEditProfile(form)
  }

  //* edit talentAccount

  // need to handle add skills
  const [talentForm, setTalentForm] = useState({
    unionStatus: 'Not Affiliated',
    hair: '',
    eyes: '',
    feet: '',
    inches: '',
    height: '',
    weight: '',
    about: '',
    skills: '',
    trades: '',
    talentId: talentId
  })

  const handleTalentChange = ({target}) => {
    setTalentForm({...talentForm, [target.name]: target.value})
  }
  
  const handleTalentSubmit = (e) => {
    e.preventDefault()
    props.handleEditTalentProfile(talentForm)
    props.handleEditProfile(form)
  }

  //* edit CDAccount

  const [CDForm, setCDForm] = useState({
    company: '',
    cdId: cdId
  })

  const handleCDChange = ({target}) => {
    setCDForm({...CDForm, [target.name]: target.value})
  }

  const handleCDSubmit = (e) => {
    e.preventDefault()
    props.handleEditCDProfile(CDForm)
    props.handleEditProfile(form)
  }

  //! handle add photo needs work

  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] })
  }

  // create useState for signup type
  // create useEffect to autoset useState
  // put useState variable in the isCD input as the value


  // handle submit function from SignupForm.jsx
  // const handleSubmit = async e => {
  //   e.preventDefault()
  //   try {
  //     await authService.signup(formData, photoData.photo)
  //     props.handleSignupOrLogin()
  //     navigate('/')
  //   } catch (err) {
  //     props.updateMessage(err.message)
  //   }
  // }

  const [render, setRender] = useState(false)


  useEffect(() => {
    const renderHelp = async () => {
      if(signupType === false || isCd === false){
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
              <label htmlFor="photo-upload">
                Upload Photo
              </label>
              <input
                type="file"
                id="photo-upload"
                name="photo"
                onChange={handleChangePhoto}
              />

              <label htmlFor="union-status-input">Union Status</label>
              <select
                name="unionStatus"
                id="union-status-input"
                value={form.unionStatus}
                onChange={handleTalentChange}
              >
                <option value="SAG">SAG</option>
                <option value="AEA">AEA</option>
                <option value="Not Affiliated">Not Affiliated</option>
              </select>

              <label htmlFor="hair-input">Hair</label>
              <select
                name="hair"
                id="hair-input"
                value={form.hair}
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
                value={form.eyes}
                onChange={handleTalentChange}
              >
                <option value="Brown">Brown</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Other">Other</option>
              </select>

              <label htmlFor="height-feet-input">Feet</label>
              <input 
                id='height-feet-input' 
                type="number" 
                value={form.feet}
                name="feet"
                onChange={handleTalentChange}
              />

              <label htmlFor="height-inches-input">Inches</label>
              <input 
                id='height-inches-input' 
                type="number" 
                name='inches'
                value={form.inches}
                onChange={handleTalentChange}
              />
              
              <label htmlFor="height">Height</label>

              {/* add class="hidden" */}

              <input 
                id='height' 
                type="number"
                name="height"
                value={form.height}
                onChange={handleTalentChange}
              />
              
              <label htmlFor="weight-input">Weight</label>
              <input 
                id='weight-input' 
                type="number" 
                value={form.weight}
                // onChange={handleTalentChange}
              />

              <label htmlFor="about-input">About</label>
              <textarea 
                name="about" 
                id="about-input" 
                cols="30" 
                rows="10"
                value={form.about}
                onChange={handleTalentChange}
              >
              </textarea>

              <label htmlFor="skills-input">Skills</label>
              <select
                name="skills"
                id="skills-input"
                // value={form.category}
                // onChange={handleChange}
              >
                <option value="Brown">Brown</option>
              </select>
              
              <label htmlFor="trades-input">Trades</label>
              <select
                name="trades"
                id="trades-input"
                // value={form.category}
                // onChange={handleChange}
              >
                <option value="Brown">Brown</option>
              </select>

              <label htmlFor="reel-input">Reel Link</label>
              <input 
                type="text" 
                id="reel-input" 
                name="reelLink"
                value={form.reelLink}
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

export default EditProfile;