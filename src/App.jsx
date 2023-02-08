// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import SearchBar from './components/SearchBar/SearchBar'


// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import TalentSearch from './pages/TalentSearch/TalentSearch'
import Profile from './pages/Profile/Profile'
import EditProfile from './pages/Profile/EditProfile'
import TalentDetails from './pages/TalentDetails/TalentDetails'
import ListIndex from './pages/ListIndex/ListIndex'
import ListDetails from './pages/ListDetails/ListDetails'
// import ListCard from './components/ListCard/ListCard'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
// import * as cdService from './services/cdService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState('')
  const navigate = useNavigate()

  
  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }
  
  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }
  
  const handleEditProfile = async (profileData) => {
    try {
      await profileService.update(profileData, user.profile)
      navigate('/profile')
    } catch(error) {
      console.log(error)
    }
  }
  
  const handleAddTalentProfile = async (talentData) => {
    try {
      await profileService.createTalentProfile(talentData, user.profile)
      navigate('/profile')
    } catch(error) {
      console.log(error)
    }
  }
  
  const handleAddCDProfile = async (cdData) => {
    try {
      await profileService.createCDProfile(cdData, user.profile)
      navigate('/profile')
    } catch(error) {
      console.log(error)
    }
  }
  
  
  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const profile = await profileService.getProfile(user.profile)
  //     setProfile(profile)
  //   }
  //   fetchProfile()
  // }, [user.profile])

  return (
    <>
      <NavBar user={user} profile={profile} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/talent"
          element={
            <ProtectedRoute user={user}>
              <TalentSearch user={user}/>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              {/* <Profile profile={profile}/> */}
              <Profile user={user}/>
            </ProtectedRoute>
          }
        />
        <Route 
          path='/profile/edit'
          element={
            <ProtectedRoute user={user}>
              <EditProfile 
                handleEditProfile={handleEditProfile}
                handleAddTalentProfile={handleAddTalentProfile}
                handleAddCDProfile={handleAddCDProfile}
              />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/talent/:talentId"
          element={
            <ProtectedRoute user={user}>
              <TalentDetails user={user} />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/cd/:id/lists'
          element={
            <ProtectedRoute user={user}>
              <ListIndex profile={profile} />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/cd/:id/lists/:listId'
          element={
            <ProtectedRoute user={user}>
              <ListDetails />
            </ProtectedRoute>
          }
        /> 
        <Route
        path='/SearchBar' element={<SearchBar/>}
        />  
      </Routes>
    </>
  )
}

export default App
