import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const component = (props) => {
  const HeadlineMarkup = (properties) => {
    if (properties.headline) {
      return (
        <h3 className="parent-single-digit no-padding-left">
          <span className="text-center">{properties.number}</span>
          <span>{properties.headline}</span>
        </h3>
      );
    }

    return null;
  };

  let elementId = '';
  let idSpan = '';
  if (props.id) {
    elementId = `content-${props.id}`;
    idSpan = <span id={props.id}></span>;
  }

  return (
    <div data-track="text" id={elementId}>
      {idSpan}
      <HeadlineMarkup number={props.number} headline={props.headline} />
      <p className={props.customClassText || ''}>
        {ReactHtmlParser(props.text)}
      </p>
    </div>
  );
};

export default component;
