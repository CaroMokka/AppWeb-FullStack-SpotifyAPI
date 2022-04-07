import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Import Views
import Home from './views/Home';
import Music from './views/Music';
import ArtistPage from './views/ArtistPage';
import Tracks from './views/Tracks';

//Import Components
import Navbar from './components/Navbar/Navbar.js';

//Styles
import './App.css';



function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/about' element={<div>About</div>} />
      </Routes>
      <Routes>
        <Route path='/music' element={<Music />} />
      </Routes>
      <Routes>
        <Route path='/artist' element={<ArtistPage />} />
      </Routes>
      <Routes>
        <Route path='/artist/:artist_id' element={<ArtistPage />} />
      </Routes>
      <Routes>
        <Route path='/tracks/:album_id' element={<Tracks />} />
      </Routes>
     

      
    </BrowserRouter>
  );
}

export default App;
