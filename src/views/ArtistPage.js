import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//Components
import CardLarge from '../components/CardLarge/CardLarge';

//Styles
import '../StylesViews/ArtistPage.css';


const ArtistPage = () => {
  const [albumes, setAlbumes] = useState([]);

  const { artist_id } = useParams();

  const initialUrl = `http://127.0.0.1:5000/get_albums/${artist_id}`

  //Fetch a GET albumes x id de artista en BAck

  const fetchAlbums = () => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(result => {
        const albumes = result.items

        setAlbumes(albumes);
        console.log(albumes);
      }


      ) //con este fetch me traje el objeto con todos los albumes de cada artista por ID
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
    <div className='container-fluid artistBox bg-dark'>
      <h1 className='title mb-4'>Albums</h1>
      <div className='d-flex justify-content-center flex-wrap'>
        {
          albumes.map((album, index) => (
            <CardLarge key={index} name={album.name} image={album.images[0].url} album_type={album.album_type} total_tracks={album.total_tracks} album_id={album.id} />

          ))
        }
      </div>




      <NavLink to="/music">
        <button>Back</button>
      </NavLink>



    </div>
  )
}

export default ArtistPage