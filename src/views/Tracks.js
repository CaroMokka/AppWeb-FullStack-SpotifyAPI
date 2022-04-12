import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
//Components
import ListTracks from '../components/ListTracks/ListTracks';


const Tracks = () => {
    const [tracksList, setTrackList] = useState([]);

    const { album_id } = useParams();

    const uri = `http://127.0.0.1:5000/get_tracks/${album_id}`





    const fetch_tracks = () => {
        fetch(uri)
            .then(response => response.json())
            .then(result => {
                const tracks = result.items
                console.log(result.items)
                setTrackList(tracks);
                console.log(tracksList);
            })


            .catch(error => console.log('error', error));
    }


    useEffect(() => {
        fetch_tracks(uri)
    }, [])








    return (
        <div className='container bg-dark text-white'>
            <div className="list mt-5 p-5">
                <h2 className='mt-5'>Track's List</h2>
                {
                    tracksList.map((track, index) => (
                        <ListTracks
                            key={index}
                            name={track.name}
                            preview_url={track.preview_url}
                            track_number={track.track_number}
                            duration_ms={track.duration_ms} />))
                }

            </div>
            <NavLink to="/music">
                <button>Back</button>
            </NavLink>


        </div>
    )
}

export default Tracks