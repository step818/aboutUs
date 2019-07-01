import React from 'react';
import carlsagan from '../assets/images/carlsagan.jpg';

function About() {
  return(
    <div>
      <h3>These people work here</h3>
      <img src={carlsagan}/>
      <h3>Carl Sagan</h3>
      <p>The man, the legend, the myth.</p>
    </div>
  );
}

export default About;