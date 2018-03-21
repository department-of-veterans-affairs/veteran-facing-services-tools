import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { axeCheck } from '../../../../lib/testing/helpers';

import ProgressBar from './ProgressBar.jsx';

describe('<ProgressBar/>', () => {
  it('should render', () => {
    const tree = shallow(<ProgressBar percent={35}/>);
    expect(tree.find('.progress-segment')).to.have.length(5);
  });

  it('should pass aXe check', () => {
    return axeCheck(<ProgressBar percent={35}/>);
  });
});
