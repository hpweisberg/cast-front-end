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

  console.log('this is the inputValue:',inputValue)
  return (
    <>
      <div className={styles.searchContainer}>
        <Icon name='MagnifierGlass' />
        <input type='text' className={styles.searchBar} placeholder={'Juggler'}>

        </input>  
      <Icon name='Reset' />

      </div>
      <SearchBar className={styles.searchBar} value={inputValue} handleTalentSearch={handleTalentSearch} handleUserInput={handleUserInput} />
        <button onClick={handleClearSearch}>
          clear
        </button>

      <div className={styles.filterContainer}>
        <Icon name='Filter' />
        <select className={styles.filterBar} placeholder={'Filter'}>
        </select>
        <Icon name='Reset' />
      </div>

      {talentSearch.map((talent, idx) => (
        <TalentCard key={idx} profile={talent}/>
      ))}
    </>
  )
}

export default TalentSearch;