import React from 'react';
//---> Import Components
import Navbar from '../components/Navbar/Navbar.js';
import Cover from '../components/Cover/Cover.js';
import Footer from '../components/Footer/Footer.js';

const Home = () => {

  


  return (
    <div className="home">
      <Navbar/>
      <Cover />
      <Footer/>
    </div>
  )
}

export default Home




/* var myHeaders = new Headers();
  myHeaders.append("Cookie", "session=.eJwVyclygjAAANB_ybkHCdvgTRNcEDVSNnUcBzUSqgEDlBid_nvxXd8bZHVbNO2xuDRguAcDdZ4xIklXZWsjnr74skynAnwBbVs9NcdK7NMrXu3mdjDOSHn9RIeSWYbMK_z91hV7yOQ0H1l9QEVhkksjL7jfQTpaqJu2GvdhMmpKeC8j52l7E1bKM72laR9WjI3IjUjXNpQLrHMeChR8orq7Vuj5wsV6LTAKBxNFWB_2j9Jr37vgzRZq6zzw0c5pMDj8_QOTMUSW.YksdpA.dKKGU583gB8l5CHU_eg0GPWLvjg");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("http://127.0.0.1:5000/get_artists", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)); */