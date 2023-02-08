import { useState, useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import styles from "./TalentDetails.module.css"

// Services
import * as talentService from "../../services/talentService"
// import * as profileService from "../../services/profileService"

// components
import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import Training from "../../components/Training/Training";
import Icon from "../../components/Icon/Icon"

const TalentDetails = (props) => {
  const { talentId } = useParams()
  // const [talent, setTalent] = useState(null)
  const [form, setForm] = useState({
    _id: ''
  })
  const location = useLocation()
  const talent = location.state?.talent
  console.log('talent log:::', talent)
  // useEffect(() => {
    // console.log('id:', talentId)
  //   const fetchTalent = async () => {
  //     const data = await talentService.show(talentId)
  //     setTalent(data)
  //   }
  //   fetchTalent()
  // }, [talentId])

  // console.log('Talent State:', talent)
  // console.log('routeType:', routeType)
  console.log('props:', props)
  console.log('talent:', talent)
  console.log('talentId:', talentId)
  
  const handleChange = ({target}) => {
    setForm({...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddToList(form._id, talent._id)
  }
  // console.log('FORM', form._id);
  // console.log('TALENT',talent._id);
  return (
    <>
    {/* <h1>{props.talent.about}</h1> */}
    <h1>test</h1>
    <h1>{talent.about}</h1>
    <h1>{talent.name}</h1>
    <h1>{talent.profile.email}</h1>
        <Experience />
        <Education />
        <Training />

    </>
  )
}

export default TalentDetails;