import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
// import sinon from 'sinon';
// import { axeCheck } from '../../helpers/test-helpers';

import AccessibleLink from './AccessibleLink';
import { buildIcon, createContentFromTemplate } from './utils';

describe('Widget <AccessibleLink />', () => {
  describe('utility functions', () => {
    it('should create a valid icon', () => {
      ['fas fa-download', 'fab fa-youtube'].forEach(className => {
        const wrapper = shallow(buildIcon(className));
        expect(wrapper.type()).to.equal('i');
        expect(wrapper.props().className).to.equal(
          `vads-u-padding-right--1 ${className}`,
        );
        wrapper.unmount();
      });
    });
    it('should create title from template', () => {
      const templates = [
        {
          template: 'a {b} {c} d {e}',
          result: 'a {b} {c} d {e}',
        },
        {
          template: 'a {b} {c} d {e}',
          a: 'v',
          b: 'w',
          c: 'x',
          d: 'y',
          e: 'z',
          result: 'a w x d z',
        },
        {
          template: 'I want a {type} {color} {vehicle}',
          color: 'blue',
          vehicle: 'truck',
          type: <em key="x">hybrid</em>,
          result: 'I want a hybrid blue truck',
        },
      ];
      templates.forEach(example => {
        const wrapper = shallow(<p>{createContentFromTemplate(example)}</p>);
        expect(wrapper.text()).to.equal(example.result);
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
      expect(wrapper.text()).to.equal(`Download ${title} JPG`);
      wrapper.unmount();
    });
    it('should render MediaLink component', () => {
      const href = 'https://www.youtube.com/test';
      const title = 'Foobar';
      const wrapper = shallow(
        <AccessibleLink.Media href={href} title={title} />,
      );
      expect(wrapper.props().href).to.equal(href);
      expect(wrapper.text()).to.equal(`View video about ${title} on YouTube`);
      wrapper.unmount();
    });
  });
});
