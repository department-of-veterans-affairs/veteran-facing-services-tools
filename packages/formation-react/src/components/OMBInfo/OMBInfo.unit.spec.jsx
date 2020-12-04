import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { axeCheck } from '../../helpers/test-helpers';

import OMBInfo from './OMBInfo.jsx';

describe('<OMBInfo/>', () => {
  it('should render all data', () => {
    const tree = shallow(
      <OMBInfo
        resBurden={15}
        ombNumber="OMB Number"
        expDate="Expiration date"
      />,
    );
    expect(tree.text()).to.contain('Expiration date');
    expect(tree.text()).to.contain('OMB Number');
    expect(tree.text()).to.contain('Respondent burden');
    tree.unmount();
  });
  it('should render just privacy', () => {
    const tree = shallow(<OMBInfo />);
    expect(tree.text()).to.contain('Privacy Act Statement');
    tree.unmount();
  });
  it('should pass aXe check', () =>
    axeCheck(
      <OMBInfo
        resBurden={15}
        ombNumber="OMB Number"
        expDate="Expiration date"
      />,
    ));
  it('should render resBurden', () => {
    const tree = shallow(
      <OMBInfo
        resBurden={15}
        ombNumber="OMB Number"
        expDate="Expiration date"
      />,
    );
    expect(tree.text()).to.contain('Respondent burden');
    tree.unmount();
  });
  it('should not render resBurden', () => {
    const tree = shallow(
      <OMBInfo ombNumber="OMB Number" expDate="Expiration date" />,
    );
    expect(tree.text()).to.not.contain('Respondent burden');
    tree.unmount();
  });
  it('should render omb number', () => {
    const tree = shallow(<OMBInfo ombNumber="OMB Number" />);
    expect(tree.text()).to.contain('OMB Number');
    tree.unmount();
  });
  it('should not render omb number', () => {
    const tree = shallow(<OMBInfo />);
    expect(tree.text()).to.not.contain('OMB Number');
    tree.unmount();
  });
  it('should render expiration date', () => {
    const tree = shallow(<OMBInfo expDate="Expiration date" />);
    expect(tree.text()).to.contain('Expiration date');
    tree.unmount();
  });
  it('should not render expiration date', () => {
    const tree = shallow(<OMBInfo />);
    expect(tree.text()).to.not.contain('Expiration date');
    tree.unmount();
  });
});
