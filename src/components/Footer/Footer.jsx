import Facebook from "../../assets/svg/facebook.svg";
import Instagram from "../../assets/svg/instagram.svg";
import Youtube from "../../assets/svg/youtube.svg";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <p className="company-name">BASIC</p>
            <p className="company-phone">(514) 904-6789</p>
            <p className="company-address">
              Quebec, 3100 Boulevard de la Côte-Vertu
            </p>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <a href="#" className="footer-link">
                Activité 1
              </a>
              <a href="#" className="footer-link">
                Activité 2
              </a>
              <a href="#" className="footer-link">
                Activité 3
              </a>
            </div>

            <div className="link-column">
              <a href="#" className="footer-link">
                Titre 1
              </a>
              <a href="#" className="footer-link">
                Titre 2
              </a>
              <a href="#" className="footer-link">
                Titre 3
              </a>
            </div>

            <div className="link-column">
              <a href="#" className="footer-link">
                Blog
              </a>
              <a href="#" className="footer-link">
                Nous contacter
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">© BASIC 2024</div>

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
      </div>
    </footer>
  );
};

export default Footer;
