import { useState } from 'react'
import Icon from '../../components/Icon/Icon'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'


const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <h1>Log In</h1>
        {/* <Icon name={"back"}/> */}
        <Icon name={"Back"} />
      <p>{message}</p>
      <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage}
      />
    </main>
  )
}

export default LoginPage
