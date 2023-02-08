import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";

import * as profileService from '../../services/profileService'

import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education"
import Training from "../../components/Training/Training";

const Profile = (props) => {
  
  const [profile, setProfile] = useState({})
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
        state={{isCd: profile.isCd, talentId: talentId, cdId: cdId, profile: profile}}
      >
        Edit Profile
      </Link>
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
      <p>Weight: {profile.talentAccount.weight}</p>
      <p>skills: {profile.talentAccount.skills}</p>
      <p>trades: {profile.talentAccount.trades}</p>

      {profile.talentAccount.experience.map(experience => 
        <Experience 
          handleDeleteExperience={props.handleDeleteExperience} 
          key={experience._id} 
          experience={experience}
          talentId={talentId}  
        />  
      )}
      {profile.talentAccount.education.map(education => 
        <Education 
          key={education._id} 
          education={education}
          talentId={talentId}
          handleDeleteEducation={props.handleDeleteEducation}
          />  
      )}
      {profile.talentAccount.training.map(training => 
        <Training 
          key={training._id} 
          training={training}
          talentId={talentId}
          handleDeleteTraining={props.handleDeleteTraining}
          />  
      )}

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