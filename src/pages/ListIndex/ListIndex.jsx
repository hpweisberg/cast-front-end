import { useState, useEffect } from 'react'
import ListCard from "../../components/ListCard/ListCard";
import * as cdService from '../../services/cdService'

import { useNavigate, useParams } from 'react-router-dom';

const ListIndex = ({profile, lists, handleCreateList}) => {
  // const [lists, setLists] = useState([])
  const [newListForm, setNewListForm] = useState({
    titleOfList: '',
    talent: [],
    notes: ''
  })

  const { id } = useParams()

  // useEffect(() => {
  //   const fetchLists = async () => {
  //     const lists = await cdService.indexLists(id)
  //     setLists(lists)
  //   }
  //   fetchLists()
  // }, [id])
  
  const handleChange = ({target}) => {
    // target is event.target
    // const { target } = event
    setNewListForm({ ...newListForm, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCreateList(newListForm)
  }
  console.log(lists);
  // const handleCreateList = async (e) => {
  //   e.preventDefault()
  //   const newList = await cdService.newList(profile.cdAccount, newListForm)
  //   setLists([...lists, newList])
  //   navigate(`/cd/${profile.cdAccount}/lists`)
  // }
  // console.log('form', newListForm);
  
  return ( 
    <>
      <h1>List Index</h1> 
      {lists.map(list => (
        <ListCard profile={profile} list={list} key={list._id}/>
      ))}
      <h1>New List</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="titleOfList"
          id="title-input"
          placeholder="Title of List"
          onChange={handleChange}
        />
        <button type='submit'>
          Create New List
        </button>
      </form>
    </>
  );
}

export default ListIndex;