import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';

const Card = ({ name, image, artist_id }) => {

    const url_artist = `/artist/${artist_id}`

    return (

        <div className="card m-2 text-center" style={{ width: '12rem' }}>
            <NavLink to={url_artist}   >
                <img src={image} className="card-img-top" alt="..." />
            </NavLink>

            <div className="card-body">
                <div className="card-title">{name}</div>
            </div>
            
        </div>

    )
}

export default Card