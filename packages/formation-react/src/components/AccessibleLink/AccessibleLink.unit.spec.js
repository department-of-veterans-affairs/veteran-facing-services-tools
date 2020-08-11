import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import AccessibleLink from './AccessibleLink';
import { createIcon } from '../../helpers/link-utils';

describe('Widget <AccessibleLink />', () => {
  describe('utility functions', () => {
    it('should create a valid icon', () => {
      ['fas fa-download', 'fab fa-youtube'].forEach(className => {
        const wrapper = shallow(createIcon(className));
        expect(wrapper.type()).to.equal('i');
        expect(wrapper.props().className).to.equal(
          `vads-u-padding-right--1 ${className}`,
        );
        wrapper.unmount();
      });
    });
  });

  describe('component', () => {
    it('should render Telephone component', () => {
      const contact = '8005551212';
      const wrapper = shallow(<AccessibleLink.Telephone contact={contact} />);
      const props = wrapper.props();
      expect(props.href).to.contain('tel:');
      expect(props.href).to.contain(contact);
      wrapper.unmount();
    });
    it('should render DownloadLink component', () => {
      const href = 'https://www.example.com/test.jpg';
      const title = 'Test image';
      const wrapper = shallow(
        <AccessibleLink.Download href={href} title={title} />,
      );
      expect(wrapper.props().href).to.equal(href);
      expect(wrapper.text().trim()).to.equal(`Download ${title} JPG`);
      wrapper.unmount();
    });
    it('should render MediaLink component', () => {
      const href = 'https://www.youtube.com/test';
      const title = 'Foobar';
      const wrapper = shallow(
        <AccessibleLink.Media href={href} title={title} />,
      );
      expect(wrapper.props().href).to.equal(href);
      expect(wrapper.text().trim()).to.equal(
        `View video about ${title} on YouTube`,
      );
      wrapper.unmount();
    });
  });
});
