import "./styles.scss";
import IceScream from "../../assets/images/icescream.png";
import Smile from "../../assets/svg/smile.svg";
import Shield from "../../assets/svg/shield.svg";
import UserCircle from "../../assets/svg/user-circle.svg";
import Globe from "../../assets/svg/globe.svg";
import Handshake from "../../assets/svg/handshakes.svg";

const Experiences = () => {
  return (
    <div className="experiences-container">
      <div className="content-wrapper">
        <div className="text-content">
          <h1 className="main-title">
            DES EXPÉRIENCES <br />
            INOUBLIABLES{" "}
            <span className="lighter-text">
              LOREM IPSUM <br />
              TRUC
            </span>
          </h1>

          <div className="about-section">
            <div className="text-title">
              <div className="divider"></div>
              <h2 className="about-title">À Propos De BASIC</h2>
            </div>

            <p className="about-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="image-content">
          <img src={IceScream} alt="Ice cream cone" className="feature-image" />
        </div>
      </div>

      <div className="values-section">
        <div className="value-item">
          <div className="icon-circle">
            <img src={Shield} />
          </div>
          <h3 className="value-title">Authenticité</h3>
          <p className="value-subtitle">Sous-titre</p>
        </div>

        <div className="value-item">
          <div className="icon-circle">
            <img src={Handshake} />
          </div>
          <h3 className="value-title">Respect</h3>
          <p className="value-subtitle">Sous-titre</p>
        </div>

        <div className="value-item">
          <div className="icon-circle">
            <img src={Globe} />
          </div>
          <h3 className="value-title">Diversité</h3>
          <p className="value-subtitle">Sous-titre</p>
        </div>

        <div className="value-item">
          <div className="icon-circle">
            <img src={UserCircle} />
          </div>
          <h3 className="value-title">Personnalisation</h3>
          <p className="value-subtitle">Sous-titre</p>
        </div>

        <div className="value-item">
          <div className="icon-circle">
            <img src={Smile} />
          </div>
          <h3 className="value-title">Confort</h3>
          <p className="value-subtitle">Sous-titre</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
