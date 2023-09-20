import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Layout from '../app/layout';
import GuideLayout from '../components/GuideLayout/component';
import RenderContentElement from '../content-elements/RenderContentElement/component';

export const getStaticProps = async () => {
  const url = 'https://redaktion.its1.finanztip.de/v1/pagebyid/2314';
  const encodedCredentials = btoa('apiuser:apipassword');
  const headers = new Headers();
  headers.append('Authorization', `Basic ${encodedCredentials}`);
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');
  let contentElements = [];

  const res = await fetch(url, {
    method: 'GET',
    headers,
  });

  if (res.ok) {
    const responseJson = await res.json();
    contentElements = await responseJson.contentElements;
    throw new Error('Something went wrong');
  } else {
    contentElements = [];
  }

  return { props: { contentElements }, revalidate: 10 };
};

export default function Page({ contentElements }) {
  return (
    <Layout>
      <Link href="/aktien">Aktien</Link>
      <GuideLayout
        tagline="Sichere Geldanlage"
        headline="So legst Du Dein Geld einfach sicher an">
        {contentElements.map((contentElement, index) => (
          <RenderContentElement key={index} contentElement={contentElement} />
        ))}
      </GuideLayout>
    </Layout>
  );
}

Page.propTypes = {
  contentElements: PropTypes.array,
};
