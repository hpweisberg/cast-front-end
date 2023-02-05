import { useState } from "react"

const EditProfile = (props) => {
  

  const [form, setForm] = useState({
    pronouns: '',
    location: '',
    phoneNumber: '',
    email: '',
    website: ''
  })

  const handleChange = ({target}) => {
    setForm({...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleEditProfile(form)
  }

  
  return (
    <>
      <h1>Edit Profile Component</h1> 

      <form onSubmit={handleSubmit}>
        <label htmlFor="pronouns-input">Pronouns</label>
        <select
          name="pronouns"
          id="pronouns-input"
          onChange={handleChange}
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
          onChange={handleChange}
          value={form.location}
        />
        <label htmlFor="phone-number-input">Phone Number</label>
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="phoneNumber"
          id="phone-number-input"
          onChange={handleChange}
          value={form.phoneNumber}
        />        
        <label htmlFor="website-input">Website</label>
        <input
          type="text"
          name="website"
          id="website-input"
          onChange={handleChange}
          value={form.website}
        />
        <button type='submit'>Save</button> 
      </form>

    </>
  );
}

export default EditProfile;