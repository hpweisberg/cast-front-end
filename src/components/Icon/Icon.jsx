import Add from '../../assets/icons/add.png'
import Age from '../../assets/icons/age.png'
import Back from '../../assets/icons/back.png'
import Blacklist from '../../assets/icons/blacklist.png'
import Calendar from '../../assets/icons/calendar.png'
import Commerical from '../../assets/icons/commerical.png'
import Company from '../../assets/icons/company.png'
import ContactInfo from '../../assets/icons/contactInfo.png'
import CreateList from '../../assets/icons/createList.png'
import Dancer from '../../assets/icons/dancer.png'
import Down from '../../assets/icons/down.png'
import Edit from '../../assets/icons/edit.png'
import Education from '../../assets/icons/education.png'
import Email from '../../assets/icons/email.png'
import Eye from '../../assets/icons/eye.png'
import Film from '../../assets/icons/film.png'
import Filter from '../../assets/icons/filter.png'
import Hair from '../../assets/icons/hair.png'
import Headshot from '../../assets/icons/headshot.png'
import Influencer from '../../assets/icons/influencer.png'
import Location from '../../assets/icons/location.png'
import MagnifierGlass from '../../assets/icons/magnifierGlass.png'
import Man from '../../assets/icons/man.png'
import Menu from '../../assets/icons/menu.png'
import Message from '../../assets/icons/message.png'
import Model from '../../assets/icons/model.png'
import Musican from '../../assets/icons/musican.png'
import Name from '../../assets/icons/name.png'
import Password from '../../assets/icons/password.png'
import People from '../../assets/icons/people.png'
import PhoneNumber from '../../assets/icons/phoneNumber.png'
import Pronoun from '../../assets/icons/pronoun.png'
import Reels from '../../assets/icons/reels.png'
import Remove from '../../assets/icons/remove.png'
import RemoveActor from '../../assets/icons/removeActor.png'
import Reset from '../../assets/icons/reset.png'
import Save from '../../assets/icons/save.png'
import Skills from '../../assets/icons/skills.png'
import Stunt from '../../assets/icons/stunt.png'
import Theater from '../../assets/icons/theater.png'
import Training from '../../assets/icons/training.png'
import Tv from '../../assets/icons/tv.png'
import Union from '../../assets/icons/union.png'
import Unknown from '../../assets/icons/unknown.png'
import Up from '../../assets/icons/up.png'
import VoiceOver from '../../assets/icons/voiceOver.png'
import Website from '../../assets/icons/website.png'






const Icon = ({ category }) => {
  const icons = {
    Add: Add,
    Age: Age,
    Back: Back,
    Blacklist: Blacklist,
    Calendar: Calendar,
    Commerical: Commerical,
    Company: Company,
    ContactInfo: ContactInfo,
    CreateList: CreateList,
    Dancer: Dancer,
    Down: Down,
    Edit: Edit,
    Education: Education,
    Email: Email,
    Eye: Eye,
    Film: Film,
    Filter: Filter,
    Hair: Hair,
    Headshot: Headshot,
    Influencer: Influencer,
    Location: Location,
    MagnifierGlass: MagnifierGlass,
    Man: Man,
    Menu: Menu,
    Message: Message,
    Model: Model,
    Musican: Musican,
    Name: Name,
    Password: Password,
    People: People,
    PhoneNumber: PhoneNumber,
    Pronoun: Pronoun,
    Reels: Reels,
    Remove: Remove,
    RemoveActor: RemoveActor,
    Reset: Reset,
    Save: Save,
    Skills: Skills,
    Stunt: Stunt,
    Theater: Theater,
    Training: Training,
    Tv: Tv,
    Union: Union,
    Unknown: Unknown,
    Up: Up,
    VoiceOver: VoiceOver,
    Website: Website,
  }

  return <img className='icon' src={icons[category]} alt={`A ${category} icon`} />
}

export default Icon