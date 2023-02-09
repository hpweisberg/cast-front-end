import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Icon from '../Icon/Icon'
import logo from '../../assets/logo.png'
// import { login } from '../../services/authService'

const NavBar = ({ user, profile, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    console.log('toggle is working')
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className={styles.navRow}>

        <div className={styles.menuIcon} onClick={toggle}>

          <Icon name='Menu' />
        </div>
        {isOpen && (
          //? Turnery is stopping styles from working. animation is not working.
          <nav className={`${styles.menu} ${isOpen ? styles.open : styles.menu}`}>

          {user ?
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/talent'>Talent Search</Link></li>
              {
                (user.profile.cdAccount)
                &&
                <li><Link to={`/cd/${profile.cdAccount?._id}/lists`}>Lists</Link></li>
              }
              <li><Link to='/profile'>Profile</Link></li>
              {/* Items below here will be removed in final app */}
              <li><Link to='/profiles'>Profiles</Link></li>
              <li><Link to='/change-password'>Change Password</Link></li>
              <li><Link to='' onClick={handleLogout}>LOG OUT</Link></li>
            </ul>
            :
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/login'>Log In</Link></li>
            </ul>
          }


          </nav>
        )}
          <Link to='/'>
            <img className={styles.logo} src={logo} alt="cast logo" />
          </Link>
      </div>
    </>
  )
}

export default NavBar
