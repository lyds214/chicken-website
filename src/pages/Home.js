import React from 'react';
import background from '../assets/landing-page-background.png';
import './Home.css'

function Home() {

   

    return (
       <div className='image-container'>
        <img className='background-image' src={background} alt='background' />
       </div>
    );
}

export default Home