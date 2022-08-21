import React, {useState, useEffect} from 'react'

import Header from '../Components/HeaderMain'

import backgroundDesktop from '../Img/destination/background-destination-desktop.jpg';
import backgroundTablet from '../Img/destination/background-destination-tablet.jpg';
import backgroundMobile from '../Img/destination/background-destination-mobile.jpg'

function Destination() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() =>{
    const handleWindowResize = () =>{
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, []);


  const responsiveBackgroundImage = () =>{
    if(windowWidth > 1028){
      return backgroundDesktop
    }
    if(windowWidth > 524 && windowWidth < 1028){
      return backgroundTablet
    }
    if(windowWidth < 524){
      return backgroundMobile
    }

  }

  return (
    <div className="container-page page-destination | padding-left-7 padding-top-9"
      style={{ backgroundImage: `url(${responsiveBackgroundImage()})`}}
    >
      <Header active='Destination' />
    </div>
  )
}

export default Destination