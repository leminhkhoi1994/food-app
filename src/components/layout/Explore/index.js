import React from 'react';
import './styles.scss';

const Explore = ({ exploreData }) => {
  return (
    <div className="explore-banner">
      <div className="banner-content">
        <div className="text-content">
          <h1 className="main-title">{exploreData.title}</h1>
          <h2 className="subtitle">{exploreData.subtitle}</h2>

          <p className="description">{exploreData.text}</p>

          <button className="explore-button">{exploreData.button}</button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
