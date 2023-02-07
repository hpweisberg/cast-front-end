import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom"


const ListDetails = (props) => {
  const location = useLocation()
  const {list} = location.state

  console.log('List Detials Props:', list)
  return ( 
    <h1>List Details Component</h1> 
      
  );
}

export default ListDetails;