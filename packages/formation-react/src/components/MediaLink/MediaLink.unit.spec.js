import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import MediaLink, { findMediaSite } from './MediaLink';
import { createIcon } from '../../helpers/link-utils';

const testSites = {
  unknown: 'https://foo.bar',
  youtube: 'https://www.youtube.com/watch?v=123456',
  instagram: 'https://www.instagram.com/foo',
};

describe('Widget <MediaLink />', () => {
  describe('utility functions', () => {
    it('should find known media sites', () => {
      expect(findMediaSite()).to.be.undefined;
      expect(findMediaSite(testSites.unknown)).to.be.undefined;
      expect(findMediaSite(testSites.youtube)).to.equal('youtube.com');
      expect(findMediaSite(testSites.instagram)).to.equal('instagram.com');
    });
  });
  describe('component', () => {
    it('should render', () => {
      const wrapper = shallow(
        <MediaLink href={testSites.youtube} title="foo" />,
      );
      const props = wrapper.props();
      expect(props.href).to.equal(testSites.youtube);
      expect(props.target).to.equal('_blank');
      expect(props.rel).to.equal('noopener noreferrer');
      expect(wrapper.text()).to.equal('View video about foo on YouTube');
      expect(wrapper.find('i').props().className).to.equal(
        'vads-u-padding-right--1 fab fa-youtube',
      );
      wrapper.unmount();
    });

    it('should render unknown site', () => {
      const wrapper = shallow(
        <MediaLink href={testSites.unknown} title="foobar" />,
      );
      const props = wrapper.props();
      expect(props.href).to.equal(testSites.unknown);
      expect(props.target).to.equal('_blank');
      expect(props.rel).to.equal('noopener noreferrer');
      expect(wrapper.text().trim()).to.equal('View site about foobar');
      expect(wrapper.find('i').props().className).to.equal(
        'vads-u-padding-right--1 fas fa-play-circle',
      );
      wrapper.unmount();
    });

    it('should render content without an icon', () => {
      const wrapper = shallow(
        <MediaLink
          href={testSites.unknown}
          icon={null}
          content={() => 'No icon'}
        />,
      );
      const props = wrapper.props();
      expect(props.href).to.equal(testSites.unknown);
      expect(props.target).to.equal('_blank');
      expect(props.rel).to.equal('noopener noreferrer');
      expect(wrapper.text()).to.equal('No icon');
      expect(wrapper.find('i').length).to.equal(0);
      wrapper.unmount();
    });

    it('should render internal site & custom content', () => {
      const wrapper = shallow(
        <MediaLink
          href={testSites.unknown}
          external={false}
          icon={createIcon('fas fa-play-circle')}
          content={() => 'Some internal VA video'}
        />,
      );
      const props = wrapper.props();
      expect(props.rel).to.be.undefined;
      expect(props.target).to.be.undefined;
      expect(props.href).to.equal(testSites.unknown);
      expect(wrapper.text()).to.equal('Some internal VA video');
      expect(wrapper.find('i').props().className).to.equal(
        'vads-u-padding-right--1 fas fa-play-circle',
      );
      wrapper.unmount();
    });

    it('should render custom content', () => {
      const wrapper = shallow(
        <MediaLink
          href={testSites.youtube}
          title={
            <>
              Check out this <em>awesome</em> <dfn>YouTube</dfn> video about our
              new product!
            </>
          }
          content={({ props }) => props.title}
        />,
      );
      const props = wrapper.props();
      expect(props.href).to.equal(testSites.youtube);
      expect(props.target).to.equal('_blank');
      expect(props.rel).to.equal('noopener noreferrer');
      expect(wrapper.text()).to.equal(
        'Check out this awesome YouTube video about our new product!',
      );
      expect(wrapper.find('i').props().className).to.equal(
        'vads-u-padding-right--1 fab fa-youtube',
      );
      wrapper.unmount();
    });

    // Test errors
    it('should throw an error if no href is passed', () => {
      expect(() => {
        // Not necessary if not componentWillUnmount
        // eslint-disable-next-line va-enzyme/unmount
        shallow(<MediaLink title="some title" />);
      }).to.throw('Media links require an href property');
    });
    it('should throw an error if no title is passed', () => {
      expect(() => {
        // Not necessary if not componentWillUnmount
        // eslint-disable-next-line va-enzyme/unmount
        shallow(<MediaLink href="https://example.com/foo.pdf" />);
      }).to.throw(
        'Media links require a title property or custom content function',
      );
    });
    it('should not throw an error if no title is passed, but has children', () => {
      const wrapper = shallow(
        <MediaLink
          href="https://example.com/foo.pdf"
          content={() => 'Foo something something... bar'}
        />,
      );
      expect(wrapper).to.exist;
      wrapper.unmount();
    });
  });
});
