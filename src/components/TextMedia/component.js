import React from 'react';
import Image from '@partials/Image/component';
import Button from '@partials/Button/component';
import ReactHtmlParser from 'react-html-parser';
import FinanztipGrid from '@shared/FinanztipGrid/component';

const component = (props) => (
  <div
    className={`text-media background-color-${props.backgroundColor} image-position-${props.imagePosition}`}>
    <FinanztipGrid size="s" className="text-media-wrapper">
      <div className="text-media-media-content">
        <Image src={props.image} alt={props.headline} />
      </div>
      <div className="text-media-text-content">
        <h1 className="text-media-tagline">{props.tagline}</h1>
        <h2 className="text-media-headline">{props.headline}</h2>
        <div className="text-media-text">{ReactHtmlParser(props.text)}</div>
        {props.buttonLink && (
          <Button
            href={props.buttonLink}
            type={props.buttonType}
            target={props.buttonTarget}>
            {props.buttonLabel}
          </Button>
        )}
      </div>
    </FinanztipGrid>
  </div>
);
export default component;
