import React from 'react';
import Bubble from './Bubble';

function App(){
    const bubbles = Array.from({length: 5});

    return(
        <div className = "bubble-container">
      {bubbles.map((_, i) =>(
        <Bubble key={i}/>
      ))}
    </div>
  );
}

export default App;