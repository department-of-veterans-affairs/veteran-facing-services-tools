---
title: Writing a unit test
tags: Mocha, Chai, Enzyme, schemaform-utils
---

# Writing a unit test

All new code that is added to `vets-website` should be unit tested and unit tests should cover at least 75% of code paths. Write unit tests as you build to make sure your form (or other component) is behaving as you expect and to help guard against future bugs.

For example, you might create a unit test file for each page in a form and then test the following scenarios:

- The correct number of inputs show up when you render the page.
- The correct number of fields display validation errors if you submit without entering any information.
- Any conditional logic on the page displays under the correct conditions.

## Unit test overview

- The `vets-website` repo uses:
  - [Mocha](https://mochajs.org/) for running unit tests
  - [Chai](http://chaijs.com/) for test assertions
  - [Enzyme](https://airbnb.io/enzyme/) for mounting and inspecting React components
  - [Sinon](https://sinonjs.org/) for stubs and spies
- Unit tests are **collocated with the application folder** in a test directory that matches the application directory structure:
```
- 📂 src
  - 📂 my-application
    - 📂 components
      - MyComponent.jsx
    - 📂 tests
      - 📂 components
        - MyComponent.unit.spec.jsx
```

Mocha runs any *file_name*.unit.spec.js file located in the `/src` folder. This file is usually located in a test directory close to the code being tested.

[Run the test](/getting-started/common-tasks/test) locally through npm script commands, during the Jenkins build (Unit), and after merging to master.
   
## Unit test conventions

Use the following conventions when writing a unit test.

```js
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MyComponent from '../../components/MyComponent';

describe('my-application', () => {
  describe('MyComponent', () => {
    it('renders privacy act disclosure when state.show is true', () => {
        const wrapper = shallow(<MyComponent />);
        ...
        expect(someCondition).to.be.true;

        wrapper.unmount();
    })
  });
});
```

- Use `describe` to organize tests by application and feature. Two levels is adequate depending on the size of the application being tested.
- Use `it` to describe the unit test:
  - Use active voice.
  - Describe the behavior in terms specific to the unit.
  - Do not abstract the test description with business logic.
  - **Recommended**:
    - `it('truncates the address property when it is longer than 15 characters')`
    - `it('renders an error when props.errors contains at least one item')`
  - **Not recommended**:
    - `it('shortens the address when the user has a long address')`
    - `it('shows an error when the user is not logged in')`
  - Use Enzyme's [shallow](https://airbnb.io/enzyme/docs/api/shallow.html) instead of [mount](https://airbnb.io/enzyme/docs/api/mount.html) when possible to test components.
  - Always `unmount` components at the end of the test.
  
## Unit tests for forms pages

Use the following guidelines when writing a unit test for forms pages.

```js
import { DefinitionTester } from 'platform/testing/unit/schemaform-utils';

describe('MyForm FormID', () => {

const {
    schema,
    uiSchema,
    arrayPath,
  } = formConfig.chapters.myFormChapter.pages.myFormPage;

  it('renders myFormPage form', () => {
    const form = mount(
      <DefinitionTester
        arrayPath={arrayPath}
        pagePerItemIndex={0}
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={initialData}
        formData={initialData}
        uiSchema={uiSchema}
      />,
    );

    expect(form.find('select').length).to.equal(6); // from/to months, days; country, state
    expect(form.find('input').length).to.equal(4); // facility name, from/to years, city
    form.unmount();
  });
  ```

- Organize forms config tests by page.
- Use `<DefinitionTester />` to render form configs for testing.
- Test at least the following:
  - Number of each type of input is rendered (example above)
  - Any conditional display logic on the page
  - All field level validation errors
- Use the other `schemaform-utils` for filling out form data:

>- `fillData()` - Enzyme helper that fires a change event with a value for an element at the given selector
```
fillData(
  form, // mounted <DefinitionTester />
  'select#root_blah' // selector
  'USA', // value
);
```

>- `fillDate()` - Enzyme helper that fills in a date field with data from the given date string
```
fillDate(
  form, // mounted <DefinitionTester />
  'select#root_blah' // selector
  '1950-1-3', // value
);
```

>- `selectCheckbox()` - Enzyme helper that fires a change event with a value for a checkbox at the given name

## Example unit tests

VSP provides helper utilities to make writing tests easier. The following example unit tests illustrate some of these helpers. You can find these unit tests in the `vets-website` repo in the [veteranInformation.unit.spec.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/vic-v2/tests/config/veteranInformation.unit.spec.jsx) file.

```js
import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData, selectRadio, fillDate } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../config/form.js';

describe('VIC veteran information', () => {
  const { schema, uiSchema } = formConfig.chapters.veteranInformation.pages.veteranInformation;
  it('should render', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data=\{{}}
        uiSchema={uiSchema}
        />
    );

    expect(form.find('input').length).to.equal(7);
    expect(form.find('select').length).to.equal(4);
  });

  ...
});
```

Helpers are imported from [`schemaform-utils.jsx`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/unit/schemaform-utils.jsx). The `DefinitionTester` is a component you can use to simulate a page being rendered without having to set up a whole form application with all the dependencies.

This example uses [Enzyme](http://airbnb.io/enzyme/) and mounts a `DefinitionTester` component that is passed in the schema information from the `veteranInformation` page as props. The test checks to make sure there are 7 `input` and 4 `select` entries on the page. When there are errors with definitions on the form pages, you will often see inputs not being rendered, so this helps check for that scenario.

The next test in the file checks to see that the right fields are marked as required:

```js
  it('should not submit without required info', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        onSubmit={onSubmit}
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data=\{{}}
        uiSchema={uiSchema}
        />
    );

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(6);
    expect(onSubmit.called).to.be.false;
  });
```

This test simulates a form submission and then counts the number of error elements on the page, which is expected to be 6. The test checks that the existing validation rules are still generally in place and that additional rules haven't been added.

Finally, this example test fills in all the data and submits the form:

```js
  it('should submit with all info filled in', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        onSubmit={onSubmit}
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}
        />
    );

    fillData(form, 'input#root_veteranFullName_first', 'test');
    fillData(form, 'input#root_veteranFullName_last', 'test2');
    fillData(form, 'input#root_veteranSocialSecurityNumber', '233224343');
    selectRadio(form, 'root_gender', 'F');
    fillDate(form, 'root_veteranDateOfBirth', '1920-01-04');
    fillData(form, 'select#root_serviceBranch', 'F');
    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
```

Helper functions make the correct Enzyme calls to fill in data, so there isn't a lot of repeated code. The helpers are documented in the `schemaform-utils.jsx` file. The helpers fill in data and then check that the right number of inputs appear on the page after that change. Some of the tests also directly test logic in `depends` functions on the page configuration. 

## Other utilities

These utilities can be found in `platform/testing/unit/helpers.js`:

- `mockFetch()` -  A function to mock the global fetch function and return the value provided in returnVal
  - `resetFetch()` - Resets the mocked fetch set with `mockFetch()`
  - `mockApiRequest()` - Decorated `mockFetch()` that adds typical API headers to `returnVal`
  - `mockMultipleApiRequests()` - Decorated `mockFetch()` that mocks a fetch call for each response object in an array
```
mockFetch(
  new Error('fake error'), // returnVal
  false, // shouldResolve: false returns rejected promise. default is true
);
```

**Note:** This utility can be found in `platform/utilities/storage/localstorage.js`.

- `getLocalStorage()` - convenience accessor for local storage and implements a fallback. Useful for stubbing localstorage.


## Legacy tools

While ReactTestUtils and SkinDeep are used in many of our tests, use Enzyme for any updated or new tests.

## Libraries

Unit tests use the following libraries:

- [mocha.js](https://mochajs.org/): Test framework.
- [chai.js](https://www.chaijs.com/): BDD / TDD assertion library.
- [chai-as-promised](https://github.com/domenic/chai-as-promised): Extends Chai with assertions about promises.
- [sinon.js](https://sinonjs.org/): Standalone test spies, stubs and mocks.
- [enzyme](https://airbnb.io/enzyme/): Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.
- [enzyme-adapter-react-16](https://www.npmjs.com/package/enzyme-adapter-react-16): Enzyme React 16 integration.
- [react-dom](https://www.npmjs.com/package/react-dom): React DOM Library needed for testing React Components.
- [react-dom/test-utils](https://reactjs.org/docs/test-utils.html): Test utilities for React DOM.
- [react-test-renderer](https://www.npmjs.com/package/react-test-renderer): This package provides an experimental React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.
- [jsdom](https://airbnb.io/enzyme/docs/guides/jsdom.html): A JavaScript implementation of the WHATWG DOM and HTML standards, for use with node.js.
- [mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter): Produces JUnit-style XML test results. This is used specifically for Jenkins so it can output and track test results in its system.
- [choma](https://github.com/lennym/choma): Random execution order for mocha suites.
