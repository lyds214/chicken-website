import React from 'react';
import background from '../assets/landing-page.png';
import './Home.css'

function Home() {

    return (
       <div className='image-container'>
        <img className='image-container'src={background} alt='background' />
       </div>
    );
}

export default Home