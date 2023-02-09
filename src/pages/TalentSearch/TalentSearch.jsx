import { useState, useEffect } from "react";
import TalentCard from "../../components/TalentCard/TalentCard";
import Icon from "../../components/Icon/Icon";
import * as talentService from '../../services/talentService'
import styles from './TalentSearch.module.css'

import SearchBar from "../../components/SearchBar/SearchBar";

const TalentSearch = (props) => {
  const [talentSearch, setTalentSearch] = useState([])
  const [talentData, setTalentData] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleTalentSearch = ({ query }) => {
    // debugger
    // take the form Query string form searchBar
    // filter all talent profiles for Query string
    // set useState to all talent profiles that match Query string.
    const filteredList = talentSearch.filter((talent) => {
      return JSON.stringify(talent).toLocaleLowerCase().includes(query.toLocaleLowerCase())
    })
    setTalentSearch(filteredList)
  }

  const handleUserInput = (e) => {
    setInputValue(e.target.value)
  }
  console.log('SEARCH', talentSearch);
  console.log('DATA', talentData);
  
  const handleResetSearchInput = () => {
    setInputValue('')
  }

  const handleClearSearch = () => {
    setTalentSearch(talentData)
    setInputValue('')
  }


  useEffect(() => {
    const fetchTalent = async () => {
      const data = await talentService.index()
      setTalentData(data)
      setTalentSearch(data)
    }
    fetchTalent()
  }, [])



  if (!talentSearch) return "loading"

  return (
    <>
        <button className={styles.btnBackground} onClick={handleClearSearch}>
          <Icon className={styles.btnBackground} name='Reset' />
        </button>
      <div className={styles.searchBarLine}>
        <SearchBar
          className={styles.searchBar}
          value={inputValue}
          handleTalentSearch={handleTalentSearch}
          handleUserInput={handleUserInput}
          handleClearSearch={handleClearSearch}
        />
      </div>

      {talentSearch.map((talent, idx) => (
        <TalentCard key={idx} talent={talent} />
      ))}

    </>
  )
}

export default TalentSearch;