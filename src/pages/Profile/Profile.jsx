import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";

import * as profileService from '../../services/profileService'

import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education"
import Training from "../../components/Training/Training";

const Profile = (props) => {
  
  const [profile, setProfile] = useState({})
  const [signupComplete, setSignupComplete] = useState(true)
  const [talentId, setTalentId] = useState('')
  const [cdId, setCdId] = useState('')

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile(props.user.profile)
      setProfile(profileData)
      if(profileData.isCd) {
        setCdId(profileData.cdAccount._id)
      } else {
        setTalentId(profileData.talentAccount._id)
      }
    }
    fetchProfile()
  }, [props.user.profile])
  
  if(!profile) return "loading"

  return ( 
    <>
      <h1>Profile Component</h1>
      <Link 
        to="/profile/edit"
        state={{isCd: profile.isCd, signupComplete: signupComplete, talentId: talentId, cdId: cdId}}
      >
          Edit Profile</Link>
      <p>Name: {profile.name}</p>
      <p>{profile.photo}</p>
      <p>Pronouns: {profile.pronouns}</p>
      <p>Location: {profile.location}</p>
      <p>Phone Number: {profile.phoneNumber}</p>
      <p>Email: {props.user.email}</p>
      <p>Website: {profile.website}</p>
      {profile.cdAccount ?
        <p>Company {profile.cdAccount.company}</p>
        :
        ""
      }
      
      {profile.talentAccount ?
      <>
      <h1>talent account details</h1>
      <p>About: {profile.talentAccount.about}</p>
      <p>Union Status: {profile.talentAccount.unionStatus}</p>
      <p>Hair: {profile.talentAccount.hair}</p>
      <p>eyes: {profile.talentAccount.eyes}</p>
      <p>height: {profile.talentAccount.height}</p>

      {/* //! MAP THROUGH EACH OF THE BELOW ARRAYS AND RENDER THE COMPONENT AS A RESULT AND PASS THE DATA DOWN */}
      {profile.talentAccount.experience.map(experience => 
        <p>{experience.productionTitle}</p>  
      )}
      <Experience />
      <Education />
      <Training />

      <Link to="/profile/add-experience" state={{talentId: talentId}}>Add Experience</Link>
      <Link to="/profile/add-education" state={{talentId: talentId}}>Add Education</Link>
      <Link to="/profile/add-training" state={{talentId: talentId}}>Add Training</Link>
      </>
      :
      ""
    }
    </> 
  );
}

export default Profile;