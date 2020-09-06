import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import a from '../asset/background2.jpg';


const slideImages = [
  a,
  '../asset/homePage/background.jpg',
  '../asset/homePage/background.jpg'
];

const Slideshow = () => {
  return (

    <div style={{
      marginTop: "100px",
      marginLeft: "10%",
      width: "80%",
      height: "100%",
    }}>
      <Slide easing="ease" autoplay={false}>
        <div className="each-slide">

          <div style={{
            backgroundImage: `url(${slideImages[1]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "450px",
          }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div>
          <div style={{
            backgroundImage: `url(${a})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "450px",
          }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{
            backgroundImage: `url(${a})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "450px",
          }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  )
};

export default Slideshow;