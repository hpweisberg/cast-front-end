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
      setList(listData)
    }
    fetchList()
  }, [id, listId])

  const handleRemoveFromList = async (listId, talentId) => {
    await cdService.removeFromList(props.cd._id, listId, talentId)
    const updatedList = {
      ...list,
      talent: list.talent.filter(talent => talent._id !== talentId)
    }
    setList(updatedList)
    props.setLists(props.lists.map((l) => {
      return l._id === list._id
        ? updatedList
        : l
    }))
  }

  if (!list) return <h1>loading</h1>

  return (
    <>
      <h1>{list?.titleOfList}</h1>
      {list.talent.map((talent, idx) => (
        <div key={talent._id + idx}>
          <TalentCard 
            list={list} 
            handleRemoveFromList={handleRemoveFromList} 
            profile={talent.profile} 
            talent={talent} 
          />
        </div>
      ))}

    </>
  );
}

export default ListDetails;