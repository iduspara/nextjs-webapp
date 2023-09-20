import React from 'react';
import Headline from '@partials/Headline/component';
import authorImage from './author.png';

const component = (props) => (
  <div className="author">
    <div className="author-header">
      <div className="author-image">
        <img
          src={authorImage}
          alt={`${props.authorName} ${props.authorNameSlogan}`}
        />
      </div>
      <div>
        <Headline type="h1" class="author-name">
          {props.authorName}:
          <span className="author-slogan">{props.authorNameSlogan}</span>
        </Headline>
        <p className="author-role"> {props.authorRole} </p>
        <hr className="separator" />
        {props.socialLinks.length > 0 && (
          <div className="social-links">
            {props.socialLinks.map((element, index) => (
              <a
                key={index}
                href={element.link}
                target="_blank"
                rel="noreferrer">
                <span
                  className={`icon-${element.type} color-indigo font-size-l`}></span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
    <div className="author-description">
      <p>{props.authorDescription}</p>
    </div>
  </div>
);

export default component;
