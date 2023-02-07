// import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import TalentCard from "../../components/TalentCard/TalentCard";


const ListDetails = (props) => {
  const location = useLocation()
  const {list, profile} = location.state

  console.log('List Detials Props:', profile)
  return ( 
    <>
      <h1>List Details Component</h1> 
      <h3>{list.titleOfList}</h3>
      {list.talent.map(talent => (
        <TalentCard key={talent} profile={talent.profile} talent={talent}/>
      ))}
    </>
  );
}

export default ListDetails;