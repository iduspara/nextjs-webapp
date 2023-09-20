import React from 'react';
import Image from '@partials/Image/component';
import domready from 'domready';
import Scripts from './scripts';

const component = (props) => {
  // domready(Scripts);

  const firstItems = props.links.slice(0, 6);
  const nextItems = props.links.slice(6);

  const singleLink = (link, index) => {
    const iconClasses = link.download
      ? 'icon-download no-filter'
      : 'icon-chevron-right';
    return (
      <a
        key={index}
        href={link.link}
        className="link-list-link"
        download={link.download}>
        <Image src={link.image} alt={link.label} />
        <span className="link-label">{link.label}</span>
        <span className={`link-icon ${iconClasses}`}></span>
      </a>
    );
  };

  return (
    <div className="link-list">
      <div className="experience-portal-grid-l">
        {props.headline && (
          <h2 className="link-list-headline">{props.headline}</h2>
        )}
        <div className="link-list-container">{firstItems.map(singleLink)}</div>
        {nextItems.length > 0 && (
          <div
            className="link-list-container-remaining overflow-hidden"
            style={{ maxHeight: 0 }}>
            {nextItems.map(singleLink)}
          </div>
        )}
        {nextItems.length > 0 && (
          <div className="text-center">
            <a
              className="remaining-toggle button"
              data-initial="Alle anzeigen"
              data-active="Weniger anzeigen">
              Alle anzeigen
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default component;
