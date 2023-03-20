import React from 'react';
import '../App.css';
import { Button } from './Button';
import './FarmSection.css';
import videos from '../videos/video-1.mp4'

function FarmSection() {
  return (
    <div className='farm-container'>
    <video src={videos} autoPlay loop muted />
        <h1>B Farm</h1>
        <p>What are you waiting for?</p>
        <div className='farm-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            WATCH THE TRAILER<i className='far fa-play-circle' />
          </Button>
        </div>
    </div>
  );
}

export default FarmSection;
