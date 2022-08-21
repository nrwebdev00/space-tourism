import React from 'react'
import { useState, useEffect } from 'react'

// Import Components
import Header from '../Components/HeaderMain'

// Import Images
import backgroundDesktop from '../Img/home/background-home-desktop.jpg'
import backgroundTablet from '../Img/home/background-home-tablet.jpg'
import backgroundMobile from '../Img/home/background-home-mobile.jpg'

export default function Home() {

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
    <div className="container-page page-home | padding-left-7 padding-top-9"
      style={{ backgroundImage: `url(${responsiveBackgroundImage()})`}}
    >
      <Header active='Home' />
    </div>
  )
}
