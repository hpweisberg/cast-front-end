import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Landing = ({ user }) => {

  return (
    <main className={styles.container}>
      <img src={logo} alt='CAST logo' />
      <h3>Casting made simple</h3>
      {(!user)
        ?
        <div className={styles.accountContainer}>
          <div className={styles.logInCTA}>
            <p>Already have an account?</p>
            <Link to='/login' className={styles.logInBtn}>Log In</Link>
          </div>
          <div className={styles.createAccountCTA}>
            <p>Create your account today</p>
            <div>
              <Link
                to='/signup'
                className={styles.actorsBtn}
                state={{ signupType: "talent" }}
              >
                Actors
              </Link>
              <Link
                to='/signup'
                className={styles.cdBtn}
                state={{ signupType: "cd" }}
              >
                Casting Directors
              </Link>
            </div>
          </div>
        </div>
        :
        <>
          <Link to='/profile' className={styles.logInBtn}>View Your Profile</Link>
          <Link to='/talent' className={styles.logInBtn}>Check Out Talent</Link>
        </>
      }
    </main>
  )
}

export default Landing
