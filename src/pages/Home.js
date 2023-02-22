import React, { useEffect } from 'react'
import background from '../assets/landing-page-background.png'


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
    <div style={{backgroundImage: `url(${imageUrl})`}}>Home</div>
  )
}

export default Home