import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { axeCheck } from '../../helpers/test-helpers';

import ExpandingGroup from './ExpandingGroup.jsx';

describe('<ExpandingGroup>', () => {
  it('renders only first child when open is false', () => {
    const wrapper = shallow(<ExpandingGroup open={false}><first/><second/></ExpandingGroup>);

    const first = wrapper.find('first');
    expect(first).to.have.lengthOf(1);

    const expandingContainer = wrapper.find('.expanded-content');
    expect(expandingContainer).to.have.lengthOf(0);
    const collapsedContainer = wrapper.find('.collapsed-content');
    expect(collapsedContainer).to.have.lengthOf(1);
    expect(collapsedContainer.prop('hidden')).to.equal(true);
    expect(collapsedContainer.prop('aria-hidden')).to.equal('true');

    // check that collapsed content is still rendered in case calling components need it
    const second = collapsedContainer.find('second');
    expect(second).to.have.lengthOf(1);
  });

  it('renders both children when open is true', () => {
    const wrapper = shallow(<ExpandingGroup open><first/><second/></ExpandingGroup>);

    const first = wrapper.find('first');
    expect(first).to.have.lengthOf(1);

    const expandingContainer = wrapper.find('.expanded-content');
    expect(expandingContainer).to.have.lengthOf(1);
    const collapsedContainer = wrapper.find('.collapsed-content');
    expect(collapsedContainer).to.have.lengthOf(0);

    const second = expandingContainer.find('second');
    expect(second).to.have.lengthOf(1);
  });

  it('passes aXe check when only first child is rendered', () => {
    const check = axeCheck(<ExpandingGroup open={false}><first/><second/></ExpandingGroup>);
    return check;
  });

  it('passes aXe check when both children are rendered', () => {
    const check = axeCheck(<ExpandingGroup open><first/><second/></ExpandingGroup>);
    return check;
  });
});
