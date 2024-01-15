import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './New.css'
const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} style={{backgroundColor: 'black'}}>
      <div className="carousel-slide">
        <img src="https://img.buzzfeed.com/buzzfeed-static/static/2016-01/7/0/campaign_images/webdr03/priyanka-chopra-just-became-the-first-south-asian-2-640-1452144898-0_dblbig.jpg" alt="Priyanka Chopra's Achievements" />
        <div className="carousel-content">
          <h3>Priyanka Chopra's Achievements</h3>
          <p>First South Asian woman to win a People's Choice Award</p>
        
        </div>
      </div>
      <div className="carousel-slide">
        <img src="https://s2.dmcdn.net/v/EpZPZ1ZduBPADk9oH/x1080" alt="Priyanka Chopra's Awards" />
        <div className="carousel-content">
          <h3>Priyanka Chopra's Awards</h3>
          <p>Winner of the National Padma Shri Award</p>
         
        </div>
      </div>
      <div className="carousel-slide">
        <img src="https://www.unicef.org/sites/default/files/styles/two_column/public/UN062705.jpg.webp?itok=AmSe4-cr" alt="Priyanka Chopra's Philanthropy Work" />
        <div className="carousel-content">
          <h3>Philanthropy Work</h3>
          <p>UNICEF Goodwill Ambassador and active in various charitable causes</p>

        </div>
      </div>
      <div className="carousel-slide">
        <img src="https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2016/04/priyanka-chopra-time-1461248641.jpg" />
        <div className="carousel-content">
          <h3>Global Recognition</h3>
          <p>Named one of the 100 most influential people in the world by Time magazine</p>
          
        </div>
      </div>
    
    </Slider>
  );
};

export default SimpleCarousel;
