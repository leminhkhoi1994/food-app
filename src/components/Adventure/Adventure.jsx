import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";
import ArrowUpRightBlack from "../../assets/svg/ArrowUpRightBlack.svg";
import "./styles.scss";

const Adventure = () => {
  return (
    <div className="adventure-container">
      <div className="section-header">
        <div className="line"></div>
        <h2 className="main-title">TITRE BLOC 1</h2>
        <div className="line"></div>
      </div>

      <h3 className="subtitle">Sous-titre Bloc 1</h3>

      <div className="cards-grid">
        <div className="card">
          <div className="card-image">
            <img src={Image1} alt="Assorted citrus fruits on a wooden board" />
          </div>
          <h4 className="card-title">Case Title</h4>
          <h5 className="card-subtitle">Case sous-titre</h5>
          <p className="card-text">
            Chaque sentier vous conduit à des panoramas époustouflants, chaque
            instant devient une aventure, chaque rencontre vous promet un so
            uvenir marquant. Avec MITIK, le tourisme d’aventure allie nature
            brute et confort raffiné à toutes les saisons. Randonnée, canoë,
            observation de la faune, rencontres culturelles, exploration en
            montagne, chaque escapade est une immersion inoubliable dans les
            grands espaces canadiens.
          </p>
          <a href="#" className="card-button">
            Forfait 1 <img src={ArrowUpRightBlack} />
          </a>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={Image2} alt="Fruit desserts in glasses" />
          </div>
          <h4 className="card-title">Case Tilte</h4>
          <h5 className="card-subtitle">Case sous-titre</h5>
          <p className="card-text">
            Chez BASIC, la pêche est une alliance entre passion et respect.
            Imaginez des lacs paisibles et des rivières exclusives, des guides
            experts et des pratiques durables, le tout au cœur de territoires
            immenses. Chaque prise devient un moment de fierté mais surtout
            inoubliable. MITIK vous propose une panoplie d’expériences de pêche
            tant sur lacs sauvages que les rivières mythiques dans le Nord du
            Québec tout comme les Hautes-Laurentides. Ce que nos sit es vous
            proposent ? Pêche à la truite mouchetée et grise, au doré jaune et
            au brochet, au grand corégone, au saumon de l’Atlantique et
            ouananiche, ainsi que l’omble chevalier.
          </p>
          <a href="#" className="card-button">
            Forfait 2 <img src={ArrowUpRightBlack} />
          </a>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={Image3} alt="Lemons on a white surface" />
          </div>
          <h4 className="card-title">Case Tilte</h4>
          <h5 className="card-subtitle">Case sous-titre</h5>
          <p className="card-text">
            BASIC vous guide à travers des territoires authentiques, où la
            chasse est une quête de respect et de sens. Accompagné par des
            experts passionnés, découvrez plusieurs types d’expériences de
            chasse où l’essentiel réside dans la connexion avec la nature, une
            saine gestion des territoires et de leurs habitats. Ours noir,
            orignal, cerf de Virginie (chevreuil), petits gibiers sont au menu
            et ce, tant au sein de séjours de chasse traditionnel que lors
            d’expériences uniques en symbiose avec l’environnement et les
            traditions millénaires.
          </p>
          <a href="#" className="card-button">
            Forfait 3 <img src={ArrowUpRightBlack} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
