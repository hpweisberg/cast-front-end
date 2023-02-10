import { Link } from "react-router-dom"
import Icon from '../../components/Icon/Icon'

import './ListCard.css'

const ListCard = ({ list, profile, handleDeleteList }) => {

return (

    <Link className='card' to={`/cd/${profile.cdAccount._id}/lists/${list._id}`}>
      <button onClick={()=>{handleDeleteList((list?.id))}}>x</button>
      <h4 className="list-card-text">
        {list.titleOfList}
      </h4>
      <div className='people'>
        <p className="list-card-text">{list.talent?.length}</p>
        <Icon name='People' />
      </div> 
    </Link>

)
}

export default ListCard;