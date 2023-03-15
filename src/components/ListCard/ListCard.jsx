import { Link } from "react-router-dom"
import Icon from '../../components/Icon/Icon'

import './ListCard.css'

const ListCard = ({ list, profile, handleDeleteList }) => {

return (
    <div className='card'>

      <button onClick={()=>{handleDeleteList((list?._id))}}>x</button>
      <h4>
        <Link to={`/cd/${profile.cdAccount._id}/lists/${list._id}`}>
          {list.titleOfList}
        </Link>
      </h4>
      <div className='people'>
        <p>{list.talent?.length}</p>
        <Icon name='People' />
      </div> 
    </div>

)
}

export default ListCard;