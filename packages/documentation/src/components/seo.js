import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export function Head({ description, lang = 'en', meta = [], keywords = [], title, overrideTitle = false }) {
  const { site } = useStaticQuery(detailsQuery);

  const metaDescription = description || site.siteMetadata.description;
  const pageTitle = overrideTitle ? title : `${title} | ${site.siteMetadata.title}`;

  return (
    <>
      <html lang={lang} />
      <title>{pageTitle}</title>
      {[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'docsearch:language',
          content: 'en',
        },
        {
          name: 'docsearch:version',
          content: '1.0.0',
        },
        {
          property: 'og:title',
          content: pageTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        ...(keywords.length > 0 ? [{
          name: 'keywords',
          content: keywords.join(', '),
        }] : []),
        ...meta,
      ].map(({ name, content, property }, i) => (
        property ? 
          <meta key={i} property={property} content={content} /> :
          <meta key={i} name={name} content={content} />
      ))}
    </>
  );
}

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  overrideTitle: PropTypes.bool,
};

export default Head;
