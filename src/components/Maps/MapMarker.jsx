import Mountain from "../../assets/svg/Mountains-2.svg";
import Fish from "../../assets/svg/Fishing-icon.svg";
import Crosshair from "../../assets/svg/Crosshair.svg";
import "./map-marker.scss";

export default function MapMarker({ position, icon }) {
  const renderIcon = () => {
    switch (icon) {
      case "mountain":
        return <img src={Mountain} />;
      case "fish":
        return <img src={Fish} />;
      case "crosshair":
        return <img src={Crosshair} />;
      default:
        return <></>;
    }
  };

  return (
    <div
      className="map-marker"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    >
      {renderIcon()}
    </div>
  );
}
