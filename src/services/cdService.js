import * as tokenService from './tokenService'

//http://localhost:3001/api/cd
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/cd`

const index = async () => {
  try {
    // GET http://localhost:3001/api/cd
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
      // Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJoYXJyeSIsImVtYWlsIjoiaEBtZS5jb20iLCJwcm9maWxlIjoiNjNkYWJiMzRlYTYwYzBkOWI0MGY0NzIzIiwiX2lkIjoiNjNkYWJiMzRlYTYwYzBkOWI0MGY0NzI1IiwiY3JlYXRlZEF0IjoiMjAyMy0wMi0wMVQxOToxOToxNi43MTZaIiwidXBkYXRlZEF0IjoiMjAyMy0wMi0wMVQxOToxOToxNi43MTZaIiwiX192IjowfSwiaWF0IjoxNjc1Mjc5MTU2LCJleHAiOjE2NzUzNjU1NTZ9.1qI8xjicjQ1jSUny5p_yxPGyjlrgBo50wEZAlT5NBq4
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    // GET http://localhost:3001/api/blogs/:id
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return res.json()

  } catch (error) {
    console.log(error)
  }
}

const create = async (blogData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blogData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (blogData) => {
  try {
    const res = await fetch(`${BASE_URL}/${blogData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blogData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteBlog = async (id) => {
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
  create,
  update,
  deleteBlog,
}