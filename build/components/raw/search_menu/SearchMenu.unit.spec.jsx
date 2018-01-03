import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { axeCheck } from '../../../lib/testing/helpers';

import SearchMenu from './SearchMenu.jsx';

describe('<SearchMenu/>', () => {
  it('should render', () => {
    const tree = shallow(<SearchMenu id="searchmenu" title="SearchMenu title" isOpen clickHandler={() => {}}>SearchMenu contents</SearchMenu>);
    expect(tree.text()).to.contain('SearchMenu contents');
  });

  it('should pass aXe check when closed', () => {
    return axeCheck(<SearchMenu id="searchmenu" title="SearchMenu title" clickHandler={() => {}}/>);
  });
  it('should pass aXe check when open', () => {
    return axeCheck(<SearchMenu id="searchmenu" title="SearchMenu title" isOpen clickHandler={() => {}}/>);
  });
});
