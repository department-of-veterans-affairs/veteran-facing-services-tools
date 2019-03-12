import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { axeCheck } from '../../helpers/test-helpers';

import AdditionalInfo from './AdditionalInfo.jsx';
import ExpandingGroup from '../ExpandingGroup/ExpandingGroup';

describe('<AdditionalInfo/>', () => {
  let wrapper;
  // for the sake of more tests could be written
  // declared beforeEach and assigned to wrapper
  beforeEach(() => {
    wrapper = mount(<AdditionalInfo triggerText="test"/>).setState({
      open: true
    });
  });

  it('should render', () => {
    expect(wrapper.text()).to.contain('test');
    expect(wrapper.find('h4').length).to.equal(0);
  });
  it('should pass aXe check', () => {
    return axeCheck(<AdditionalInfo triggerText="test"/>);
  });
  it('should render title container as heading', () => {
    wrapper = mount(<AdditionalInfo tagName={'h4'} triggerText="test"/>).setState({
      open: true
    });
    expect(wrapper.find('h4').length).to.equal(1);
  });
  it('renders both children when open is true', () => {
    const first = wrapper.find('ExpandingGroup').props();
    expect(first.open).to.be.true;
    return axeCheck(
      <ExpandingGroup open={first.open}>
        <child1/>
        <child2/>
      </ExpandingGroup>
    );
  });
  it('places the aria-controls element directly on the content', () => {
    wrapper = mount(
      <AdditionalInfo triggerText="test" expandedContentId="my-special-content">
        Lorem ipsum whatever
      </AdditionalInfo>
    ).setState({ open: true });

    expect(wrapper.find('button[aria-controls="my-special-content"]').length).to.equal(1);
    const contentCheck = wrapper.contains(
      <div id="my-special-content" className="additional-info-content">
        Lorem ipsum whatever
      </div>
    );
    expect(contentCheck).to.equal(true);
  });
});
