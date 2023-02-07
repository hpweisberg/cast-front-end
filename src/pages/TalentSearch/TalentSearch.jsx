import { useState, useEffect } from "react";
import ListCard from "../../components/ListCard/ListCard";
import * as talentService from '../../services/talentService'


const TalentSearch = (props) => {
  const [talentSearch, setTalentSearch] = useState([])


  useEffect(() => {
    const fetchTalent = async () => {
      const talentData = await talentService.index()
      setTalentSearch(talentData)
    }
    fetchTalent()
  }, [])
  console.log('talent search log:', talentSearch)
  // console.log('profiles log:', profiles)

  if(!talentSearch) return "loading"

  return ( 
    <>
      <h1>Talent Search Component</h1>
        {talentSearch.map(profile => (
          <>
            <ListCard key={profile._id} profile={profile}/>

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