import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import TalentCard from "../../components/TalentCard/TalentCard";
import * as cdService from '../../services/cdService'



const ListDetails = (props) => {
  const [list, setList] = useState(null)
  const { id, listId } = useParams()

  useEffect(() => {
    const fetchList = async () => {
      const listData = await cdService.showList(id, listId)
      console.log('LIST DATA', listData);
      setList(listData)
    }
    fetchList()
  }, [id, listId])

  // console.log('List Details Props:', profile)

  return ( 
    <>
      <h1>List Details Component!</h1> 
      <h3>{list?.titleOfList}</h3>
      {list?.talent.map((talent, idx) => (
        <TalentCard key={talent._id+idx} profile={talent.profile} talent={talent._id}/>
      ))}
    </>
  );
}

export default ListDetails;