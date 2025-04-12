import React, { memo, useRef, useState } from 'react';
import ImageMap from '../../../assets/images/ImageMap.png';
import Emplacement from '../../../assets/images/Emplacement.png';
import Mountains from '../../../assets/icons/MountainsBlack.svg';
import Fishing from '../../../assets/icons/FishingBlack.svg';
import Crosshair from '../../../assets/icons/CrosshairBlack.svg';
import './styles.scss';
import Point from './Point/Point';
import { Popover } from 'antd';

const Map = ({ mapData, points }) => {
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [backgroundSize, setBackgroundSize] = useState('100% 100%');
  const [backgroundPosition, setBackgroundPosition] = useState('center');

  const locations = [
    {
      id: 1,
      x: 420,
      y: 250,
      icon: Mountains,
      name: points[0].name,
      activities: points[0].activities,
    },
    {
      id: 2,
      x: 650,
      y: 300,
      icon: Fishing,
      name: points[1].name,
      activities: points[1].activities,
    },
    {
      id: 3,
      x: 380,
      y: 380,
      icon: Crosshair,
      name: points[2].name,
      activities: points[2].activities,
    },
  ];

  function getClickedElement(clickedX, clickedY) {
    for (const point of locations) {
      if (
        clickedX > point.x - 25 &&
        clickedX < point.x + 25 &&
        clickedY > point.y - 25 &&
        clickedY < point.y + 25
      ) {
        return point;
      }
    }
    return null;
  }

  function onGameClicked(event) {
    if (isZoomedIn) {
      setBackgroundSize('100% 100%');
      setBackgroundPosition('center');
      setIsZoomedIn(false);
    } else {
      const rect = event.currentTarget.getBoundingClientRect();
      const clickedX = event.clientX - rect.left;
      const clickedY = event.clientY - rect.top;

      const clickedElement = getClickedElement(clickedX, clickedY);

      if (clickedElement) {
        const zoomedX = 200 - clickedElement.x * 2;
        const zoomedY = 200 - clickedElement.y * 2;

        setBackgroundSize('200% 200%');
        setBackgroundPosition(`${zoomedX}px ${zoomedY}px`);
        setIsZoomedIn(true);
      }
    }
  }

  return (
    <div className="map-container">
      <div className="section-header">
        <div className="line"></div>
        <h2 className="main-title">{mapData.title}</h2>
        <div className="line"></div>
      </div>

      <div className="section-header-icon">
        {mapData.cases.map((item, index) => {
          return (
            <a key={index} href="#" className="card-button">
              <img
                src={
                  index === 0 ? Mountains : index === 1 ? Fishing : Crosshair
                }
              />
              {item}
            </a>
          );
        })}
      </div>

      <div className="map-header">
        <div className="logo-container">
          <div className="logo">
            <img src={Emplacement} />
          </div>
          <h1>Emplacement</h1>
        </div>
      </div>

      <div
        id="game"
        className="map-content"
        onClick={onGameClicked}
        style={{
          backgroundSize,
          backgroundPosition,
          height: '600px',
          border: '1px solid #ccc',
          position: 'relative',
          cursor: 'pointer',
          // You'll need to set your background image here
          backgroundImage: `url(${ImageMap})`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="map-image-container">
          {locations.map((marker, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                left: marker.x - 5,
                top: marker.y - 5,
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                pointerEvents: 'none',
              }}
            >
              <div className="map-marker">
                <img src={marker.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="map-content">
        <div className="map-image-container">
          <img src={ImageMap} alt="Topographic map" className="map-image" />

          {markers.map(marker => (
            <Point
              key={marker.id}
              position={{ top: marker.lat, left: marker.lng }}
              icon={marker.icon}
              name={marker.name}
              activities={marker.activities}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Map;
