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

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (talentData) => {
  try {
    const res = await fetch(`${BASE_URL}/${talentData.talentId}`, {
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


const createExperience = async (talentData) => {
  try {
    const res = await fetch(`${BASE_URL}/${talentData.talentProfileId}/experience`, {
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

const createEducation = async (talentData) => {
  try {
    const res = await fetch(`${BASE_URL}/${talentData.talentProfileId}/education`, {
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

const createTraining = async (talentData) => {
  try {
    const res = await fetch(`${BASE_URL}/${talentData.talentProfileId}/training`, {
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

const updateExperience = async (talentData, experienceData) => {
  try {
    const res = await fetch(`${BASE_URL}/${talentData._id}/experience/${experienceData._id}`, {
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

const updateEducation = async (talentData, educationData) => {
  try {
    const res = await fetch(`${BASE_URL}/${talentData._id}/education/${educationData._id}`, {
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

const updateTraining = async (talentData, trainingData) => {
  try {
    const res = await fetch(`${BASE_URL}/${talentData._id}/training/${trainingData._id}`, {
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


const deleteExperience = async (talentId, experienceId) => {
  try {
    const res = await fetch(`${BASE_URL}/${talentId}/experience/${experienceId}`, {
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

const deleteEducation = async (talentId, educationId) => {
  try {
    const res = await fetch(`${BASE_URL}/${talentId}/education/${educationId}`, {
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

const deleteTraining = async (talentId, trainingId) => {
  try {
    const res = await fetch(`${BASE_URL}/${talentId}/training/${trainingId}`, {
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

const searchTalent = async (formData) => {
  try {
    debugger
    const res = await fetch(`${BASE_URL}/${formData.query}`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}



export {
  index,
  show,
  update,
  createExperience,
  createEducation,
  createTraining,
  updateExperience,
  updateEducation,
  updateTraining,
  deleteExperience,
  deleteEducation,
  deleteTraining,
  searchTalent
}