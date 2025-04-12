import React, { memo } from 'react';
import BrookeSmall from 'assets/images/BrookeSmall.png';
import Avocado from 'assets/images/Avocado.png';
import Cherry from 'assets/images/Cherry.png';
import Orange from 'assets/images/Orange.png';
import OrangeSlash from 'assets/images/OrangeSlash.png';
import Instagram from 'assets/icons/Instagram.svg';
import ArrowUpRightWhite from 'assets/icons/ArrowUpRightWhite.svg';
import './styles.scss';

const SocialMedia = ({ socialMediaData }) => {
  return (
    <div className="social-media-container">
      <div className="container">
        <div className="header-content">
          <div className="intro-text">
            <p>{socialMediaData.text}</p>
          </div>

          <div className="heading">
            <h2>{socialMediaData.title}</h2>
          </div>
        </div>

        <div className="featured-post">
          <div className="featured-content">
            <div className="image-container">
              <img
                src={BrookeSmall}
                alt="Colorful fruit platter"
                className="featured-image"
              />
            </div>

            <div className="post-info">
              <div className="post-text">
                <h3>{socialMediaData.reviews[0].author}</h3>
                <p>{socialMediaData.reviews[0].review}</p>
              </div>
              <div className="post-date">{socialMediaData.reviews[0].date}</div>
            </div>
          </div>
        </div>

        <div className="gallery">
          {socialMediaData.reviews.map((item, index) => {
            return (
              <div key={index} className="gallery-item pink">
                <div className="gallery-image">
                  <img
                    src={
                      index === 0
                        ? Avocado
                        : index === 1
                        ? Cherry
                        : index === 2
                        ? Orange
                        : index === 3
                        ? OrangeSlash
                        : Avocado
                    }
                    alt="Avocado half on pink background"
                  />
                </div>
                <div className="gallery-footer">
                  <div className="user">
                    <img src={Instagram} />
                    <span>{item.author}</span>
                  </div>
                  <img src={ArrowUpRightWhite} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="footer-text">
          <p>{socialMediaData.footer}</p>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
