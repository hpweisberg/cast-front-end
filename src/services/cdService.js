import * as tokenService from './tokenService'

//http://localhost:3001/api/cd
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/cd`

const index = async () => {
  try {
    // GET http://localhost:3001/api/cd
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const indexLists = async (cdId) => {
  try {
    //GET http://localhost:3001/api/cd/:id/lists
    const res = await fetch(`${BASE_URL}/${cdId}/lists`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const update = async (cdData) => {
  try {
    const res = await fetch(`${BASE_URL}/${cdData.cdId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cdData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const showList = async (cdId, listId) => {
  try {
    //GET http://localhost:3001/api/cd/:id/lists
    const res = await fetch(`${BASE_URL}/${cdId}/lists/${listId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const newList = async (cdId, newListForm) => {
  try {
    const res = await fetch(`${BASE_URL}/${cdId}/lists`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newListForm)
    })
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

const addToList = async (cdId, listId, talent) => {
  console.log(cdId, listId, talent);
  try {
    const res = await fetch(`${BASE_URL}/${cdId}/lists/${listId}/${talent}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error);
  }
}

export {
  index,
  indexLists,
  showList,
  newList,
  update,
  addToList,
}