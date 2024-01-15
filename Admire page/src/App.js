
import React from 'react';
import AdmiredPerson from './admiration';
import './admiration.css'; 
import YourComponent from './Slide';
import SimpleCarousel from './New';
import ExampleVideo from './Youtube';
function App() {
  return (  
   
    <div className="app-container">
      <AdmiredPerson />
      <div className="recognition-container">
      RECOGNITIONS
    </div> 
    <div> <SimpleCarousel/> </div>
      <YourComponent/>
      <div>
      <h1>Miss World👑</h1>
      <ExampleVideo />
    </div>
    </div>
    
  );
}

export default App;
