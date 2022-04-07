import React from 'react'
import '../StylesViews/Music.css'

//Components
import Banner from '../components/Banner/Banner'
import DropDown from '../components/DropDown/DropDown'



const Music = () => {
  return (
    <div className='container-fluid bg-dark d-flex flex-column mt-5 music'>
      <Banner />
      <DropDown/>

    </div>
  )
}

export default Music