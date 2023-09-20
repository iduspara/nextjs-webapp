import React from 'react';
import HeartIcon from '@icons/Heart/component';

const component = (props) => {
  const type = props.type ? props.type : '';
  const size = props.small ? 'small' : '';
  const customClass = props.customClass ? props.customClass : '';
  const track = props.dataTrack ? props.dataTrack : null;
  const supportIcon = type === 'support' && <HeartIcon />;

  if (props.href) {
    return (
      <a
        className={`button ${type} ${size} ${customClass}`}
        href={props.href}
        data-track={track}
        onClick={props.onClick}>
        {supportIcon}
        {props.children}
      </a>
    );
  }

  return (
    <button
      className={`${type} ${size} ${customClass}`}
      data-track={track}
      onClick={props.onClick}>
      {supportIcon}
      {props.children}
    </button>
  );
};

export default component;
