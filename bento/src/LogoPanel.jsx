import './LogoPannel.css';
import Typewriter from 'typewriter-effect/dist/core';

const LogoPannel = ({LogoTekst, logoDescription}) =>{
    return(
        <div className="logo-banner">
            <h1>{LogoTekst}</h1>
            <p>{logoDescription}</p>
        </div>
    );
}

export default LogoPannel;