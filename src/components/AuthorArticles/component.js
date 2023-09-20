import React from 'react';
import domready from 'domready';
import Image from '@partials/Image/component';
import Scripts from './scripts';

const component = (props) => {
  // domready(Scripts);

  const firstItems = props.articles.slice(0, 6);
  const nextItems = props.articles.slice(6);

  const link = (child, image = null, imageClass = null) => (
    <a href={child.link} className="author-article">
      {image && <Image src={image} className={imageClass} />}
      <h3 className="links"> {child.title} </h3>
    </a>
  );
  return (
    <div className="author-articles">
      <div className="container">
        <h2 className="headline"> Alle Artikel von Dr. Britta Beate Schön</h2>
        <ul className="article-list">
          {firstItems.map((child, index) => {
            if (index === 0)
              return (
                <li className="image-padding" key={index}>
                  {link(child, child.image)}
                </li>
              );
            if (index === 1)
              return (
                <li className="second-image-padding" key={index}>
                  {link(child, child.image, 'articlee-image hide-on-mobile')}
                </li>
              );
            if (index > 1) return <li key={index}>{link(child)}</li>;
          })}
          {nextItems.length > 0 && (
            <li>
              <a
                className="next-items-toggle toggle"
                data-initial="alle anzeigen"
                data-active="weniger anzeigen">
                alle anzeigen
              </a>
            </li>
          )}
        </ul>
        <ul className="next-items hidden hidden-article-list">
          {nextItems.map((child, index) =>
            index < 2 ? (
              <li className="reset-hidden-articles-row border-top" key={index}>
                {link(child)}
              </li>
            ) : (
              <li key={index}>{link(child)}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
export default component;
