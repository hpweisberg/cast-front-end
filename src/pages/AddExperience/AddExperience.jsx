import { useState } from "react"
import { useLocation } from "react-router-dom"

const AddExperience = (props) => {
  
  const location = useLocation()
  const talentId = location.state?.talentId

  const [form, setForm] = useState({
    productionTitle: '',
    role: '',
    type: '',
    producingEntity: '',
    director: '',
    year: '',
    talentProfileId: talentId._id
  })
  
  const handleChange = ({target}) => {
    setForm({...form, [target.name]: target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddExperience(form)
  }



  return ( 
    <>
      <h1>Add Experience Component</h1> 

      <form onSubmit={handleSubmit}>
        <label htmlFor="production-title-input">Production Title</label>
        <input 
          type="text" 
          name="productionTitle"
          id="production-title-input"
          value={form.productionTitle}
          onChange={handleChange}
        />
        <label htmlFor="role-input">Role</label>
        <input 
          type="text" 
          name="role"
          id="role-input"
          value={form.role}
          onChange={handleChange}
        />
        <label htmlFor="type-input">Type</label>
        <select
          name="type"
          id="type-input"
          value={form.type}
          onChange={handleChange}
        >
          <option value="Please Select">Please Select</option>
          <option value="Film">Film</option>
          <option value="TV">TV</option>
          <option value="Stage">Stage</option>    
          <option value="Other">Other</option>    
        </select>
        <label htmlFor="producing-entity-input">Producing Entity</label>
        <input 
          type="text" 
          name="producingEntity"
          id="producing-entity-input"
          value={form.producingEntity}
          onChange={handleChange}
        />
        <label htmlFor="director-input">Director</label>
        <input 
          type="text" 
          name="director"
          id="director-input"
          value={form.director}
          onChange={handleChange}
        />
        <label htmlFor="year-input">Year</label>
        <input 
          type="text" 
          name="year"
          id="year-input"
          value={form.year}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>


    </>
  );
}

export default AddExperience;