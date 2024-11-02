import React from 'react';
import './Background.css';
import video1 from './Assets/video1.mp4';
import img1 from './Assets/image1.png';
import img2 from './Assets/image2.png';
import img3 from './Assets/image3.png';

function Background({ playStatus, heroCount }) {
    const renderBackground = () => {
        if (playStatus) {
            return (
                <video className="background fade-in" autoPlay loop muted>
                    <source src={video1} type="video/mp4" />
                </video>
            );
        } else {
            const images = [img1, img2, img3];
            return (
                <img
                    src={images[heroCount]} 
                    className="background fade-in" 
                    alt={`Hero ${heroCount}`} 
                />
            );
        }
    };

    return renderBackground() || null;
}

export default Background;
