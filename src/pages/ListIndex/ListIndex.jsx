import { useState, useEffect } from 'react'
import ListCard from "../../components/ListCard/ListCard";
import * as cdService from '../../services/cdService'

import { useParams } from 'react-router-dom';

const ListIndex = () => {
  const [lists, setLists] = useState([])

  const { id, talentId } = useParams()

  useEffect(() => {
    const fetchLists = async () => {
      const lists = await cdService.indexLists(id)
      setLists(lists)
    }
    fetchLists()
  }, [id])



  console.log(lists);

  return ( 
    <>
      <h1>List Index</h1> 
      {lists.map(list => (
        <ListCard list={list} key={list._id}/>
      ))}
    </>
  );
}

export default ListIndex;