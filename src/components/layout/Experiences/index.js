import React, { memo } from 'react';
import './styles.scss';
import IceScream from 'assets/images/IceScream.png';
import Smile from 'assets/icons/Smile.svg';
import Shield from 'assets/icons/Shield.svg';
import UserCircle from 'assets/icons/UserCircle.svg';
import Globe from 'assets/icons/Globe.svg';
import Handshake from 'assets/icons/Handshake.svg';

const Experiences = ({ experiencesData }) => {
  return (
    <div className="experiences-container">
      <div className="content-wrapper">
        <div className="text-content">
          <h1 className="main-title">
            {experiencesData.title}
            <span className="lighter-text">{experiencesData.subtitle}</span>
          </h1>

          <div className="about-section">
            <div className="text-title">
              <div className="divider"></div>
              <h2 className="about-title">{experiencesData.text_title}</h2>
            </div>

            <p className="about-text">{experiencesData.text}</p>
          </div>
        </div>

        <div className="image-content">
          <img src={IceScream} alt="Ice cream cone" className="feature-image" />
        </div>
      </div>

      <div className="values-section">
        {experiencesData.pictos.map((item, index) => {
          return (
            <div key={index} className="value-item">
              <div className="icon-circle">
                <img
                  src={
                    index === 0
                      ? Shield
                      : index === 1
                      ? Handshake
                      : index === 2
                      ? Globe
                      : index === 3
                      ? UserCircle
                      : Smile
                  }
                />
              </div>
              <h3 className="value-title">{item.title}</h3>
              <p className="value-subtitle">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
