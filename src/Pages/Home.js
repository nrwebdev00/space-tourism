import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
      <main className="page-home__main">
        <section className="page-home__main__left">
          <div className="heading-5 padding-bottom-4">So, you want to travel to</div>
          <div className="heading-1 padding-bottom-4">Space</div>
          <p className='home-text page-home-text'>
          Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!
          </p>
        </section>
        <section className="page-home__main__right">
          <Link to='destination/' className="page-home-explore">
            <div className="heading-4 explore-text">Explore</div>
          </Link>
        </section>
      </main>
    </div>
  )
}
