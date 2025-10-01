import React, { useState, useRef, useEffect } from 'react';
import './Bubble.css';

function getRandomLeft(){
  return Math.random() * (70 - 30) + 30;
}
function getRandomSize(){
    return Math.random() * (200 - 100) + 100; 
}
function getRandomDuration(){
    return Math.random() * (8 - 4) + 4;
}

function Bubble() {
  const [left, setLeft] = useState(getRandomLeft());
  const [size, setSize] = useState(getRandomSize());
  const [duration, setDuration] = useState(getRandomDuration());
  const bubbleRef = useRef(null);

  useEffect(() => {
    const bubble = bubbleRef.current;
    const handleAnimationIteration = () => {
      setLeft(getRandomLeft()),
      setSize(getRandomSize()),
      setDuration(getRandomDuration());
    };
    bubble.addEventListener('animationiteration', handleAnimationIteration);
    return () => {
      bubble.removeEventListener('animationiteration', handleAnimationIteration);
    };
  }, []);

  return (
    <div
      ref = {bubbleRef}
      className = "bubble"
      style = {{
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${duration}s`,
      }}
    />
  );
}

export default Bubble;