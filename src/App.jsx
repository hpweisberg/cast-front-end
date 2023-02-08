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
import CreateProfile from './pages/Profile/CreateProfile'
import AddExperience from './pages/AddExperience/AddExperience'
import AddEducation from './pages/AddEducation/AddEducation'
import AddTraining from './pages/AddTraining/AddTraining'
// import ListCard from './components/ListCard/ListCard'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as talentService from './services/talentService'
import * as cdService from './services/cdService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState('')
  const [lists, setLists] = useState([])
  
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
  const handleEditTalentProfile = async (talentData) => {
    try {
      await talentService.update(talentData)
      navigate('/profile')
    } catch(error) {
      console.log(error)
    }
  }
  
  const handleEditCDProfile = async (cdData) => {
    try {
      await cdService.update(cdData)
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

  const handleAddExperience = async (experienceData) => {
    try {
      await talentService.createExperience(experienceData)
      navigate('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteExperience = async (talentId, experienceId) => {
    try {
      await talentService.deleteExperience(talentId, experienceId)
      navigate('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddEducation = async (educationData) => {
    try {
      await talentService.createEducation(educationData)
      navigate('/profile')
    } catch (error) {
      console.log(error)
    }
  }
  const handleAddTraining = async (trainingData) => {
    try {
      await talentService.createTraining(trainingData)
      navigate('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await profileService.getProfile(user.profile)
      setProfile(profile)
    }
    if (user) fetchProfile()
  }, [user])
  
  useEffect(() => {
    const fetchLists = async () => {
      const lists = await cdService.indexLists(profile.cdAccount)
      setLists(lists)
    }
    if (profile) fetchLists()
  }, [profile])

  const handleCreateList = async (listData) => {
    const newList = await cdService.newList(profile?.cdAccount, listData)
    setLists([...lists, newList])
  }

  const handleDeleteList = async (listId) => {
    await cdService.deleteList(listId, profile.cdAccount)
    setLists(lists.filter(list => list._id !== listId))
  }
  console.log(lists);
  const handleAddToList = async (listId, talent) => {
    try {
      await cdService.addToList(profile.cdAccount, listId, talent)
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
      {(profile) && <NavBar user={user} profile={profile} handleLogout={handleLogout} />}
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
              <Profile handleDeleteExperience={handleDeleteExperience} user={user}/>
            </ProtectedRoute>
          }
        />
        <Route 
          path='/profile/edit'
          element={
            <ProtectedRoute user={user}>
              <EditProfile 
                handleEditProfile={handleEditProfile}
                handleEditTalentProfile={handleEditTalentProfile}
                handleEditCDProfile={handleEditCDProfile}
              />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/profile/create'
          element={
            <ProtectedRoute user={user}>
              <CreateProfile 
                handleEditProfile={handleEditProfile}
                handleAddTalentProfile={handleAddTalentProfile}
                handleAddCDProfile={handleAddCDProfile}
              />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/profile/add-experience'
          element={
            <ProtectedRoute user={user}>
              <AddExperience handleAddExperience={handleAddExperience}/>
            </ProtectedRoute>
          }
        />
        <Route 
          path='/profile/add-education'
          element={
            <ProtectedRoute user={user}>
              <AddEducation handleAddEducation={handleAddEducation}/>
            </ProtectedRoute>
          }
        />
        <Route 
          path='/profile/add-training'
          element={
            <ProtectedRoute user={user}>
              <AddTraining handleAddTraining={handleAddTraining}/>

            </ProtectedRoute>
          }
        />
        <Route 
          path="/talent/:talentId"
          element={
            <ProtectedRoute user={user}>
              <TalentDetails lists={lists} handleAddToList={handleAddToList} user={user} />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/cd/:id/lists'
          element={
            <ProtectedRoute user={user}>
              <ListIndex 
                handleDeleteList={handleDeleteList}
                handleCreateList={handleCreateList} 
                lists={lists} 
                profile={profile} 
              />
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
