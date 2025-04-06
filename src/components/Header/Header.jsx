import "./styles.scss";
import Mountain from "../../assets/svg/Mountains.svg";
import Fish from "../../assets/svg/Fishing-icon-32px.svg";
import Crosshair from "../../assets/svg/Crosshair-32px.svg";
import ArrowUpRight from "../../assets/svg/ArrowUpRight.svg";
const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="logo">LOGO SAMPLE</div>

        <nav className="nav-menu">
          <a href="/" className="nav-link">
            Titre 1
          </a>
          <a href="/" className="nav-link">
            Titre 2
          </a>
          <a href="/" className="nav-link">
            Titre 3
          </a>
          <a href="/" className="nav-link">
            Titre 4
          </a>
        </nav>

        <div className="header-actions">
          <button className="icon-button">
            <img src={Mountain} alt="Mountain Icons" className="action-image" />
          </button>
          <button className="icon-button">
            <img src={Fish} alt="Mountain Icons" className="action-image" />
          </button>
          <button className="icon-button">
            <img
              src={Crosshair}
              alt="Mountain Icons"
              className="action-image"
            />
          </button>
          <button className="action-button">
            <img
              src={ArrowUpRight}
              alt="Mountain Icons"
              className="action-image"
            />
          </button>
        </div>

        <div className="hamburger-menu">
          <span className="hamburger-line line1"></span>
          <span className="hamburger-line line2"></span>
          <span className="hamburger-line line3"></span>
        </div>
      </header>
    </div>
  );
};

export default Header;
