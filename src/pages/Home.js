import React, { useEffect } from 'react'
import background from '../assets/landing-page-background.png'
import './Home.css'

function Home() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    const imageUrl = windowWidth >= 768 ? background : background

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    });
        
    return (
    <div className='container'>Experience the Playful Dishes with Chick in the Box</div>
  )
}

export default Home