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
  it('modal should have response burden', () => {
    const tree = shallow(<OMBInfo resBurden="10" />);
    tree.find('button').simulate('click');
    expect(tree.text()).to.contain('Privacy Act Statement');
    expect(tree.text()).to.contain('Respondent Burden');
    tree.unmount();
  });
  it('modal should not have response burden', () => {
    const tree = shallow(<OMBInfo />);
    tree.find('button').simulate('click');
    expect(tree.text()).to.contain('Privacy Act Statement');
    expect(tree.text()).to.not.contain('Respondent Burden');
    tree.unmount();
  });
});
