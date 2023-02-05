import { Link } from "react-router-dom";

const Profile = (props) => {
  
  
  return ( 
    <>
      <h1>Profile Component</h1>
      <Link to="/profile/edit">Edit Profile</Link>

      <h2></h2>
    </> 
  );
}

export default Profile;