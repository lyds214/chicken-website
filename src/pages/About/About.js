import React from 'react'
import cafe from '../../assets/about.png'
import '../About/About.css'

const About = () => {
  return (
    <div className='img-container'>
      <img src={cafe} alt='cafe' />

      <div className='about-chick-container text-style'>
        <h1>About Chick in the Box</h1>
        <p>Chick in the Box a locally owned business that is quality driven to provide the best products to our customers.</p>
        <p>We enjoy offering our customers with classic dishes as well as creative and playful dishes that we have conceptualized while keeping fresh and seasonal ingredients in mind.</p>
      </div>
    </div>
  )
}

export default About