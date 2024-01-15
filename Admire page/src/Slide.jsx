import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import './slide.css'; 


const transform = keyframes`
  from {
    transform: translateX(40px);
    opacity: 0;
  } 
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;


const GlobalStyles = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
  body {
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #D4D4D4;
  justify-content: center;
  align-items: center;
`;

const Slide = styled.div`
  aspect-ratio: 2/1;
  height: 400px;    
  background-color: green;
  border-radius: 3em;
  color: white;
  font-weight: 700;
  font-family: 'Montserrat';
  padding: 1em 2em;
  margin: 1em 0em;
  display: flex;
  align-items: end;
  background-image: linear-gradient(0deg, black, transparent), url('https://media3.giphy.com/media/Xbmt10jf7dvs6UPEWT/giphy.gif');
  background-size: 100%;
  background-position: 50%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1), background-size 0.3s cubic-bezier(.25,.8,.25,1);
  cursor: pointer;

  &:hover {
    box-shadow: 
      0 0 0 10px hsl(0, 0%, 80%),
      0 0 0 15px hsl(0, 0%, 90%),
      0 14px 28px rgba(0,0,0,0.25),
      0 10px 10px rgba(0,0,0,0.22);
    background-size: 130%;
  }

  &:first-child {
    background-image: linear-gradient(0deg, black, transparent), url('https://im.rediff.com/movies/2018/jul/17priyanka9.gif');
    background-color: blue;
  }

  &:nth-child(3) {
    background-image: linear-gradient(0deg, black, transparent), url('https://64.media.tumblr.com/dfee36e884d12751c0dca8591b5f1d4d/898d7627b34eaaf3-8b/s400x600/2f28a40d4f1d839631fc5ba273b16bffe32c9637.gif');
  }

  h1 {
    position: absolute;
    bottom: 1.75em;
    letter-spacing: 0.05em;
    text-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
`;

const TextBox = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-right: 20px;  /* Adjust margin as needed */
`;

const Carousel = styled.div`
  position: relative;
`;

const Dot = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 1em;
  background-color: white;
  opacity: 0.6;
  transition: width 150ms ease-in-out, opacity 150ms ease-in-out;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  pointer-events: none;

  &.active {
    width: 2em;
    opacity: 1;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 3em;
  left: 2em;
  display: flex;
  gap: 0.5em;
`;

const FadeAnimation = styled.div`
  animation: ${transform} 400ms ease-in-out;
`;

const YourComponent = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const changeTime = 3; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 4);
    }, changeTime * 1000);

    return () => clearInterval(intervalId); 
  }, []);

  const showSlides = () => {
    const slides = document.querySelectorAll('.slide-vis');
    const dots = document.querySelectorAll('.dot');

    slides.forEach((slide, index) => {
      slide.style.display = index === slideIndex ? 'block' : 'none';
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === slideIndex);
    });
  };

  useEffect(() => {
    showSlides();
  }, [slideIndex]);

  const handleDotClick = (index) => {
    setSlideIndex(index);
  };

  return (
    <GlobalStyles>
      <AppContainer>
        <TextBox>
         
          <p>Must Watch Films!!</p>
        </TextBox>
        <Carousel>
          <Slide className="slide bg-fade slide-vis">
            <h1 className="fade">Barfi</h1>
          </Slide>
          <Slide className="slide bg-fade slide-vis">
            <h1 className="fade">The Sky is Pink</h1>
          </Slide>
          <Slide className="slide bg-fade slide-vis">
            <h1 className="fade">Bajirao Mastani</h1>
          </Slide>
          <Slide className="slide bg-fade slide-vis">
            <h1 className="fade">The Sky is Pink</h1>
          </Slide>
          <DotsContainer>
            <Dot className={`dot ${slideIndex === 0 ? 'active' : ''}`} onClick={() => handleDotClick(0)}></Dot>
            <Dot className={`dot ${slideIndex === 1 ? 'active' : ''}`} onClick={() => handleDotClick(1)}></Dot>
            <Dot className={`dot ${slideIndex === 2 ? 'active' : ''}`} onClick={() => handleDotClick(2)}></Dot>
            <Dot className={`dot ${slideIndex === 3 ? 'active' : ''}`} onClick={() => handleDotClick(3)}></Dot>
          </DotsContainer>
        </Carousel>
      </AppContainer>
    </GlobalStyles>
  );
};

export default YourComponent;
