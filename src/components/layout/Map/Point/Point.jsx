import React, { memo, useState } from 'react';
import Mountains from 'assets/icons/MountainsBlack.svg';
import Fishing from 'assets/icons/FishingBlack.svg';
import Crosshair from 'assets/icons/CrosshairBlack.svg';
import './styles.scss';
import { Popover } from 'antd';

export default function Point({ position, icon, name, activities }) {
  const renderIcon = () => {
    switch (icon) {
      case 'mountain':
        return <img src={Mountains} />;
      case 'fish':
        return <img src={Fishing} />;
      case 'crosshair':
        return <img src={Crosshair} />;
      default:
        return <></>;
    }
  };

  return (
    <Popover
      content={
        <ul>
          {activities.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      }
      title={name}
      trigger="click"
    >
      <div
        className="map-marker"
        id={icon}
        style={{ top: `${position.top}%`, left: `${position.left}%` }}
      >
        {renderIcon()}
      </div>
    </Popover>
  );
}
