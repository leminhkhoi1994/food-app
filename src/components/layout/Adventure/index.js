import React, { memo } from 'react';
import Adventure1 from 'assets/images/Adventure1.png';
import Adventure2 from 'assets/images/Adventure2.png';
import Adventure3 from 'assets/images/Adventure3.png';
import ArrowUpRightBlack from 'assets/icons/ArrowUpRightBlack.svg';

import './styles.scss';

const Adventure = ({ adventureData }) => {
  return (
    <div className="adventure-container">
      <div className="section-header">
        <div className="line"></div>
        <h2 className="main-title">{adventureData.title}</h2>
        <div className="line"></div>
      </div>

      <h3 className="subtitle">{adventureData.subtitle}</h3>

      <div className="cards-grid">
        {adventureData.cases.map((item, index) => {
          return (
            <div key={index} className="card">
              <div className="card-image">
                <img
                  src={Adventure1}
                  alt="Assorted citrus fruits on a wooden board"
                />
              </div>
              <h4 className="card-title">{item.category}</h4>
              <h5 className="card-subtitle">{item.tagline}</h5>
              <p className="card-text">{item.description}</p>
              <a href="#" className="card-button">
                {item.cta} <img src={ArrowUpRightBlack} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Adventure.propTypes = {};

export default memo(Adventure);
