import { useState } from 'react'
import ListCard from "../../components/ListCard/ListCard";
import * as React from 'react';
import styles from './ListIndex.module.css'


import './ListIndex.css'


const ListIndex = ({ profile, lists, handleCreateList, handleDeleteList }) => {

  const [newListForm, setNewListForm] = useState({
    titleOfList: ''
  })

  const handleChange = ({ target }) => {
    setNewListForm({ ...newListForm, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCreateList(newListForm)
  }

  return (
    <>
      {/* {
        profile.isCd
      ? */}
        <div id='list-index' className={styles.container}>
          <h1>New List</h1>
          <form onSubmit={handleSubmit} className="new-list-group">
            <input
              required
              type="text"
              name="titleOfList"
              id="title-input"
              placeholder="Title of List"
              onChange={handleChange}
              className="list-input"
            />
            <button variant="contained" id="submit" type="submit">
              Create New List
            </button>
          </form>
        </div>
      {/* :
        <h3 id='not-cd' className={styles.container}>Make a Casting Director account!</h3>
      } */}
      <div className={styles.container}>

        <h1>Your Lists</h1>

        {
          (lists.length)
            ?
            lists.map((list, idx) => (
              <ListCard
                profile={profile}
                list={list}
                key={idx}
                handleDeleteList={handleDeleteList}
              />
            ))
            :
            <h3>Create a List!</h3>
        }

      </div>
    </>
  );
}

export default ListIndex;