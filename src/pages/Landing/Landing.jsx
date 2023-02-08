import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../assets/logo.png'


// components
import SignupCTA from '../../components/SignupCTA/SignupCTA'



const Landing = ({ user }) => {
  
  const [signupType, setSignupType] = useState(null)

  const handleTalentSignup = (e) => {
    e.preventDefault()
    // setSignupType("talent")
  }

  // const handleCDSignup = (e) => {
  //   e.preventDefault()
  //   setSignupType('CD')
  // }
  
  return (
    <main className={styles.container}>
      
      <img src={logo} alt='CAST logo' />
      
      <h3>Casting made simple</h3>

      <div className={styles.accountContainer}>
        
        <div className={styles.logInCTA}>
          <p>Already have an account?</p>
          <Link to='/login' className={styles.logInBtn}>Log In</Link>
        </div>

        <div className='createAccountCTA'>
          <p>Create your account today</p>
          <Link 
            to='/signup'
            className={styles.actorsBtn}
            state={{signupType: "talent"}}
          >
            Actors
          </Link>
          <Link 
            to='/signup' 
            className={styles.cdBtn}
            state={{signupType: "cd"}}
          >
              Casting Directors
            </Link>
        </div>

      </div>

      <SignupCTA />
    </main>
  )
}

export default Landing
