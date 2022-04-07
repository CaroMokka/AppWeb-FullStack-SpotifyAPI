import React from 'react';
import './CardLarge.css';
//Componets
import { NavLink } from 'react-router-dom';

const CardLarge = ({name, image, album_id, album_type, total_tracks}) => {


    const urlTracks = `/tracks/${album_id}`


    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <NavLink to={urlTracks}>
                    <img src={image} className="img-fluid rounded-start" alt="..."/>
                    </NavLink>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-title">{name}</p>
                        <p className="card-text">{album_type}</p>
                        <p className="card-text"><small className="text-muted">{total_tracks}</small></p>
                    </div>
                </div>
              

            </div>
        </div>
    )
}

export default CardLarge