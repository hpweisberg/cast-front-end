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
  
  return ( 
    <h1>Talent Search Component</h1>
  );
}

export default TalentSearch;