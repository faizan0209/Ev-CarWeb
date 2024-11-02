import React from 'react';
import './Hero.css';
import arrow from './Assets/arrow_btn.png';
import play from './Assets/play_icon.png';
import pause from './Assets/pause_icon.png';

const Hero = ({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) => {
  return (
    <div className='hero'>
      <div className="heroText">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="heroExplore">
        <p>Explore the Features</p>
        <img src={arrow} alt="Explore" />
      </div>
      <div className="hero-dot-Play">
        <ul className='hero-dots'>
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "dots-plays orange" : "dots-plays"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "dots-plays orange" : "dots-plays"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "dots-plays orange" : "dots-plays"}></li>
        </ul>
        <div className="heroPlay">
          <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause : play} alt="Play/Pause" />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
