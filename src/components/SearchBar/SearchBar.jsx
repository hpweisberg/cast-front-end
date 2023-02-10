import { useState } from 'react'
import styles from './SearchBar.module.css'
import Icon from '../Icon/Icon'

const SearchBar = (props) => {
  const [formData, setFormData] = useState({ query: '' })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleTalentSearch(formData)
  }

  const resetForm = (e) => {
    setFormData({ query: '' })
    props.handleClearSearch()
  }

  return (
    <>
      <div className={styles.searchContainer}>
        <form onSubmit={handleSubmit}>
          <button className={styles.submitBtn} type="submit"><Icon name='MagnifierGlass' />
          </button>
          <input name="query"
            type="text"
            autoComplete="off"
            value={formData.query}
            onChange={handleChange}
            className={styles.inputBar}
            placeholder="Enter search query..."
          />
        </form>
        <button onClick={resetForm} className={styles.btnBackground}>
          <Icon className={styles.btnBackground} name='Reset' />
        </button>

      </div>
    </>
  )
}

export default SearchBar