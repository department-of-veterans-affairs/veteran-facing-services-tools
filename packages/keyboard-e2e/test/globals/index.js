const contentOne = {
  body: '[data-nwId="content-1-body"]',
  button: 'button[data-nwId="content-1-form-1-button-1"]',
  form: '[data-nwId="content-1-form-1"]',
  main: '#main-container',
  select: '[data-nwId="content-1-form-1-select-1"]',
  skipNav: '#skip-nav',
  url: 'http://localhost:8080/content/content1.html',
  checkboxes: [
    '[data-nwId="content-1-form-1-checkbox-1"]',
    '[data-nwId="content-1-form-1-checkbox-2"]',
    '[data-nwId="content-1-form-1-checkbox-3"]',
    '[data-nwId="content-1-form-1-checkbox-4"]',
  ],
  radioButtons: [
    '[data-nwId="content-1-form-1-radio-1"]',
    '[data-nwId="content-1-form-1-radio-2"]',
    '[data-nwId="content-1-form-1-radio-3"]',
  ],
  textInputs: {
    name: {
      selector: '[data-nwId="content-1-form-1-input-1"]',
      value: 'Josephine Rogers',
    },
    age: {
      selector: '[data-nwId="content-1-form-1-input-2"]',
      value: '29',
    },
    email: {
      selector: '[data-nwId="content-1-form-1-input-3"]',
      value: 'josephine@test.com',
    },
    telephone: {
      selector: '[data-nwId="content-1-form-1-input-4"]',
      value: '5551234567',
    },
    twitter: {
      selector: '[data-nwId="content-1-form-1-input-5"]',
      value: 'itsjrogers',
    },
    keybase: {
      selector: '[data-nwId="content-1-form-1-input-6"]',
      value: '',
    },
  },
  textAreas: {
    socialMedia: {
      selector: '[data-nwId="content-1-form-textarea-1"]',
      value: 'Instagram is my preferred social media',
    },
  },
};

module.exports = {
  contentOne,
};
