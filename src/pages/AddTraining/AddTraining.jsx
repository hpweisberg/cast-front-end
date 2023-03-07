import { useState } from "react"
import { useLocation } from "react-router-dom"

const AddTraining = (props) => {

  const location = useLocation()
  const talentId = location.state?.talentId

  const [form, setForm] = useState({
    institution: '',
    focus: '',
    teacher: '',
    talentProfileId: talentId._id
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddTraining(form)
  }

  return (
    <>
      <h1>Add Training</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="institution-input">Institution</label>
        <input
          type="text"
          name="institution"
          id="institution-input"
          value={form.institution}
          onChange={handleChange}
        />
        <label htmlFor="focus-input">Focus</label>
        <input
          type="text"
          name="focus"
          id="focus-input"
          value={form.focus}
          onChange={handleChange}
        />
        <label htmlFor="teacher-input">Teacher</label>
        <input
          type="text"
          name="teacher"
          id="teacher-input"
          value={form.teacher}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddTraining;