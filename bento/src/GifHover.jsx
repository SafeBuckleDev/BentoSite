import React, { useState } from "react";
import './GifHoverer.css';

const GifHoverer = ({vid, title}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = (videoElement) => {
        videoElement.play();
    };
    
    const handleMouseLeave = (videoElement) => {
        videoElement.pause();
        videoElement.currentTime = videoElement.currentTime; // Keeps the current frame
    };

    const handleContextMenu = (e) => {
        e.preventDefault(); // Prevents the context menu from appearing
    };

    return(
        <div className='Hoverer'>
            <h2 className="SpecialTekst">{title}</h2>
            <div>
                <video
                    src={vid}
                    loop
                    muted
                    style={{ width: '100%', height: 'auto' }}
                    onMouseEnter={(e) => handleMouseEnter(e.target)}
                    onMouseLeave={(e) => handleMouseLeave(e.target)}
                    onContextMenu={handleContextMenu}
                />
            </div>
        </div>
    );
}

export default GifHoverer;