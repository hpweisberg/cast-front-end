import styles from './Landing.module.css'
import { NavLink } from 'react-router-dom'

// components
import SignupCTA from '../../components/SignupCTA/SignupCTA'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      
      <img src='Logo' alt='CAST logo' />
      
      <h3>Casting made simple</h3>

      <div className={styles.accountContainer}>
        
        <div className='logInCTA'>
          <p>Already have an account?</p>
          <NavLink to='/login' className='logInBtn'>Log In</NavLink>
        </div>

        <div className='createAccountCTA'>
          <p>Create your account today</p>
          <NavLink to='' className={styles.actorsBtn}>Actors</NavLink>
          <NavLink to='' className={styles.cdBtn}>Casting Directors</NavLink>
        </div>

      </div>

      <SignupCTA />
    </main>
  )
}

export default Landing
