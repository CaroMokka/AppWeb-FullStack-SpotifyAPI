import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//Components
import Card from '../components/Card.js/Card';
import Modal from '../components/Modal/Modal';
//Styles
import '../StylesViews/ArtistPage.css';


const ArtistPage = () => {

  const{ artist_id } = useParams();

  const initialUrl = `http://127.0.0.1:5000/get_albums/${artist_id}`

  const fetchAlbums = () => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(result => console.log(result)) //con este fetch me traje el objeto con todos los albumes de cada artista por ID
      .catch(error => console.log('error', error));
  }
//Aqui tengo que hacer lo mismo que hice con el fetch de artistas
//pintar los albunes psar los props

  useEffect(() => {
    fetchAlbums(initialUrl);
  }, [])



//Aqui tengo que pasar ;los props en el componente card pero con los atributos de albumes.. ejempolo: recorrer con map
//la constatnte albumes y luego pasar {items.name} {item.image} {item.id} etc

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