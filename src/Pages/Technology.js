import React, {useState, useEffect} from 'react'

import Header from '../Components/HeaderMain'

import backgroundDesktop from '../Img/technology/background-technology-desktop.jpg';
import backgroundTablet from '../Img/technology/background-technology-tablet.jpg';
import backgroundMobile from '../Img/technology/background-technology-mobile.jpg';

import data from '../Data/data';

import spaceport from '../Img/technology/image-spaceport-portrait.jpg';
import capsule from '../Img/technology/image-space-capsule-portrait.jpg';
import launch from '../Img/technology/image-launch-vehicle-portrait.jpg';

export default function Technology() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [tech, setTech] = useState('Launch')

  useEffect(() =>{
    const handleWindowResize = () =>{
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, []);

  const techImage = () =>{
    if(tech === 'Launch'){
      return launch
    }
    if(tech === 'Capsule'){
      return capsule
    }
    if(tech === 'Spaceport'){
      return spaceport
    }
  }

  const techTitle = () =>{
    if(tech === 'Launch'){
      return data.technology[0].name;
    }
    if(tech === 'Spaceport'){
      return data.technology[1].name;
    }
    if(tech === 'Capsule'){
      return data.technology[2].name;
    }
  }

  const techText = () =>{
    if(tech === 'Launch'){
      return data.technology[0].description;
    }
    if(tech === 'Spaceport'){
      return data.technology[1].description;
    }
    if(tech === 'Capsule'){
      return data.technology[2].description
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
    <div className="container-page page-technology | padding-left-7 padding-top-9"
      style={{ backgroundImage: `url(${responsiveBackgroundImage()})`}}
    >
      <Header active='Technology' />
      <main className="tech">
        <div className="tech__title subheading-1"><span className="darken-text padding-right-4">03  </span> Space Launch 101</div>
        <div className="wrapper padding-top-6">
          <section className="left padding-top-10">
            <div className="left-inner">
              <div
                className={`number heading-5 ${tech === 'Launch' ? 'number-active':''}`}
                onClick={(() => setTech('Launch'))}
                >
                  1
                </div>
              <div
                className={`number heading-5 ${tech === 'Spaceport' ? 'number-active' : ''}`}
                onClick={(() => setTech('Spaceport'))}
                >
                  2
                </div>
              <div
                className={`number heading-5 ${tech === 'Capsule' ? 'number-active' : ''}`}
                onClick={(() => setTech('Capsule'))}
                >
                  3
                </div>
            </div>
            <div className="right-inner">
              <div className="right-inner__title heading-5 padding-bottom-4">
                The Terminology...
              </div>
              <div className="right-inner__name heading-3 padding-bottom-4">
                {techTitle()}
              </div>
              <div className="right-inner__text body-text">
                {techText()}
              </div>
            </div>
          </section>
          <section className="right">
            <img src={techImage()} alt="" />
          </section>
        </div>
      </main>
    </div>
  )
}
