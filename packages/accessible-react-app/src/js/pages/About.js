import React from 'react';
import PropTypes from 'prop-types';
import { HEADER_ID } from '../config/constants';

import Layout from '../layout/Layout';
import Main from '../components/Main';
import lake from '../../img/lake.jpg';

const About = props => {
  const { title } = props;

  /* SR talking point - DON'T skip heading levels */
  return (
    <Layout headerText={title} title={title}>
      <Main
        className="ac-layout--two-column__main"
        headerId={HEADER_ID}
        headerText={title}
        setFocus
      >
        <section aria-label="Company background">
          <h2>The things we do!</h2>
          <p>
            We will tell you all there is to know about AnyCorp. We started in
            1999 during the Dot Com boom. We felt it was our time to do
            something spectacular and use the new power of the Internet to make
            it happen.
          </p>
          <h4>Some more things AnyCorp does!</h4>
          <p>
            This should be the next focusable elment after the skip link:{' '}
            <a href="https://google.com">Google search!</a>
          </p>
          <p>
            We are located at the base of a beautiful mountain!
            {/* SR talking point - image alt text situations */}
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={lake} />
          </p>
        </section>
      </Main>
      <aside className="ac-layout--two-column__aside">
        <section aria-labelledby="aside-h-1">
          <h3 id="aside-h-1">History</h3>
          <p>
            This is a container in the <strong>aside</strong> element. Aside
            should be used for content related to the main area. Asides include
            links to other sections, image callouts, and quoted text.
          </p>
        </section>

        <section aria-labelledby="aside-h-2">
          {/* SR talking point - list handling */}
          <h3 id="aside-h-2">Contact Us</h3>
          <p className="ac-aside__subhead" id="aside-sales">
            Sales
          </p>
          <ul className="ac-aside__list">
            <li>
              Marie
              <a href="tel:123-456-7890">(123) 456-7890</a>
            </li>
            <li>
              Michael
              <a href="tel:123-456-7891">(123) 456-7891</a>
            </li>
          </ul>

          <p className="ac-aside__subhead" id="aside-it">
            Information Technology
          </p>
          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
          <ul
            aria-labelledby="aside-h-2 aside-it"
            className="ac-aside__list"
            role="list"
          >
            <li>
              James
              <a
                href="tel:123-456-7893"
                aria-label="Call James. 1 2 3. 4 5 6. 7 8 9 3"
              >
                (123) 456-7893
              </a>
            </li>
            <li>
              Melanie
              <a
                href="tel:123-456-7894"
                aria-label="Call Melanie. 1 2 3. 4 5 6. 7 8 9 4"
              >
                (123) 456-7894
              </a>
            </li>
            <li>
              Andrew
              <a
                href="tel:123-456-7895"
                aria-label="Call Andrew. 1 2 3. 4 5 6. 7 8 9 5"
              >
                (123) 456-7895
              </a>
            </li>
          </ul>
        </section>
      </aside>
    </Layout>
  );
};

About.propTypes = {
  title: PropTypes.string.isRequired,
};

export default About;
