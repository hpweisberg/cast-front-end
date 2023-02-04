import styles from './Landing.module.css'

// components
import SignupCTA from '../../components/SignupCTA/SignupCTA'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <SignupCTA />
    </main>
  )
}

export default Landing
