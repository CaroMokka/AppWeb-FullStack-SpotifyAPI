import React from 'react';
import CoverVideo from '../../media/music01.mp4';
import './Cover.css';

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={CoverVideo} autoPlay loop muted />
      <h1 className="cover-h1">LA MÚSICA ES TODO</h1>
      



    </div>
  )
}

export default Cover