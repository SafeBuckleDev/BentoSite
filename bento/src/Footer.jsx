import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>{
    return(
        <footer>
            <ul className='socials'>
                <li>
                    <a href='https://www.linkedin.com/in/sander-meijer-266641266/'><FontAwesomeIcon className="icon" icon={faLinkedin} mask={faSquareFull}/></a>
                </li>
                <li>
                    <a href='https://github.com/SafeBuckleDev'><FontAwesomeIcon className="icon" icon={faGithub} mask={faSquareFull}/></a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;