import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'
import { useLocation } from "react-router-dom";



const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  const location = useLocation()
  const signupType = location.state?.signupType

  return (


    <main className={styles.container}>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <SignupForm {...props} 
        updateMessage={updateMessage}
        signupType={signupType} 
      />
    </main>
  )
}

export default Signup
