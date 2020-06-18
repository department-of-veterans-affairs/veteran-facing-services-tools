import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Sidebar from './Sidebar';

describe('<Sidebar />', () => {
  it('should render', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.find('div.medium-screen:vads-u-padding-left--4')).to.exist;
    wrapper.unmount();
  });
});
