import { useState, useEffect } from 'react'
import ListCard from "../../components/ListCard/ListCard";
import * as cdService from '../../services/cdService'

import { useParams } from 'react-router-dom';

const ListIndex = ({profile}) => {
  const [lists, setLists] = useState([])
  const [form, setForm] = useState({
    titleOfList: '',
    talent: [],
    notes: ''
  })

  const { id } = useParams()

  useEffect(() => {
    const fetchLists = async () => {
      const lists = await cdService.indexLists(id)
      setLists(lists)
    }
    fetchLists()
  }, [id])

  console.log('lists', lists);

  const handleChange = ({target}) => {
    // target is event.target
    // const { target } = event
    setForm({ ...form, [target.name]: target.value })
  }

  // const handleCreateList = async (newListForm) => {
  //   newListForm.preventDefault()
  //   const newlist = await cdService.create(form)
  //   setLists([...lists, newlist])
  // }

  return ( 
    <>
      <h1>List Index</h1> 
      {lists.map(list => (
        <ListCard profile={profile} list={list} key={list._id}/>
      ))}
      <h1>New List</h1>
      {/* <form onSubmit={handleCreateList}>
        <button></button>
      </form> */}
    </>
  );
}

export default ListIndex;