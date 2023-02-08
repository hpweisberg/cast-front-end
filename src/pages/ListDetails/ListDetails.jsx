import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import TalentCard from "../../components/TalentCard/TalentCard";
import * as cdService from '../../services/cdService'



const ListDetails = (props) => {
  const location = useLocation()
  const { list, profile } = location.state
  // const [list, setList] = useState({})
  // console.log(props);
  // useEffect(() => {
  //   const fetchList = async () => {
  //     const list = await cdService.showList(profile.cdAccount, props.key)
  //     setList(list)
  //     console.log('details',props);
  //   }
  //   fetchList()
  // }, [props.profile.cdAccount, props.key])

  // console.log('List Details Props:', profile)
  return ( 
    <>
      <h1>List Details Component</h1> 
      <h3>{list.titleOfList}</h3>
      {list.talent.map(talent => (
        <TalentCard key={talent._id} profile={talent.profile} talent={talent._id}/>
      ))}
    </>
  );
}

export default ListDetails;