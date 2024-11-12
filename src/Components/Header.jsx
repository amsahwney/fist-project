import React, { useState } from 'react';
import excitedImg from '../assets/excited.svg';
import excitedHoverImg from '../assets/excited-hover.svg';
import proudImg from '../assets/proud.svg';
import proudHoverImg from '../assets/proud-hover.svg';
import stressedImg from '../assets/stressed.svg';
import stressedHoverImg from '../assets/stressed-hover.svg';
import tiredImg from '../assets/tired.svg';
import tiredHoverImg from '../assets/tired-hover.svg';
import upsetImg from '../assets/upset.svg';
import upsetHoverImg from '../assets/upset-hover.svg';
import './header.css';

function Header() {
  const [emotionImages, setEmotionImages] = useState({
    excited: excitedImg,
    proud: proudImg,
    stressed: stressedImg,
    tired: tiredImg,
    upset: upsetImg,
  });

  const handleMouseEnter = (emotion) => {
    setEmotionImages((prevImages) => ({
      ...prevImages,
      [emotion]: getHoverImage(emotion),
    }));
  };

  const handleMouseLeave = (emotion) => {
    setEmotionImages((prevImages) => ({
      ...prevImages,
      [emotion]: getRegularImage(emotion),
    }));
  };

  const getRegularImage = (emotion) => {
    switch (emotion) {
      case 'excited':
        return excitedImg;
      case 'proud':
        return proudImg;
      case 'stressed':
        return stressedImg;
      case 'tired':
        return tiredImg;
      case 'upset':
        return upsetImg;
      default:
        return excitedImg;
    }
  };

  const getHoverImage = (emotion) => {
    switch (emotion) {
      case 'excited':
        return excitedHoverImg;
      case 'proud':
        return proudHoverImg;
      case 'stressed':
        return stressedHoverImg;
      case 'tired':
        return tiredHoverImg;
      case 'upset':
        return upsetHoverImg;
      default:
        return excitedHoverImg;
    }
  };

  return (
    <div
      className="background-img"
      style={{
        backgroundImage: 'url(src/assets/meadow-transparency.svg)',
      }}
    >
      <h1 className="prompt">how are you?</h1>
      <div className="puppies-container">
        {['upset', 'tired', 'excited', 'proud', 'stressed'].map((emotion) => (
          <a href={`emotions/${emotion}`} key={emotion}>
            <div className="emotion-item">
              <img
                src={emotionImages[emotion]}
                onMouseEnter={() => handleMouseEnter(emotion)}
                onMouseLeave={() => handleMouseLeave(emotion)}
                alt={emotion}
                title={`I am ${emotion}`}
              />
              <p className="emotion-text">{emotion}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;




