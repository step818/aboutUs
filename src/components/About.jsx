import React from 'react';
import carlsagan from '../assets/images/carlsagan.jpg';

function About() {
  return(
    <div>
      <style jsx>{`
        .whiteText {
          color: white;
        }
      `}</style>
      <div className="whiteText">
        <h3>Meet Our Team</h3>
        <img src={carlsagan}/>
        <h3>Carl Sagan</h3>
        <p>The man, the legend, the myth.</p>
      </div>
    </div>
  );
}

export default About;