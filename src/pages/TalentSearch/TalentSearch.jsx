import { useState, useEffect } from "react";
import TalentCard from "../../components/TalentCard/TalentCard";
import * as talentService from '../../services/talentService'
import styles from './TalentSearch.module.css'

import SearchBar from "../../components/SearchBar/SearchBar";

const TalentSearch = (props) => {
  const [talentSearch, setTalentSearch] = useState([])
  const [talentData, setTalentData] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleTalentSearch = ({ query }) => {
    const filteredList = talentSearch.filter((talent) => {
      return JSON.stringify(talent).toLocaleLowerCase().includes(query.toLocaleLowerCase())
    })
    setTalentSearch(filteredList)
  }

  const handleUserInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleClearSearch = (e) => {
    setTalentSearch(talentData)
  }

  useEffect(() => {
    const fetchTalent = async () => {
      const data = await talentService.index()
      setTalentData(data)
      setTalentSearch(data.sort((a, b) => a.name.localeCompare(b.name)))
    }
    fetchTalent()
  }, [])

  if (!talentSearch) return "loading"

  return (
    <>
      <SearchBar
        className={styles.searchBar}
        value={inputValue}
        handleTalentSearch={handleTalentSearch}
        handleUserInput={handleUserInput}
        handleClearSearch={handleClearSearch}
      />
      {talentSearch.map((talent, idx) => (
        <TalentCard key={idx} talent={talent} />
      ))}
    </>
  )
}

export default TalentSearch;