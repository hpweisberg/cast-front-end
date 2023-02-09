import { useState } from 'react'
import styles from './SearchBar.module.css'
import Icon from '../Icon/Icon'


const SearchBar = (props) => {
  const [formData, setFormData] = useState({query: ''})

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleTalentSearch(formData)
  }
  return (
    <>
    <div className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <input name="query" 
            type="text"
            autoComplete="off"
            value={formData.query} 
            onChange={handleChange}
            className={styles.inputBar}
            />
        <button className={styles.submitBtn} type="submit"><Icon name='MagnifierGlass' /></button>
        
      </form>

    </div>
    </>
  )
}

export default SearchBar