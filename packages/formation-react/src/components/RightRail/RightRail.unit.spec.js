import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Sidebar from './Sidebar';
import { axeCheck } from '../../helpers/test-helpers';

describe('<Sidebar />', () => {
  it('should render', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.find('div.medium-screen:vads-u-padding-left--4')).to.exist;
    wrapper.unmount();
  });

  it('should pass aXe check when showing full sidebar', () =>
    axeCheck(<Sidebar />));
});
