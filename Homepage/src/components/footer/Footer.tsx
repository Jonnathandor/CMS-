import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__logo"><img src="https://cdn.pixabay.com/photo/2017/01/08/21/37/flame-1964066_960_720.png" alt="web-logo" /></div>
            <div className="footer__text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing elit adipiscing elit</p></div>
            <ul>
                <li><a href="tel:12345"><FontAwesomeIcon icon={faPhone}/></a></li>
                <li><a href="mailto:webmaster@example.com"><FontAwesomeIcon icon={faMailBulk}/></a></li>
                <li><a href="https://www.linkedin.com/in/jonnathan-edgardo-garcia-galeas-ab9383115" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
                <li><a href="https://github.com/Jonnathandor" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></li>
            </ul>
        </div>
    )
} 