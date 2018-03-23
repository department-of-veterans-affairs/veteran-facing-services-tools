
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
// import { axeCheck } from '../../../../lib/testing/helpers';

import HelpMenu from './HelpMenu.jsx';

describe('<HelpMenu>', () => {
  const props = {
    isOpen: false,
    clickHandler: f => f
  };

  const tree = shallow(<HelpMenu {...props}/>);

  it('should render', () => {
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });
});
