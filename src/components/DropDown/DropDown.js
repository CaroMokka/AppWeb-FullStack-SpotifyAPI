import React, { useState, useEffect } from 'react'
//---> Components
import Card from '../Card.js/Card';
//---> Styles
import './DropDown.css'



const DropDown = () => {
    const [artists, setArtists] = useState([]);

    const initialUrl = "http://127.0.0.1:5000/get_artists";

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




/* <div className='row'>

<div className='col col-md-6'>
    <div className="dropdown">
        <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            Focus Time
        </button>
        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenu2">
            <li><button className="dropdown-item" type="button">Megadeth</button></li>
            <li><button className="dropdown-item" type="button">Metallica</button></li>
            <li><button className="dropdown-item" type="button">Foo Fighters</button></li>
            <li><button className="dropdown-item" type="button"> Nirvana</button></li>
        </ul>
    </div>

</div>
<div className='col col-md-6'>
    <div className="dropdown">
        <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            Hotfixeando-ando
        </button>
        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenu2">
            <li><button className="dropdown-item" type="button">Skrillex</button></li>
            <li><button className="dropdown-item" type="button">Avicii</button></li>
            <li><button className="dropdown-item" type="button">Zomboy</button></li>
            <li><button className="dropdown-item" type="button"> Deorro</button></li>
        </ul>
    </div>

</div>

</div> */