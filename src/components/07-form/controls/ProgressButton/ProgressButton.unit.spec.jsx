import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import chaiAsPromised from 'chai-as-promised';
import chai, { expect } from 'chai';

import ProgressButton from './ProgressButton.jsx';

chai.use(chaiAsPromised);

//    const tree = shallow(<Modal
// id="modal" title="Modal title" visible onClose={() => {//}}>Modal contents</Modal>);

describe('<ProgressButton>', () => {
  it('should render with button text', () => {
    const tree = shallow(<ProgressButton
      buttonText={"Button text"} buttonClass={"usa-button-primary"}
      disabled={false}/>);
    expect(tree.text()).to.equal("Button text");
    expect(tree).to.have.length.of(1);
  });

  it('calls handle() on click', () => {
    let progressButton;

    const updatePromise = new Promise((resolve, _reject) => {
      progressButton = ReactTestUtils.renderIntoDocument(
        <ProgressButton
          buttonText={"Button text"} 
          buttonClass={"usa-button-primary"}
          disabled={false}
          onButtonClick={() => { resolve(true); }}/>
      );
    });

    const button = ReactTestUtils.findRenderedDOMComponentWithTag(progressButton, 'button');
    ReactTestUtils.Simulate.click(button);

    return expect(updatePromise).to.eventually.eql(true);
  });
});
