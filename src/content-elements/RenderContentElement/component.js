import React from 'react';
import IntroBox from '../Introbox/component';
import Headline from '../Headline/component';
import Text from '../Text/component';
import TextMedia from '../TextMedia/component';
import Image from '../Image/component';
import Shortcut from '../Shortcut/component';
import Podcast from '../Podcast/component';
import Collapsible from '../Collapsible/component';
import CallmoneyCalculator from '../CallmoneyCalculator/component';

const component = (props) => {
  const headline = props.contentElement.header &&
    props.contentElement.header !== 'Teaser' && (
      <div className="container header-contentelement-container">
        <div className="row">
          <div className="col-md-9 col-md-offset-1">
            <h3 className="header-contentelement heading-contentelement-3 doktype- parent-single-digit no-padding-left">
              <div className="header-prefix-number"></div>
              {props.contentElement.header}
            </h3>
          </div>
        </div>
      </div>
    );

  switch (props.contentElement.CType) {
    case 'ft_introbox':
      return (
        <IntroBox
          upHeadline={props.contentElement.txFtintroboxUpHeadline}
          upContent={props.contentElement.txFtintroboxUpContent}
          downHeadline={props.contentElement.txFtintroboxDownHeadline}
          downContent={props.contentElement.txFtintroboxDownContent}
        />
      );
    case 'text':
      return (
        <Text headline={headline} bodytext={props.contentElement.bodytext} />
      );
    case 'header':
      return <Headline headline={props.contentElement.header} />;
    case 'textmedia':
      return (
        <TextMedia
          headline={headline}
          headlineText={props.contentElement.header}
          bodytext={props.contentElement.bodytext}
          asset={props.contentElement.assets[0]}
        />
      );
    case 'image':
      return (
        <Image
          src={`https://www.finanztip.de/${props.contentElement.image[0].url}`}
          alt={props.contentElement.image[0].alternative}
          title={props.contentElement.image[0].name}
          width={props.contentElement.image[0].width}
          height={props.contentElement.image[0].height}
        />
      );
    case 'shortcut':
      return (
        <Shortcut
          headline={headline}
          bodytext={props.contentElement.content[0].bodytext}
        />
      );
    case 'ft_podcast':
      return <Podcast url={props.contentElement.PodcastScript} />;
    case 'ft_collapsible':
      return (
        <Collapsible
          headline={props.contentElement.collapsibleTitle}
          content={props.contentElement.collapsibleContent}
        />
      );
    case 'ftcalculators_callmoneycalculator':
      return <CallmoneyCalculator />;
    default:
      console.log(props.contentElement);
      return <div>{props.contentElement.CType}</div>;
  }
};
export default component;
