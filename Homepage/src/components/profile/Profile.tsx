import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';



export const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__description">
                <div className="profile__description-greeting">
                    <h1>Hi there!</h1>
                    <p>My name is Jonnathan</p>
                </div>    
                <ul>
                    <li><a href="tel:12345"><FontAwesomeIcon icon={faPhone}/></a></li>
                    <li><a href="mailto:webmaster@example.com"><FontAwesomeIcon icon={faMailBulk}/></a></li>
                    <li><a href="https://www.linkedin.com/in/jonnathan-edgardo-garcia-galeas-ab9383115" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
                    <li><a href="https://github.com/Jonnathandor" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></li>
                </ul>
            </div>
            <div className="profile__picture">
                <img src="https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186_960_720.jpg" alt="profile picture"/>
            </div>
        </div>
    )
}