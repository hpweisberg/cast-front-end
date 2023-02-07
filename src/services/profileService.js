import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}


const getProfile = async (profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`
    , {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`},
    }
    )
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function addPhoto(photoData, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}


const update = async (profileData, profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profileData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createTalentProfile = async (talentData, profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/talentAccount`, {
      method: 'POST',
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

const createCDProfile = async (cdData, profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/cdAccount`, {
      method: 'POST',
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

export { getAllProfiles, getProfile, addPhoto, update, createTalentProfile, createCDProfile }
