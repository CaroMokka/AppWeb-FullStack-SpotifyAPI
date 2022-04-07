import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
//Components
import Track from '../Track/Track'

const Modal = () => {



    return (
        <div className='bg-info'>
            <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Track List
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Track List</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body"><Track /></div>{/* componente track hay que pasarle los props */}

                    </div>
                </div>
            </div>







        </div>
    )
}

export default Modal