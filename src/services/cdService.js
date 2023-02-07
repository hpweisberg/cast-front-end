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

// const newList = async

export {
  index,
  indexLists,
  // newList,
}