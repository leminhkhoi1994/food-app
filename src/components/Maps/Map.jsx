import { useState } from "react";
import ImageMap from "../../assets/images/ImageMap.png";
import Emplacement from "../../assets/images/Emplacement.png";
import Mountain from "../../assets/svg/Mountains-2.svg";
import Fish from "../../assets/svg/Fishing-icon.svg";
import Crosshair from "../../assets/svg/Crosshair.svg";
import "./styles.scss";
import MapMarker from "./MapMarker";

const Map = () => {
  const [markers, setMarkers] = useState([
    { id: 1, lat: 250, lng: 385, icon: "mountain" },
    { id: 2, lat: 320, lng: 550, icon: "fish" },
    { id: 3, lat: 375, lng: 355, icon: "crosshair" },
  ]);

  return (
    <div className="map-container">
      <div className="section-header">
        <div className="line"></div>
        <h2 className="main-title">TITRE BLOC 2</h2>
        <div className="line"></div>
      </div>

      <div className="section-header-icon">
        <a href="#" className="card-button">
          <img src={Mountain} />
          Activité 1
        </a>
        <a href="#" className="card-button">
          <img src={Fish} />
          Activité 2
        </a>
        <a href="#" className="card-button">
          <img src={Crosshair} />
          Activité 3
        </a>
      </div>

      <div className="map-header">
        <div className="logo-container">
          <div className="logo">
          <img src={Emplacement} />
          </div>
          <h1>Emplacement</h1>
        </div>
      </div>

      <div className="map-content">
        <div className="map-image-container">
          <img src={ImageMap} alt="Topographic map" className="map-image" />

          {markers.map((marker) => (
            <MapMarker
              key={marker.id}
              position={{ top: marker.lat, left: marker.lng }}
              icon={marker.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
