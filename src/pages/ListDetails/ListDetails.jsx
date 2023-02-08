import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import TalentCard from "../../components/TalentCard/TalentCard";
import * as cdService from '../../services/cdService'



const ListDetails = (props) => {
  const location = useLocation()
  const { shownList } = location.state
  console.log(shownList);


  // console.log('List Details Props:', profile)

  return ( 
    <>
      <h1>List Details Component</h1> 
      <h3>{shownList.titleOfList}</h3>
      {shownList.talent.map(talent => (
        <TalentCard key={talent} profile={talent.profile} talent={talent._id}/>
      ))}
    </>
  );
}

export default ListDetails;