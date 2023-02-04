import { Link } from "react-router-dom";

const Profile = () => {
  
  const handleSubmit = async evt => {
    evt.preventDefault()
  }
  
  return ( 
    <>
      <h1>Profile Component</h1>
      <Link to="/profile/edit">Edit Profile</Link>
    </> 
  );
}

export default Profile;