import React from 'react'

const Track = ({ name }) => {
    return (
        <span className='tracks d-flex justify-content-between text-center'>
            <p>Imagen</p>
            <p>{name}</p>
            <p>4:62</p>
        </span>
    )
}

export default Track