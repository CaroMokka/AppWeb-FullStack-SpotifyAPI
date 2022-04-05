import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
//import { useParams } from 'react-router-dom';

//Components
import Card from '../components/Card.js/Card';
import Modal from '../components/Modal/Modal';
//Styles
import '../StylesViews/ArtistPage.css';

const ArtistPage = () => {

  const initialUrl = "http://127.0.0.1:5000/get_albums"

  const fetchAlbums = () => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  useEffect(() => {
    fetchAlbums(initialUrl);
  }, [])





  return (
    <div className='container artistBox'>
      <h1 className='title'>Albums</h1>
      <Card />
      <div className='Albums text-white'>
        Aqui van los albums
      </div>
      <Modal />
      <NavLink to="/music">
        <button>Back</button>
      </NavLink>



    </div>
  )
}

export default ArtistPage