import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SidebarBlock from './SidebarBlock';

describe('<SidebarBlock />', () => {
  it('should render', () => {
    const mockHeader = 'Here is the header';
    const mockContent = <div>Here is the content</div>;
    const wrapper = shallow(
      <SidebarBlock heading={mockHeader} content={mockContent} />,
    );
    expect(wrapper.text()).to.equal('Here is the headerHere is the content');
    wrapper.unmount();
  });

  it('should render an h2 by default', () => {
    const mockHeader = 'Here is the header';
    const mockContent = <div>Here is the content</div>;
    const wrapper = shallow(
      <SidebarBlock heading={mockHeader} content={mockContent} />,
    );
    expect(wrapper.find('h2')).to.have.lengthOf(1);
    wrapper.unmount();
  });

  it('should render an h3 when passed as a prop', () => {
    const mockHeader = 'Here is the header';
    const mockContent = <div>Here is the content</div>;
    const wrapper = shallow(
      <SidebarBlock
        heading={mockHeader}
        headingLevel={3}
        content={mockContent}
      />,
    );
    expect(wrapper.find('h3')).to.have.lengthOf(1);
    wrapper.unmount();
  });

  it('should render an h4 when passed as a prop', () => {
    const mockHeader = 'Here is the header';
    const mockContent = <div>Here is the content</div>;
    const wrapper = shallow(
      <SidebarBlock
        heading={mockHeader}
        headingLevel={4}
        content={mockContent}
      />,
    );
    expect(wrapper.find('h4')).to.have.lengthOf(1);
    wrapper.unmount();
  });
});
