import React from 'react';
import Layout from '../layouts/Layout';
import { Link } from 'gatsby';

export default function Index({ location }) {
  return (
    <Layout location={location}>
      <div className="site-l-wrapper">
        <p>
          Welcome! This site will help you get set up to work on the front end
          of VA.gov.
        </p>
        <ul>
          <li>
            If you're looking to get your environment set up, visit our{' '}
            <Link to="/getting-started">Getting started</Link> section.
          </li>
          <li>
            If you're looking to understand how to use our visual styles and
            components, visit our <Link to="/visual-design">Visual design</Link>{' '}
            section.
          </li>
          <li>
            For information about building forms on VA.gov, visit the{' '}
            <Link to="/forms">Forms</Link> section.
          </li>
          <li>
            For all other information about the VFS platform, visit the{' '}
            <Link to="/platform">Platform</Link> section.
          </li>
          <li>
            For info about writing documentation on this site, see the{' '}
            <Link to="/documentation-guide">Documentation guide</Link> section.
          </li>
        </ul>
      </div>
    </Layout>
  );
}
