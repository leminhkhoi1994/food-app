import BrookeSmall from "../../assets/images/brooke-larks-mall.png";
import Avocado from "../../assets/images/avocado.png";
import Cherry from "../../assets/images/cherry.png";
import Orange from "../../assets/images/orange.png";
import OrangeSlash from "../../assets/images/orange-slash.png";
import Instagram from "../../assets/svg/instagram.svg";
import ArrowUpRightWhite from "../../assets/svg/ArrowUpRightWhite.svg";
import "./styles.scss";

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <div className="container">
        <div className="header-content">
          <div className="intro-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially
            </p>
          </div>

          <div className="heading">
            <h2>
              IMMORTALISEZ DES MOMENTS
              <br />
              INOUBLIABLES AVEC <span className="hashtag">#BASIC</span>
            </h2>
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
                <h3>La famille</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="post-date">24 Sep 2024</div>
            </div>
          </div>
        </div>

        <div className="gallery">
          <div className="gallery-item pink">
            <div className="gallery-image">
              <img src={Avocado} alt="Avocado half on pink background" />
            </div>
            <div className="gallery-footer">
              <div className="user">
                <img src={Instagram} />
                <span>Anthony Durand</span>
              </div>
              <img src={ArrowUpRightWhite} />
            </div>
          </div>

          <div className="gallery-item mint">
            <div className="gallery-image">
              <img src={Cherry} alt="Cherries on mint background" />
            </div>
            <div className="gallery-footer">
              <div className="user">
                <img src={Instagram} />
                <span>Anthony Durand</span>
              </div>
              <img src={ArrowUpRightWhite} />
            </div>
          </div>

          <div className="gallery-item blue">
            <div className="gallery-image">
              <img src={Orange} alt="Orange on blue background" />
            </div>
            <div className="gallery-footer">
              <div className="user">
                <img src={Instagram} />
                <span>Anthony Durand</span>
              </div>
              <img src={ArrowUpRightWhite} />
            </div>
          </div>

          <div className="gallery-item blue">
            <div className="gallery-image">
              <img src={OrangeSlash} alt="Orange slice on blue background" />
            </div>
            <div className="gallery-footer">
              <div className="user">
                <img src={Instagram} />
                <span>Anthony Durand</span>
              </div>
              <img src={ArrowUpRightWhite} />
            </div>
          </div>
        </div>

        <div className="footer-text">
          <p>
            Consultez <span className="mention">@BASIC</span> et{" "}
            <span className="hashtag">#BASIC</span> pour découvrir les
            expériences inoubliables des pourvoiries et activités BASIC.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
