import React from 'react';
import {
  shallow,
  mount
} from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import chaiAsPromised from 'chai-as-promised';
import chai, { expect } from 'chai';
import sinon from 'sinon';

import ErrorableTextArea from './ErrorableTextArea';
import { makeField } from '../../../../helpers/fields';
import { axeCheck } from '../../../../../lib/testing/helpers';

chai.use(chaiAsPromised);

describe('<ErrorableTextArea>', () => {
  it('ensure value changes propagate', () => {
    let errorableInput;

    const updatePromise = new Promise((resolve, _reject) => {
      errorableInput = ReactTestUtils.renderIntoDocument(
        <ErrorableTextArea field={makeField(1)} label="test" onValueChange={(update) => { resolve(update); }}/>
      );
    });

    const textarea = ReactTestUtils.findRenderedDOMComponentWithTag(errorableInput, 'textarea');
    textarea.value = 'newValue';
    ReactTestUtils.Simulate.change(textarea);

    return expect(updatePromise).to.eventually.eql(makeField('newValue', false));
  });

  it('ensure blur makes field dirty', () => {
    let errorableInput;

    const updatePromise = new Promise((resolve, _reject) => {
      errorableInput = ReactTestUtils.renderIntoDocument(
        <ErrorableTextArea field={makeField(1)} label="test" onValueChange={(update) => { resolve(update); }}/>
      );
    });

    const textarea = ReactTestUtils.findRenderedDOMComponentWithTag(errorableInput, 'textarea');
    ReactTestUtils.Simulate.blur(textarea);

    return expect(updatePromise).to.eventually.eql(makeField(1, true));
  });

  it('ensure value doesn\'t propagate when using more than charMax', () => {
    const valueChangedSpy = sinon.spy();

    const errorableInput = ReactTestUtils.renderIntoDocument(
      <ErrorableTextArea field={makeField(1)} charMax={1} label="test" onValueChange={valueChangedSpy}/>
    );

    errorableInput.handleChange({
      target: {
        value: 'Testing'
      }
    });

    expect(valueChangedSpy.called).to.equal(false);
  });

  it('no error styles when errorMessage undefined', () => {
    const tree = shallow(
      <ErrorableTextArea field={makeField(1)} label="my label" onValueChange={(_update) => {}}/>);

    // No error classes.
    expect(tree.find('.usa-input-error')).to.have.lengthOf(0);
    expect(tree.find('.usa-input-error-label')).to.have.lengthOf(0);
    expect(tree.find('.usa-input-error-message')).to.have.lengthOf(0);

    // Ensure no unnecessary class names on label w/o error..
    const labels = tree.find('label');
    expect(labels).to.have.lengthOf(1);
    expect(labels.prop('className')).to.be.undefined;

    // No error means no aria-describedby to not confuse screen readers.
    const textareas = tree.find('textarea');
    expect(textareas).to.have.lengthOf(1);
    expect(textareas.prop('aria-describedby')).to.be.undefined;
  });

  it('has error styles when errorMessage is set', () => {
    const tree = shallow(
      <ErrorableTextArea field={makeField(1)} label="my label" errorMessage="error message" onValueChange={(_update) => {}}/>);

    // Ensure all error classes set.
    expect(tree.find('.usa-input-error')).to.have.lengthOf(1);

    const labels = tree.find('.usa-input-error-label');
    expect(labels).to.have.lengthOf(1);
    expect(labels.text()).to.equal('my label');

    const errorMessages = tree.find('.usa-input-error-message');
    expect(errorMessages).to.have.lengthOf(1);
    expect(errorMessages.text()).to.equal('Error error message');

    const textareas = tree.find('textarea');
    expect(textareas).to.have.lengthOf(1);
    expect(textareas.prop('aria-describedby')).to.not.be.undefined;
    expect(textareas.prop('aria-describedby')).to.equal(errorMessages.prop('id'));
  });

  it('required=false does not have required asterisk', () => {
    const tree = shallow(
      <ErrorableTextArea field={makeField(1)} label="my label" onValueChange={(_update) => {}}/>);

    expect(tree.find('label').text()).to.equal('my label');
  });

  it('required=true has required asterisk', () => {
    const tree = shallow(
      <ErrorableTextArea field={makeField(1)} label="my label" required onValueChange={(_update) => {}}/>);

    const label = tree.find('label');
    expect(label.text()).to.equal('my label*');
  });

  it('label attribute propagates', () => {
    const tree = shallow(
      <ErrorableTextArea field={makeField(1)} label="my label" onValueChange={(_update) => {}}/>);

    // Ensure label text is correct.
    const labels = tree.find('label');
    expect(labels).to.have.lengthOf(1);
    expect(labels.text()).to.equal('my label');

    // Ensure label htmlFor is attached to input id.
    const textareas = tree.find('textarea');
    expect(textareas).to.have.lengthOf(1);
    expect(textareas.prop('id')).to.not.be.undefined;
    expect(textareas.prop('id')).to.equal(labels.prop('htmlFor'));
  });

  it('passes aXe check when no error present', () => {
    const check = axeCheck(<ErrorableTextArea
      field={makeField('')}
      label="test"
      placeholder="Placeholder"
      onValueChange={(value) => value}/>);

    return check;
  });

  it('passes aXe check when error present', () => {
    const check = axeCheck(<ErrorableTextArea
      field={makeField('')}
      label="test"
      placeholder="Placeholder"
      errorMessage="error"
      onValueChange={(value) => value}/>);

    return check;
  });
});
