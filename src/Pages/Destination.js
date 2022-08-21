import React, {useState, useEffect} from 'react'

import Header from '../Components/HeaderMain'

import data from '../Data/data';

import backgroundDesktop from '../Img/destination/background-destination-desktop.jpg';
import backgroundTablet from '../Img/destination/background-destination-tablet.jpg';
import backgroundMobile from '../Img/destination/background-destination-mobile.jpg'

import moon from '../Img/destination/image-moon.webp';
import mars from '../Img/destination/image-mars.webp';
import europa from '../Img/destination/image-europa.webp';
import titan from '../Img/destination/image-titan.webp';

function Destination() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [activeDestination, setActiveDestination] = useState('Moon')

  useEffect(() =>{
    const handleWindowResize = () =>{
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, []);

  const displayAvgTimeTravel= () =>{
    if(activeDestination === 'Moon'){
      return data.destinations[0].travel
    }
    if(activeDestination === 'Mars'){
      return data.destinations[1].travel
    }
    if(activeDestination === 'Europa'){
      return data.destinations[2].travel
    }
    if(activeDestination === 'Titan'){
      return data.destinations[3].travel
    }
  }

  const displayAvgDistance = () =>{
    if(activeDestination === 'Moon'){
      return data.destinations[0].distance
    }
    if(activeDestination === 'Mars'){
      return data.destinations[1].distance
    }
    if(activeDestination === 'Europa'){
      return data.destinations[2].distance
    }
    if(activeDestination === 'Titan'){
      return data.destinations[3].distance
    }
  }

  const displayDestinationText = () => {
    if(activeDestination === 'Moon'){
      return data.destinations[0].description
    }
    if(activeDestination === 'Mars'){
      return data.destinations[1].description
    }
    if(activeDestination === 'Europa'){
      return data.destinations[2].description
    }
    if(activeDestination === 'Titan'){
      return data.destinations[3].description
    }
  }

  const displayMenuImage = () => {
    if(activeDestination === 'Moon'){
      return moon;
    }
    if(activeDestination === 'Mars'){
      return mars;
    }
    if(activeDestination === 'Europa'){
      return europa;
    }
    if(activeDestination === 'Titan'){
      return titan;
    }

    }


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
      <main className="destination">
        <div className="destination__left">
          <div className="destination__left__title subheading-1 padding-bottom-10"><span className="darken-text">01 </span> Pick your destination</div>
          <img src={displayMenuImage()} alt="" />
        </div>
        <div className="destination__right">
          <div className="destination__right__nav-bar">
              <ul role='list'>
                <li className="nav-text">
                  <div
                    className={`padding-bottom-4 ${activeDestination === 'Moon' ? 'active' : ''}`}
                    onClick={(() => setActiveDestination('Moon'))}
                  >
                    Moon
                  </div>
                </li>
                <li className="nav-text">
                  <div
                    className={`padding-bottom-4 ${activeDestination === 'Mars' ? 'active' : ''}`}
                    onClick={(() => setActiveDestination('Mars'))}
                  >
                    Mars
                  </div>
                </li>
                <li className="nav-text">
                  <div
                    className={`padding-bottom-4 ${activeDestination === 'Europa' ? 'active' : ''}`}
                    onClick={(() => setActiveDestination('Europa'))}
                  >
                    Europa
                  </div>
                </li>
                <li className="nav-text">
                  <div
                    className={`padding-bottom-4 ${activeDestination === 'Titan' ? 'active' : ''}`}
                    onClick={(() => setActiveDestination('Titan'))}
                  >
                    Titan
                  </div>
                </li>
              </ul>
            </div>
            <section className="destination-info">
              <div className="destination-info__name heading-1 padding-left-2">{activeDestination}</div>
              <p className="destination-info__text text-p padding-bottom-8">
                {displayDestinationText()}
              </p>
            </section>
            <section className="destination-distance padding-top-5">
              <div className="destination-distance__left center-text">
                <div className="subheading-2">Avg. Distance</div>
                <div className="heading-3">{displayAvgDistance()}</div>
              </div>
              <div className="destination-distance__right center-text">
                <div className="subheading-2">Est. Travel Time</div>
                <div className="heading-3">{displayAvgTimeTravel()}</div>
              </div>
            </section>
        </div>
      </main>
    </div>
  )
}

export default Destination