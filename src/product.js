import React from 'react';


const Card = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <h2 className="card-title">Modern React</h2>
        <p className="card-description">
          Build beautiful user interfaces with ease. This component is designed 
          to be clean, minimal, and fully responsive for any project.
        </p>
        <button className="card-button">Get Started</button>
      </div>
    </div>
  );
};

export default Card;