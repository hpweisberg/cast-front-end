import { useState, useEffect } from "react";
import TalentCard from "../../components/TalentCard/TalentCard";
import Icon from "../../components/Icon/Icon";
import * as talentService from '../../services/talentService'
import styles from './TalentSearch.module.css'


const TalentSearch = (props) => {
  const [talentSearch, setTalentSearch] = useState([])


  useEffect(() => {
    const fetchTalent = async () => {
      const talentData = await talentService.index()
      setTalentSearch(talentData)
    }
    fetchTalent()
  }, [])
  // console.log('talent search log:', talentSearch)
  // console.log('profiles log:', profiles)

  if (!talentSearch) return "loading"

  return (
    <>
      <div className={styles.searchContainer}>
          <Icon name='MagnifierGlass'/>
        <input type='text' className={styles.searchBar} placeholder={'Juggler'}>
        </input>  
      <Icon name='Reset' />
      </div>

      <div className={styles.filterContainer}>
          <Icon name='Filter'/>
        <select className={styles.filterBar} placeholder={'Filter'}>
        </select>
      <Icon name='Reset' />
      </div>

      {talentSearch.map((talent, idx) => (
        <>
          <TalentCard key={idx} talent={talent._id} profile={talent.profile}/>
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