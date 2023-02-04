const EditProfile = () => {
  return ( 
    <>
      <h1>Edit Profile Component</h1> 

      <form action="">
        
        <label htmlFor="pronouns-input">Pronouns</label>
        <select
          name="pronouns"
          id="pronouns-input"
        >
          <option value="He/Him/His">He/Him/His</option>
          <option value="She/Her/Hers">She/Her/Hers</option>
          <option value="They/Them/Theirs">They/Them/Theirs</option>    
        </select>

        <label htmlFor="location-input">Location</label>
        <input
          required
          type="text"
          name="location"
          id="location-input"
        />

        <label htmlFor="phone-number-input">Phone Number</label>
        <input
          required
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="phoneNumber"
          id="phone-number-input"
        />        

        <label htmlFor="email-input">Email</label>
        <input
          required
          type="text"
          name="email"
          id="email-input"
        />
        
        <label htmlFor="website-input">Website</label>
        <input
          required
          type="text"
          name="website"
          id="website-input"
        />


      </form>

    </>
  );
}

export default EditProfile;