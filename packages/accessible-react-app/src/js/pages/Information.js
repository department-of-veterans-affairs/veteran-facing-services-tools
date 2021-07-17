import React from 'react';
import PropTypes from 'prop-types';
import { HEADER_ID } from '../config/constants';

import Layout from '../layout/Layout';
import Main from '../components/Main';
import Accordion from '../components/Accordion';

const Information = props => {
  const { title } = props;

  return (
    <Layout headerText={title} title={title}>
      <Main headerId={HEADER_ID} headerText={title} setFocus>
        <p>
          Please read our Frequently-asked Questions (FAQs) for more information
          about AnyCorp!
        </p>
        <Accordion accordionLabel="What are your office hours?">
          <p>
            Our office hours are 8 am to 5 pm Eastern Time, Monday through
            Friday. AnyCorp is closed on federal United States holidays.
          </p>
        </Accordion>

        <Accordion accordionLabel="What services do you provide?">
          <p>
            AnyCorp offers three major services:
            <ul>
              <li>Information Technology (IT)</li>
              <li>Web Development</li>
              <li>Cloud Storage</li>
            </ul>
          </p>
        </Accordion>

        <Accordion accordionLabel="Where are you located?">
          <p>
            AnyCorp has regional offices in the Pacific Northwest, New England,
            and the Midwest.
          </p>

          <div
            className="ac-address-block"
            itemScope
            itemType="http://schema.org/Organization"
          >
            <span itemProp="name">AnyCorp Data Processing Center</span>
            <span itemProp="department">Attention: D-5959 Claims</span>
            <div
              itemProp="address"
              itemScope
              itemType="http://schema.org/PostalAddress"
            >
              <span itemProp="postOfficeBoxNumber">PO Box 10084</span>
              <span itemProp="addressLocality">
                Eugene, <abbr title="Oregon">OR</abbr>
              </span>
              <span itemProp="postalCode">48771-5543</span>
            </div>
          </div>

          <div
            className="ac-address-block"
            itemScope
            itemType="http://schema.org/Organization"
          >
            <span itemProp="name">AnyCorp Web Development</span>
            <span itemProp="department">Attention: W-738 Claims</span>
            <div
              itemProp="address"
              itemScope
              itemType="http://schema.org/PostalAddress"
            >
              <span itemProp="postOfficeBoxNumber">PO Box 9872</span>
              <span itemProp="addressLocality">
                Boston, <abbr title="Massachusetts">MA</abbr>
              </span>
              <span itemProp="postalCode">94158-4036</span>
            </div>
          </div>

          <div
            className="ac-address-block"
            itemScope
            itemType="http://schema.org/Organization"
          >
            <span itemProp="name">AnyCorp Cloud Storage Solutions</span>
            <span itemProp="department">Attention: C-123 Claims</span>
            <div
              itemProp="address"
              itemScope
              itemType="http://schema.org/PostalAddress"
            >
              <span itemProp="postOfficeBoxNumber">PO Box 10025</span>
              <span itemProp="addressLocality">
                Madison, <abbr title="Wisconsin">WI</abbr>
              </span>
              <span itemProp="postalCode">53547-5088</span>
            </div>
          </div>
        </Accordion>
      </Main>
    </Layout>
  );
};

Information.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Information;
