import { Link } from "react-router-dom";
import styles from './Profile.module.css'
import Icon from "../../components/Icon/Icon";

import { useEffect } from "react";
import { useState } from "react";

import './Profile.css'

import * as profileService from '../../services/profileService'

import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education"
import Training from "../../components/Training/Training";


const Profile = (props) => {

  const [profile, setProfile] = useState({})
  const [talentId, setTalentId] = useState(null)
  const [cdId, setCdId] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile(props.user.profile)
      setProfile(profileData)
      if (profileData.isCd) {
        setCdId(profileData.cdAccount)
      } else {
        setTalentId(profileData.talentAccount)
      }
    }
    fetchProfile()
  }, [props.user.profile])

  if (!profile) return "loading"

  return (
    <section className="profileDetails">
      <div className={styles.container}>
        <h1 id="talentName">{profile.name}</h1>
        <p>{profile.pronouns}</p>
        <Link
          id="editLink"
          to="/profile/edit"
          className={styles.editProfileBtn}
          state={{ isCd: profile.isCd, talentId: talentId, cdId: cdId, profile: profile }}
        >
          <Icon name='Edit' />
        </Link>
        {profile.photo && <img src={profile.photo} alt="user talent pic" ></img>}
        <p>{profile.location}</p>
        <p>{profile.phoneNumber}</p>
        <p>{props.user.email}</p>
        <a href={profile.website}>Visit {profile.name}'s website</a>
        {profile.cdAccount && <p>Company {profile.cdAccount.company}</p>}
      </div>

      {profile.talentAccount
        &&
        <>
          <div className={styles.container}>
            <div className={styles.container} id="about-me-details">
              <div id="detail">
                <p>About:</p>
                <p>{profile.talentAccount.about}</p>
              </div>
              <div id="detail">
                <p>Union Status:</p>
                <p>{profile.talentAccount.unionStatus}</p>
              </div>
              <div id="detail">
                <p>Hair:</p>
                <p>{profile.talentAccount.hair}</p>
              </div>
              <div id="detail">
                <p>Eyes:</p>
                <p>{profile.talentAccount.eyes}</p>
              </div>
              <div id="detail">
                <p>Height:</p>
                <p>{profile.talentAccount.height}</p>
              </div>
              <div id="detail">
                <p>Weight:</p>
                <p>{profile.talentAccount.weight}</p>
              </div>
              <div id="detail">
                <p>Skills:</p>
                <p>{profile.talentAccount.skills}</p>
              </div>
              <div id="detail">
                <p>Trades:</p>
                <p>{profile.talentAccount.trades}</p>
              </div>
            </div>
          </div>

          {
            (profile.talentAccount === talentId)
            &&
            <div className={styles.container}>
              <div className="action-btns">
                <Link className="add" to="/profile/add-experience" state={{ talentId: talentId }}>
                  <button class="add-subdocument">Add Experience</button>
                </Link>
                <Link className="add" to="/profile/add-education" state={{ talentId: talentId }}>
                  <button class="add-subdocument">
                    Add Education
                  </button>
                </Link>
                <Link className="add" to="/profile/add-training" state={{ talentId: talentId }}>
                  <button class="add-subdocument">
                    Add Training
                  </button>
                </Link>
              </div>
            </div>
          }


          <div className={styles.container}>
            <div className="experience-section">
              <h2>Experience</h2>

              {profile.talentAccount.experience.map(experience =>
                <div className="subdocument-card">
                  <Experience
                    handleDeleteExperience={props.handleDeleteExperience}
                    key={experience._id}
                    experience={experience}
                    talentId={talentId}
                  />
                  <form onSubmit={() => props.handleDeleteExperience(talentId._id, experience._id)}>
                    <button id="remove" type='submit'>REMOVE RECORD</button>
                  </form>
                </div>
              )}
            </div>
          </div>

          <div className={styles.container}>
            <div className="education-section">
              <h2>Education</h2>
              {profile.talentAccount.education.map(education =>
                <>
                  <Education
                    key={education._id}
                    education={education}
                    talentId={talentId}
                    handleDeleteEducation={props.handleDeleteEducation}
                  />
                  <form onSubmit={() => props.handleDeleteEducation(talentId._id, education._id)}>
                    <button id="remove" type='submit'>REMOVE RECORD</button>
                  </form>
                </>
              )}

            </div>
          </div>

          <div className={styles.container}>
            <div className="training-section">
              <h2>Training</h2>
              {profile.talentAccount.training.map(training =>
                <>
                  <Training
                    key={training._id}
                    training={training}
                    talentId={talentId}
                    handleDeleteTraining={props.handleDeleteTraining}
                  />
                  <form onSubmit={() => props.handleDeleteTraining(talentId._id, training._id)}>
                    <button id="remove" type='submit'>REMOVE RECORD</button>
                  </form>
                </>
              )}

            </div>
          </div>
        </>
      }
    </section>
  );
}

export default Profile;