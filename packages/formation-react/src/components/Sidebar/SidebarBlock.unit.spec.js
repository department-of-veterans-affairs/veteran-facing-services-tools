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
  it('should throw an error when no header is given', () => {
    const mockContent = <div>Here is the content</div>;
    const wrapper = shallow(<SidebarBlock content={mockContent} />);
    expect(wrapper.text()).to.equal('Here is the content');
    wrapper.unmount();
  });
});
