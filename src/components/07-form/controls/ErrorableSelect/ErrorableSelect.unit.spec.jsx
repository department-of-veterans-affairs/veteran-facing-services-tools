import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import chaiAsPromised from 'chai-as-promised';
import chai, { expect } from 'chai';

import ErrorableSelect from './ErrorableSelect.jsx';
import { makeField } from '../../../../model/fields.js';

chai.use(chaiAsPromised);

describe('<ErrorableSelect>', () => {
  const testValue = makeField('');
  const options = [{ value: 1, label: 'first' }, { value: 2, label: 'second' }];

  it('ensure value changes propagate', () => {
    let errorableSelect;

    const updatePromise = new Promise((resolve, _reject) => {
      errorableSelect = ReactTestUtils.renderIntoDocument(
        <ErrorableSelect label="test" options={options} value={testValue} onValueChange={(update) => { resolve(update); }}/>
      );
    });

    const select = ReactTestUtils.findRenderedDOMComponentWithTag(errorableSelect, 'select');
    select.value = '';
    ReactTestUtils.Simulate.change(select);

    return expect(updatePromise).to.eventually.eql(makeField('', true));
  });

  it('no error styles when errorMessage undefined', () => {
    const tree = shallow(
      <ErrorableSelect label="my label" options={options} value={testValue} onValueChange={(_update) => {}}/>);

    // No error classes.
    expect(tree.find('.usa-input-error')).to.have.lengthOf(0);
    expect(tree.find('.usa-input-error-label')).to.have.lengthOf(0);
    expect(tree.find('.usa-input-error-message')).to.have.lengthOf(0);

    // Ensure no unnecessary class names on label w/o error.
    const labels = tree.find('label');
    expect(labels).to.have.lengthOf(1);
    expect(labels.hasClass('')).to.be.true;

    // No error means no aria-describedby to not confuse screen readers.
    const selects = tree.find('select');
    expect(selects).to.have.lengthOf(1);
    expect(selects.find('aria-describedby')).to.have.lengthOf(0);
  });

  it('has error styles when errorMessage is set', () => {
    const tree = shallow(
      <ErrorableSelect label="my label" options={options} errorMessage="error message" value={testValue} onValueChange={(_update) => {}}/>);

    // Ensure all error classes set.
    expect(tree.find('.usa-input-error')).to.have.lengthOf(1);

    const labels = tree.find('.usa-input-error-label');
    expect(labels).to.have.lengthOf(1);
    expect(labels.text()).to.equal('my label');

    const errorMessages = tree.find('.usa-input-error-message');
    expect(errorMessages).to.have.lengthOf(1);
    expect(errorMessages.text()).to.equal('error message');

    // No error means no aria-describedby to not confuse screen readers.
    const selects = tree.find('select');
    expect(selects).to.have.lengthOf(1);
    expect(selects.prop('aria-describedby')).to.not.be.undefined;
    expect(selects.prop('aria-describedby')).to.equal("errorable-select-3-error-message");
  });

  it('required=false does not have required asterisk', () => {
    const tree = shallow(
      <ErrorableSelect label="my label" options={options} value={testValue} onValueChange={(_update) => {}}/>);
    expect(tree.find('label').text()).to.equal('my label');
  });

  it('required=true has required asterisk', () => {
    const tree = shallow(
      <ErrorableSelect label="my label" options={options} required value={testValue} onValueChange={(_update) => {}}/>);
      expect(tree.find('label').text()).to.equal('my label*');
  });

  it('label attribute propagates', () => {
    const tree = shallow(
      <ErrorableSelect label="my label" options={options} value={testValue} onValueChange={(_update) => {}}/>);

    // Ensure label text is correct.
    const labels = tree.find('label');
    expect(labels).to.have.lengthOf(1);
    expect(labels.text()).to.equal('my label');

    // Ensure label htmlFor is attached to select id.
    const selects = tree.find('select');
    expect(selects).to.have.lengthOf(1);
    expect(selects.find('id')).to.not.be.undefined;
    expect(selects.prop('id')).to.equal("errorable-select-6");
  });
});
