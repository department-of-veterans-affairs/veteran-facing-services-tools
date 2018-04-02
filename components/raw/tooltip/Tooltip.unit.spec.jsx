import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { axeCheck } from '../../../lib/testing/helpers';
import Tooltip from './Tooltip.jsx';

describe('<Tooltip/>', () => {
  it('should render', () => {
    const tree = shallow(<Tooltip toolTipText="test" tabIndex={0}/>);
    expect(tree.text()).to.contain('test');
  });

  it('should pass aXe check when closed', () => {
    const check = axeCheck(<Tooltip toolTipText="test" tabIndex={0}/>);
    return check;
  });

  it('should pass aXe check when open', () => {
    const check = axeCheck(<Tooltip open toolTipText="test" tabIndex={0}/>);
    return check;
  });
});
