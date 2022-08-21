import React, {useState, useEffect} from 'react'

import Header from '../Components/HeaderMain'

import data from '../Data/data';

import backgroundDesktop from '../Img/crew/background-crew-desktop.jpg';
import backgroundTablet from '../Img/crew/background-crew-tablet.jpg';
import backgroundMobile from '../Img/crew/background-crew-mobile.jpg';

import crewImage1 from '../Img/crew/image-douglas-hurley.webp';
import crewImage2 from '../Img/crew/image-mark-shuttleworth.webp';
import crewImage3 from '../Img/crew/image-victor-glover.webp';
import crewImage4 from '../Img/crew/image-anousheh-ansari.webp'



export default function Crew() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [crew, setCrew ] = useState(0);

  useEffect(() =>{
    const handleWindowResize = () =>{
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, []);

  const crewBio = () =>{
    if(crew === 0){
      return data.crew[0].bio
    }
    if(crew === 1){
      return data.crew[1].bio
    }
    if(crew === 2){
      return data.crew[2].bio
    }
    if(crew === 3){
      return data.crew[3].bio
    }
  }

  const crewRole = () =>{
    if(crew === 0){
      return data.crew[0].role
    }
    if(crew === 1){
      return data.crew[1].role
    }
    if(crew === 2){
      return data.crew[2].role
    }
    if(crew === 3){
      return data.crew[3].role
    }
  }

  const crewName = () =>{
    if(crew === 0){
      return data.crew[0].name
    }
    if(crew === 1){
      return data.crew[1].name
    }
    if(crew === 2){
      return data.crew[2].name
    }
    if(crew === 3){
      return data.crew[3].name
    }
  }

  const crewImage = () =>{
    if(crew === 0){
      return crewImage1
    }
    if(crew === 1){
      return crewImage2
    }
    if(crew === 2){
      return crewImage3
    }
    if(crew === 3){
      return crewImage4
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
    <div className="container-page page-crew | padding-left-7 padding-top-9"
      style={{ backgroundImage: `url(${responsiveBackgroundImage()})`}}
    >
      <Header active='Crew' />
      <main className="crew">
        <div className="crew__left">
          <div className="crew__left__title subheading-1 padding-bottom-10"><span className="darken-text">02 </span> Meet You Crew</div>
          <div className="crew__left__role darken-text heading-4">{crewRole()}</div>
          <div className="crew__left__name heading-3 padding-bottom-4">{crewName()}</div>
          <div className="crew__left__bio body-text padding-bottom-4">{crewBio()}</div>
          <div className="crew__left__dots">
            <div
              className={`crew__left__dots__dot ${crew === 0 ? 'active-dot' : ''}`}
              onClick={(() => setCrew(0))}
              > </div>
            <div
              className={`crew__left__dots__dot ${crew === 1 ? 'active-dot' : ''}`}
              onClick={(() => setCrew(1))}
            ></div>
            <div
              className={`crew__left__dots__dot ${crew === 2 ? 'active-dot' : ''}`}
              onClick={(() => setCrew(2))}
            ></div>
            <div
              className={`crew__left__dots__dot ${crew === 3 ? 'active-dot' : ''}`}
              onClick={(() => setCrew(3))}
            ></div>
          </div>
        </div>
        <div className="crew__right">
          <img src={crewImage()} alt="Crew image" />
        </div>
      </main>
    </div>
  )
}
