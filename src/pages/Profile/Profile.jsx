import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";

import * as profileService from '../../services/profileService'

const Profile = (props) => {
  
  const [profile, setProfile] = useState({})

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile(props.user.profile)
      console.log(profileData)
      setProfile(profileData)
    }
    fetchProfile()
  }, [props.user.profile])
  
  if(!profile || !profile.talentAccount) return "loading"

  return ( 
    <>
      <h1>Profile Component</h1>
      <Link to="/profile/edit">Edit Profile</Link>
      <p>Name: {profile.name}</p>
      <p>{profile.photo}</p>
      <p>Pronouns: {profile.pronouns}</p>
      <p>Location: {profile.location}</p>
      <p>Phone Number: {profile.phoneNumber}</p>
      <p>Email: {props.user.email}</p>
      <p>Website: {profile.website}</p>
      <h1>talent account details</h1>
      <p>{profile.talentAccount.about}</p>
      <p>{profile.talentAccount.unionStatus}</p>

    </> 
  );
}

export default Profile;