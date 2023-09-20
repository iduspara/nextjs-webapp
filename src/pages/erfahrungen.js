import React from 'react';
import PropTypes from 'prop-types';
import HeaderProviderList from '@context/ExperiencePortal/HeaderProviderList/component';
import AffiliateText from '@partials/AffiliateText/component';
import Layout from '../app/layout';

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://www.finanztip.de/erfahrungen/wp-json/wp/v2/anbieter'
  );
  const providers = await res.json();
  const reformattedProvidersList = [];
  const allSearchTags = [
    'DSL',
    'Handytarif',
    'Kabel-Internet',
    'Autokredit',
    'Baufinanzierung',
    'Festgeld',
    'Girokonto',
    'Kredit',
    'Kreditkarte',
    'Tagesgeld',
    'Wertpapierdepot',
    'Auslandskrankenversicherung',
    'Krankenversicherung (gesetzlich)',
  ];

  providers.forEach((provider) => {
    const positiveReviews = Math.floor(Math.random() * 100);
    const negativeReviews = Math.floor(Math.random() * (100 - positiveReviews));
    const totalReviews = Math.floor(Math.random() * 1000);
    const recommendation = Math.floor(Math.random() * 2) === 1;

    const randomNumberOfSearchTags = Math.floor(
      Math.random() * allSearchTags.length
    );
    const chosenSearchTags = [];
    for (let index = 0; index < randomNumberOfSearchTags; index += 1) {
      chosenSearchTags.push(
        allSearchTags[Math.floor(Math.random() * allSearchTags.length)]
      );
    }
    // eslint-disable-next-line prettier/prettier
    const providerSearchTags = `${provider.title.rendered} ${chosenSearchTags.join(' ')}`;

    reformattedProvidersList.push({
      name: provider.title.rendered,
      logo: 'https://via.placeholder.com/200x50',
      href: provider.link,
      positiveAmount: positiveReviews,
      negativeAmount: negativeReviews,
      commentsAmount: totalReviews,
      isRecommendation: recommendation,
      searchTags: providerSearchTags,
    });
  });

  return { props: { providers: reformattedProvidersList } };
};

export default function Page({ providers }) {
  return (
    <Layout>
      <section className="ft-experience-portal">
        <HeaderProviderList
          headlineOne="Erfahrungen mit Anbietern"
          headlineTwo="Alle Anbieterbewertungen im Überblick"
          text="Wir bei Finanztip wollen, dass Du immer rundum informiert bist. Geprüfte Informationen und konkrete Empfehlungen erhältst Du von unserer Experten-Redaktion, beispielsweise in unseren Ratgebern. Tatsächliche Erfahrungen mit den Anbietern kannst Du hier in den Erfahrungsberichten echter Kunden einsehen. <br/><br/>Mach mit! Teile auch Du Deine Erfahrungen und hilf so der Finanztip-Community, sich ein umfassendes Bild von einem Anbieter zu machen."
          type="overview"
          searchFieldLabel="Suche nach Anbietern"
          selectOptions={[
            {
              label: 'alle Produkte',
              value: '',
            },
            {
              label: 'Kabel-Internet',
              value: 'Kabel-Internet',
            },
            {
              label: 'Baufinanzierung',
              value: 'Baufinanzierung',
            },
            {
              label: 'Festgeld',
              value: 'Festgeld',
            },
            {
              label: 'Tagesgeld',
              value: 'Tagesgeld',
            },
            {
              label: 'Krankenversicherung (gesetzlich)',
              value: 'Krankenversicherung (gesetzlich)',
            },
          ]}
          providers={providers}
          title="Keine Anbieterbewertungen mit diesen Filtereinstellungen"
          buttonLabel="Filter zurücksetzen"
          rightId="productfilter"
        />
        <AffiliateText
          headline="* Was der Stern bedeutet:"
          affiliateText='<p>Finanztip gehört zu 100 Prozent der gemeinnützigen Finanztip Stiftung. Die hat den Auftrag, die Finanzbildung in Deutschland zu fördern. Alle Gewinne, die Finanztip ausschüttet, gehen an die Stiftung und werden dort für gemeinnützige Projekte verwendet – wie etwa unsere Bildungsinitiative Finanztip Schule.</p><p>Wir wollen mit unseren Emp­feh­lungen möglichst vielen Menschen helfen, ihre Finanzen selber zu machen. Daher sind unsere Inhalte kostenlos im Netz verfügbar. Wir finanzieren unsere aufwändige Arbeit mit sogenannten Affiliate Links. Diese Links kennzeichnen wir mit einem Sternchen (*).</p><p>Bei Finanztip handhaben wir Affiliate Links aber anders als andere Websites. Wir verlinken ausschließlich auf Produkte, die vorher von unserer unabhängigen Experten-Redaktion emp­foh­len wurden. Nur dann kann der entsprechende Anbieter einen Link zu diesem Angebot setzen lassen. Geld bekommen wir, wenn Du auf einen solchen Link klickst oder beim Anbieter einen Vertrag abschließt.</p><p>Ob und in welcher Höhe uns ein Anbieter vergütet, hat keinerlei Einfluss auf unsere Emp­feh­lungen. Was Dir unsere Experten empfehlen, hängt allein davon ab, ob ein Angebot gut für Verbraucher ist.</p><p>Mehr Informationen über unsere Arbeitsweise findest Du auf unserer <a href="/ueber-uns/">Über-uns-Seite</a>.</p>'
          className="background-color-gradientup font-ui leading-text-tight font-size-xs"
        />
      </section>
    </Layout>
  );
}

Page.propTypes = {
  providers: PropTypes.array,
};
