// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'


// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import TalentSearch from './pages/TalentSearch/TalentSearch'
import Profile from './pages/Profile/Profile'
import EditProfile from './pages/Profile/EditProfile'
import TalentDetails from './pages/TalentDetails/TalentDetails'
import ListIndex from './pages/ListIndex/ListIndex'
import ListDetails from './pages/ListDetails/ListDetails'

// services
import * as authService from './services/authService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
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
              <TalentSearch />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/profile/edit'
          element={
            <ProtectedRoute user={user}>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/profiles/:profileId"
          element={
            <ProtectedRoute user={user}>
              <TalentDetails />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/lists'
          element={
            <ProtectedRoute user={user}>
              <ListIndex />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/list/:listId'
          element={
            <ProtectedRoute user={user}>
              <ListDetails />
            </ProtectedRoute>
          }
        />   
      </Routes>
    </>
  )
}

export default App
