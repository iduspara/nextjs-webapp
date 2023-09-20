import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Layout from '../app/layout';
import GuideLayout from '../components/GuideLayout/component';
import RenderContentElement from '../content-elements/RenderContentElement/component';

export const getStaticProps = async () => {
  const url = 'https://redaktion.its1.finanztip.de/v1/pagebyid/2264';
  const encodedCredentials = btoa('apiuser:apipassword');
  const headers = new Headers();
  headers.append('Authorization', `Basic ${encodedCredentials}`);
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');

  const res = await fetch(url, {
    method: 'GET',
    headers,
  });
  const responseJson = await res.json();
  const contentElements = await responseJson.contentElements;

  return { props: { contentElements }, revalidate: 10 };
};

export default function Page({ contentElements }) {
  return (
    <Layout>
      <Link href="/geldanlage">Geldanlage</Link>
      <GuideLayout
        tagline="Aktien für Anfänger"
        headline="So funktionieren Aktien">
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
