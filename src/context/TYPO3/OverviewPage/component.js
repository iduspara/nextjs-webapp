import React from 'react';
import Hero from '@components/Hero/component';
import LinkList from '@components/LinkList/component';

const component = (props) => (
  <section className="ft-site">
    <Hero {...props.hero} />
    {props.linkLists.map((linkList, index) => (
      <LinkList key={index} {...linkList} />
    ))}
  </section>
);

export default component;
