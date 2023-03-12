import { useState } from "react"
import { useLocation } from "react-router-dom"

const AddEducation = (props) => {

  const location = useLocation()
  const talentId = location.state?.talentId

  const [checked, setChecked] = useState(false)

  const handleCheckbox = () => {
    setChecked(!checked)
    setForm({ ...form, graduated: !checked })
  }

  const [form, setForm] = useState({
    institution: '',
    degree: '',
    major: '',
    graduated: checked,
    year: '',
    talentProfileId: talentId._id
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddEducation(form)
  }

  return (
    <div className="edit-profile">
      <div className="edit-profile-details">
        <h1>Add Education</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="institution-input">Intitution</label>
          <input
            type="text"
            name="institution"
            id="institution-input"
            value={form.institution}
            onChange={handleChange}
          />
          <label htmlFor="degree-input">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree-input"
            value={form.degree}
            onChange={handleChange}
          />
          <label htmlFor="major-input">Major</label>
          <input
            type="text"
            name="major"
            id="major-input"
            value={form.major}
            onChange={handleChange}
          />
          <p>checkboxx</p>
          <label htmlFor="graduated-input"></label>
          <input
            id="graduated-input"
            type="checkbox"
            checked={checked}
            onChange={handleCheckbox}
          />
          <label htmlFor="year-input">Year</label>
          <input
            type="number"
            name="year"
            id="year-input"
            value={form.year}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddEducation;