import React, {useState, useEffect} from 'react'

import Header from '../Components/HeaderMain'

import backgroundDesktop from '../Img/crew/background-crew-desktop.jpg';
import backgroundTablet from '../Img/crew/background-crew-tablet.jpg';
import backgroundMobile from '../Img/crew/background-crew-mobile.jpg'


export default function Crew() {
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
    <div className="container-page page-crew | padding-left-7 padding-top-9"
      style={{ backgroundImage: `url(${responsiveBackgroundImage()})`}}
    >
      <Header active='Crew' />
    </div>
  )
}
