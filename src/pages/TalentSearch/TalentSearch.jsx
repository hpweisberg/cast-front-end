import { useState, useEffect } from "react";
import * as talentService from '../../services/talentService'


const TalentSearch = () => {
  const [talentSearch, setTalentSearch] = useState([])

  useEffect(() => {
    const fetchTalent = async () => {
      const talentData = await talentService.index()
      setTalentSearch(talentData)
    }
    fetchTalent()
  }, [])
  console.log('talent search log:', talentSearch)
  return ( 
    <>
      <h1>Talent Search Component</h1>
      {talentSearch.length ?
        <>
        {talentSearch.map(talent => 
          <p key={talent._id}>
            {talent.name}
          </p>
          )}
          </>
          :
          <p>No talent accounts have been created yet</p>
        }
    </>
  )
}

export default TalentSearch;