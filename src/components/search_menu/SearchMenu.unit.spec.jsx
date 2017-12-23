import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { axeCheck } from '../../../lib/testing/helpers';

import SearchMenu from './SearchMenu.jsx';

describe('<SearchMenu/>', () => {
  it('should render', () => {
    const tree = shallow(<SearchMenu id="modal" title="Modal title" visible onClose={() => {}}>Modal contents</SearchMenu>);
    expect(tree.text()).to.contain('Modal contents');
  });

  it('should pass aXe check', () => {
    return axeCheck(<SearchMenu id="modal" title="Modal title" visible onClose={() => {}}/>);
  });
});
