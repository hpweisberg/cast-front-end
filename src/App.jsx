// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
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
      const updatedProfile = await profileService.update(profileData, user.profile)
      setProfile(updatedProfile)
      navigate('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddTalentProfile = async (talentData) => {
    try {
      const updated = await profileService.createTalentProfile(talentData, user.profile)
      setProfile(updated)
      navigate('/profile')
    } catch (error) {
      console.log(error)
    }
  }
  const handleEditTalentProfile = async (talentData) => {
    try {
      const updatedTalent = await talentService.update(talentData)
      profile.talentAccount = updatedTalent
      navigate('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  const handleEditCDProfile = async (cdData) => {
    try {
      const updatedCD = await cdService.update(cdData)
      profile.cdAccount = updatedCD
      navigate('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddCDProfile = async (cdData) => {
    try {
      const updated = await profileService.createCDProfile(cdData, user.profile)
      setProfile(updated)
      navigate('/profile')
    } catch (error) {
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

  const handleDeleteEducation = async (talentId, educationId) => {
    try {
      await talentService.deleteEducation(talentId, educationId)
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

  const handleDeleteTraining = async (talentId, trainingId) => {
    try {
      await talentService.deleteTraining(talentId, trainingId)
      navigate('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await profileService.getProfile(user.profile)
      console.log('SET PROFILE', profile)
      setProfile(profile)
    }
    if (user) fetchProfile()
  }, [user])

  useEffect(() => {
    const fetchLists = async () => {
      const lists = await cdService.indexLists(profile.cdAccount._id)
      setLists(lists)
    }
    if (profile?.cdAccount) fetchLists()
  }, [profile])

  const handleCreateList = async (listData) => {
    const newList = await cdService.newList(profile?.cdAccount._id, listData)
    setLists([...lists, newList])
  }

  const handleDeleteList = async (listId) => {
    await cdService.deleteList(listId, profile.cdAccount._id)
    setLists(lists.filter(list => list._id !== listId))
  }

  const handleAddToList = async (listId, talent, cdAccountId) => {
    try {
      const updatedList = await cdService.addToList(profile.cdAccount._id, listId, talent)
      setLists(lists.map((l) => {
        return l._id === updatedList._id
          ? updatedList
          : l
      }))
      navigate(`/cd/${cdAccountId}/lists/${listId}`)
    } catch (error) {
      console.log(error);
    }
  }
  console.log('PROFILE', profile)
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
              <TalentSearch user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              {/* <Profile profile={profile}/> */}
              <Profile
                handleDeleteExperience={handleDeleteExperience}
                user={user}
                handleDeleteEducation={handleDeleteEducation}
                handleDeleteTraining={handleDeleteTraining}
                profile={profile}
              />
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
              <AddExperience handleAddExperience={handleAddExperience} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile/add-education'
          element={
            <ProtectedRoute user={user}>
              <AddEducation handleAddEducation={handleAddEducation} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile/add-training'
          element={
            <ProtectedRoute user={user}>
              <AddTraining handleAddTraining={handleAddTraining} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/talent/:talentId"
          element={
            <ProtectedRoute user={user}>
              <TalentDetails lists={lists} handleAddToList={handleAddToList} user={user} profile={profile} />
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
              <ListDetails lists={lists} setLists={setLists} cd={profile.cdAccount} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/SearchBar' element={<SearchBar />}
        />
      </Routes>
    </>
  )
}

export default App
