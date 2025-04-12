import React, { memo } from 'react';
import Facebook from 'assets/icons/Facebook.svg';
import Instagram from 'assets/icons/Instagram.svg';
import Youtube from 'assets/icons/Youtube.svg';
import './styles.scss';

const Footer = ({ footerData }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p className="company-name">{footerData.address.name}</p>
          <p className="company-phone">{footerData.address.phone}</p>
          <p className="company-address">{footerData.address.location}</p>
        </div>

        <div className="footer-links">
          <div className="link-column">
            {footerData.links.slice(0,4).map((item, index) => {
              return (
                <a key={index} href={item.url} className="footer-link">
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="link-column">
            {footerData.links.slice(4,8).map((item, index) => {
              return (
                <a key={index} href={item.url} className="footer-link">
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          © {footerData.address.name} {new Date().getFullYear()}
        </div>

        <div className="social-icons">
          <a href="#" className="social-icon">
            <img src={Facebook} />
          </a>
          <a href="#" className="social-icon">
            <img src={Instagram} />
          </a>
          <a href="#" className="social-icon">
            <img src={Youtube} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
