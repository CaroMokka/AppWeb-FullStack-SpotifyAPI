import React from 'react'
import '../StylesViews/Music.css'

//Components
import Banner from '../components/Banner/Banner'
import DropDown from '../components/DropDown/DropDown'



const Music = () => {
  return (
    <div className='container-fluid music'>
      <Banner />
      <DropDown/>

    </div>
  )
}

export default Music