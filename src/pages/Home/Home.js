import React, {useState, useEffect} from 'react';
import background from '../../assets/background.png';
import "../Home/Home.css";

function Home() {

  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
      }

      window.addEventListener('resize', handleWindowResize);

      return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div className="image-container text-heading">
      <img className="image-container" src={background} alt="background" />
      <div className="text-container">
        <h1>EXPERIENCE THE PLAYFUL DISHES WITH CHICK IN THE BOX</h1>
         {/* <p>Width: {windowSize[0]}</p>
            <p>Height: {windowSize[1]}</p> */}
      </div>
    </div>
  );
}

export default Home;