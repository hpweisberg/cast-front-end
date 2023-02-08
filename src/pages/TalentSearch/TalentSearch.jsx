import { useState, useEffect } from "react";
import TalentCard from "../../components/TalentCard/TalentCard";
import Icon from "../../components/Icon/Icon";
import * as talentService from '../../services/talentService'
import styles from './TalentSearch.module.css'

import SearchBar from "../../components/SearchBar/SearchBar";


const TalentSearch = (props) => {
  const [talentSearch, setTalentSearch] = useState([])
  const [talentData, setTalentData] = useState([])

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

  const handleClearSearch = () => setTalentSearch(talentData)

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
      <div className={styles.searchContainer}>
        <Icon name='MagnifierGlass' />
        <input type='text' className={styles.searchBar} placeholder={'Juggler'}>
        </input>
        <button onClick={handleClearSearch}>
          clear
        </button>
        <Icon name='Reset' />
      </div>
      <SearchBar handleTalentSearch={handleTalentSearch} />

      <div className={styles.filterContainer}>
        <Icon name='Filter' />
        <select className={styles.filterBar} placeholder={'Filter'}>
        </select>
        <Icon name='Reset' />
      </div>

      {talentSearch.map(profile => (
        <>
          <TalentCard key={profile._id} profile={profile} />

        </>
      )
      )}

      {/* {profiles.map(profile => 
            <p key={profile._id}>
              {profile.talentAccount.unionStatus}
            </p> */}

      {/* )} */}

    </>
  )
}

export default TalentSearch;