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
import "./header.css" 

function Header() {
  const [emotionImages, setEmotionImages] = useState({
    excited: excitedImg,
    proud: proudImg,
    stressed: stressedImg,
    tired: tiredImg,
    upset: upsetImg,
  });

  const [hoveredEmotion, setHoveredEmotion] = useState(''); 

  const handleMouseEnter = (emotion) => {
    setHoveredEmotion(emotion);

    setEmotionImages((prevImages) => ({
      ...prevImages,
      [emotion]: getHoverImage(emotion), 
    }));
  };

  
  const handleMouseLeave = (emotion) => {
    setHoveredEmotion('');
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
    <>
      <div className="background-img" style={{ backgroundImage: 'url(src/assets/meadow-homepage.jpeg)' }}>
        <div className='puppies-container'>
          <a href="emotions/excited">
            <img
              src={emotionImages.excited}
              onMouseEnter={() => handleMouseEnter('excited')}
              onMouseLeave={() => handleMouseLeave('excited')}
              alt="Excited"
              title={hoveredEmotion === 'excited' ? 'Excited' : ''} 
            />
          </a>
          <a href="emotions/proud">
            <img
              src={emotionImages.proud}
              onMouseEnter={() => handleMouseEnter('proud')}
              onMouseLeave={() => handleMouseLeave('proud')}
              alt="Proud"
              title={hoveredEmotion === 'proud' ? 'Proud' : ''} 
            />
          </a>
          <a href="emotions/stressed">
            <img
              src={emotionImages.stressed}
              onMouseEnter={() => handleMouseEnter('stressed')}
              onMouseLeave={() => handleMouseLeave('stressed')}
              alt="Stressed"
              title={hoveredEmotion === 'stressed' ? 'Stressed' : ''} 
            />
          </a>
          <a href="emotions/tired">
            <img
              src={emotionImages.tired}
              onMouseEnter={() => handleMouseEnter('tired')}
              onMouseLeave={() => handleMouseLeave('tired')}
              alt="Tired"
              title={hoveredEmotion === 'tired' ? 'Tired' : ''} 
            />
          </a>
          <a href="emotions/upset">
            <img
              src={emotionImages.upset}
              onMouseEnter={() => handleMouseEnter('upset')}
              onMouseLeave={() => handleMouseLeave('upset')}
              alt="Upset"
              title={hoveredEmotion === 'upset' ? 'Upset' : ''} 
            />
          </a>
        </div>
        <h1 className='prompt'>How are you?</h1>
      </div>
    </>
  );
}

export default Header;



