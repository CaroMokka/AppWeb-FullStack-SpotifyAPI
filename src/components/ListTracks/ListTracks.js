import React from 'react'

const ListTracks = ({ name, preview_url, track_number, duration_ms }) => {

    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    const time = millisToMinutesAndSeconds(duration_ms);




    return (
        <>
            <a href={preview_url} className="list-group-item list-group-item" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                    <div className='mx-4'>
                        <small className='me-4'># {track_number}</small>
                        <button className='btn btn-outline-dark' >Play</button>
                    </div>
                    <div className='d-flex me-4'>
                        <h5 className="mb-1">{name}</h5>
                        <small className='ms-4'>{time}</small>
                    </div>
                </div>


            </a>

        </>
    )
}

export default ListTracks