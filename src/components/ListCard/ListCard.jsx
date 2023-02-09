import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import * as cdService from '../../services/cdService'
import Icon from '../../components/Icon/Icon'

import './ListCard.css'

// import { useParams } from "react-router-dom"
// import Icon from '../../components/Icon/Icon'
// import TalentSearch from "../../pages/TalentSearch/TalentSearch";

// import styles from './ListCard.module.css'

const ListCard = ({ list, profile, handleDeleteList }) => {

return (

    <Link className='card'to={`/cd/${profile.cdAccount._id}/lists/${list._id}`}>
      <button onClick={()=>{handleDeleteList((list?.id))}}>x</button>
      <h4>
        {list.titleOfList}
      </h4>
      <div className='people'>
        <p>{list.talent?.length}</p>
        <Icon name='People' />
      </div>  
    </Link>

)
}

export default ListCard;