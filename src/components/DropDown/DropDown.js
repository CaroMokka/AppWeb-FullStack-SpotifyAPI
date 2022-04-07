import React, { useState, useEffect } from 'react'
//---> Components
import Card from '../Card.js/Card';
//---> Styles
import './DropDown.css'



const DropDown = () => {
    const [artists, setArtists] = useState([]);

    const initialUrl = "http://127.0.0.1:5000/get_artists";

    //Fetch a GET Artist en BAckend

    const fetchArtists = () => {
        fetch(initialUrl)
            .then(response => response.json())
            .then(result => {
                const artistas = result.artists.items //Aqui recorri el array artists

        

                setArtists(artistas);
                console.log(artistas);
            })
            .catch(error => console.log('error', error));
    }


    useEffect(() => {
        fetchArtists(initialUrl);
    }, [])




    return (
        <div className='container d-flex justify-content-center flex-wrap mt-5'>

            {
                artists.map((item, index) => (
                    <Card key={index} name={item.name} image={item.images[2].url} artist_id={item.id}/>

                ))
            }




        </div>

    )
}

export default DropDown



