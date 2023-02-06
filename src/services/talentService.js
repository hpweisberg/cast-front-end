import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/talent`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async(id) => {
  try {
    const res = await fetch(`${BASE_URL}/$id`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (talentData) => {
  try {
    const res = await fetch(`${BASE_URL}/${talentData._id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(talentData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

//? Double check this is correct. Should delete a specific talent's experince, education, etc.
const deleteTalentAttribute = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
  console.log(error)
  }
}


export {
  index,
  show,
  update,
  deleteTalentAttribute
}