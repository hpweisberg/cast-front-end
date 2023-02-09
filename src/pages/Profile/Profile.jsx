import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";

import './Profile.css'

import * as profileService from '../../services/profileService'

import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education"
import Training from "../../components/Training/Training";

const Profile = (props) => {
  
  const [profile, setProfile] = useState({})
  const [talentId, setTalentId] = useState(null)
  const [cdId, setCdId] = useState(null)


  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile(props.user.profile)
      setProfile(profileData)
      if(profileData.isCd) {
        setCdId(profileData.cdAccount)
      } else {
        setTalentId(profileData.talentAccount)
      }
    }
    fetchProfile()
  }, [props.user.profile])



  console.log('PROFILE', profile);
  console.log('TALENTID', talentId);
  console.log('CDID', cdId);
  
  if(!profile) return "loading"

  return ( 
    <section className="profileDetails">
      {
        (profile.talentAccount === talentId)
      &&
        <Link 
          to="/profile/edit"
          state={{isCd: profile.isCd, talentId: talentId, cdId: cdId, profile: profile}}
        >
          Edit Profile
        </Link>
      }
      <h1>{profile.name}</h1>
      {profile.photo && <img src={profile.photo} alt="user talent pic" ></img>}
      <p>Pronouns: {profile.pronouns}</p>
      <p>Location: {profile.location}</p>
      <p>Phone Number: {profile.phoneNumber}</p>
      <p>Email: {props.user.email}</p>
      <p>Website: {profile.website}</p>
      {profile.cdAccount && <p>Company {profile.cdAccount.company}</p>}
      
      {profile.talentAccount
      
      &&

      <>

      <p>About: {profile.talentAccount.about}</p>
      <p>Union Status: {profile.talentAccount.unionStatus}</p>
      <p>Hair: {profile.talentAccount.hair}</p>
      <p>eyes: {profile.talentAccount.eyes}</p>
      <p>Height: {profile.talentAccount.height}</p>
      <p>Weight: {profile.talentAccount.weight}</p>
      <p>Skills: {profile.talentAccount.skills}</p>
      <p>Trades: {profile.talentAccount.trades}</p>

      {profile.talentAccount.experience.map(experience => 
        <>
          <Experience 
            handleDeleteExperience={props.handleDeleteExperience} 
            key={experience._id} 
            experience={experience}
            talentId={talentId}  
          />
          <form onSubmit={()=> props.handleDeleteExperience(talentId, experience._id)}>
            <button type='submit'>Delete</button>
          </form>  
        </>
      )}
      <Link to="/profile/add-experience" state={{talentId: talentId}}>Add Experience</Link>

      {profile.talentAccount.education.map(education => 
        <>
          <Education 
            key={education._id} 
            education={education}
            talentId={talentId}
            handleDeleteEducation={props.handleDeleteEducation}
            />
            <form onSubmit={()=> props.handleDeleteEducation(talentId, education._id)}>
              <button type='submit'>Delete</button>
            </form>  
        </>
      )}
      <Link to="/profile/add-education" state={{talentId: talentId}}>Add Education</Link>

      {profile.talentAccount.training.map(training => 
        <>
          <Training 
            key={training._id} 
            training={training}
            talentId={talentId}
            handleDeleteTraining={props.handleDeleteTraining}
          />
          <form onSubmit={()=> props.handleDeleteTraining(talentId, training._id)}>
            <button type='submit'>Delete</button>
          </form>  
        </>
      )}
      <Link to="/profile/add-training" state={{talentId: talentId}}>Add Training</Link>
      </>
      }
    </section> 
  );
}

export default Profile;