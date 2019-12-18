module.exports = {
  // TODO: Add global import for common keys (ENTER, SPACE, TAB, ARROWS)
  'CONTENT-1: Smoke test. Ensure ALLY.JS returns two objects': client => {
    const body = client.globals.contentOne.body;
    const url = client.globals.contentOne.url;

    client
      .url(url)
      .waitForElementVisible(body)
      .assert.isAllyFocusableObject(body)
      .assert.isAllyTabbableObject(body);
  },

  'CONTENT-1: Assert ALLY.JS array lengths are correct for tabindex="-1"': client => {
    const body = client.globals.contentOne.body;

    client.assert.isAllyDeepEquals(body, false);
  },

  'CONTENT-1: Assert ALLY.JS expects the correct number of focusable elements': client => {
    const body = client.globals.contentOne.body;

    client.assert.isAllyFocusableCount(body, 18);
  },

  'CONTENT-1: Assert ALLY.JS expects the correct number of tabbable elements': client => {
    const body = client.globals.contentOne.body;

    client.assert.isAllyTabbableCount(body, 17);
  },

  'CONTENT-1: Assert the submit <button> is not disabled': client => {
    const button = client.globals.contentOne.button;

    client
      .waitForElementVisible(button)
      .assert.isAllyDisabledElement(button, false);
  },

  'CONTENT-1: Test the skip link functionality': client => {
    const { ENTER, TAB } = client.Keys;
    const mainContainer = client.globals.contentOne.main;
    const skipNav = client.globals.contentOne.skipNav;

    // Advance to skip nav link and start keyboard testing mocks
    client.keys(TAB);

    client.assert
      .isActiveElement(skipNav)
      .keys(ENTER)
      .assert.isActiveElement(mainContainer);

    // Advance to form
    client.keys(TAB);
  },

  'CONTENT-1: Evaluate the name field for text entry': client => {
    const { TAB } = client.Keys;
    const name = client.globals.contentOne.textInputs.name.selector;
    const textValue = client.globals.contentOne.textInputs.name.value;

    client.evaluateTextInput(name, textValue);

    // Advance to age input
    client.keys(TAB);
  },

  'CONTENT-1: Evaluate the age field for text entry': client => {
    const { TAB } = client.Keys;
    const age = client.globals.contentOne.textInputs.age.selector;
    const textValue = client.globals.contentOne.textInputs.age.value;

    client.evaluateTextInput(age, textValue);

    // Advance to email input
    client.keys(TAB);
  },

  'CONTENT-1: Evaluate the email field for text entry': client => {
    const { TAB } = client.Keys;
    const email = client.globals.contentOne.textInputs.email.selector;
    const textValue = client.globals.contentOne.textInputs.email.value;

    client.evaluateTextInput(email, textValue);

    // Advance to phone number input
    client.keys(TAB);
  },

  'CONTENT-1: Evaluate the telephone field for text entry': client => {
    const { TAB } = client.Keys;
    const telephone = client.globals.contentOne.textInputs.telephone.selector;
    const textValue = client.globals.contentOne.textInputs.telephone.value;

    client.evaluateTextInput(telephone, textValue);

    // Advance to optional Twitter input
    client.keys(TAB);
  },

  'CONTENT-1: Evaluate the optional Twitter field for text entry': client => {
    const { TAB } = client.Keys;
    const twitter = client.globals.contentOne.textInputs.twitter.selector;
    const textValue = client.globals.contentOne.textInputs.twitter.value;

    client.evaluateTextInput(twitter, textValue);

    // Advance to optional Keybase input
    client.keys(TAB);
  },

  'CONTENT-1: Evaluate the optional Keybase field for blank entry': client => {
    const { TAB } = client.Keys;
    const keybase = client.globals.contentOne.textInputs.keybase.selector;
    const textValue = client.globals.contentOne.textInputs.keybase.value;

    client.evaluateTextInput(keybase, textValue);

    // Advance to textarea
    client.keys(TAB);
  },

  'CONTENT-1: Evalaute the social media textarea': client => {
    const { TAB } = client.Keys;
    const textarea = client.globals.contentOne.textAreas.socialMedia.selector;
    const textValue = client.globals.contentOne.textAreas.socialMedia.value;

    client.evaluateTextInput(textarea, textValue);

    // Advance to checkbox group
    client.keys(TAB);
  },

  'CONTENT-1: Evaluate checkbox SPACEBAR interaction': client => {
    const { TAB } = client.Keys;
    const checkboxes = client.globals.contentOne.checkboxes;

    client.evaluateCheckboxes(checkboxes);

    // Advance to radio button group
    client.keys(TAB);
  },

  'CONTENT-1: Evaluate radio buttons for ARROW_DOWN and ARROW_RIGHT': client => {
    const { ARROW_DOWN, ARROW_RIGHT } = client.Keys;
    const radioButtons = client.globals.contentOne.radioButtons;

    client.evaluateRadioButtons(radioButtons, ARROW_DOWN);
    client.evaluateRadioButtons(radioButtons, ARROW_RIGHT);
  },

  'CONTENT-1: Evaluate radio buttons for ARROW_UP and ARROW_LEFT': client => {
    const { ARROW_UP, ARROW_LEFT, TAB } = client.Keys;
    const radioButtons = client.globals.contentOne.radioButtons;

    client.evaluateRadioButtonsReverse(radioButtons, ARROW_UP);
    client.evaluateRadioButtonsReverse(radioButtons, ARROW_LEFT);

    // Advance to select menu
    client.keys(TAB);
  },

  'CONTENT-1: Evaluate the select menu': client => {
    const { TAB } = client.Keys;
    const select = client.globals.contentOne.select;
    const optionText = 'What is your favorite sports team?';
    const selectedOption = 'value3';

    client.evaluateSelectMenu(select, optionText, selectedOption);

    // Advance to submit button
    client.keys(TAB);
  },

  // TODO: Add a button submit helper function
  'CONTENT-1: Assert button can submit form by pressing SPACEBAR': client => {
    const { SPACE } = client.Keys;
    const button = client.globals.contentOne.button;

    client.assert
      .elementPresent(button)
      .assert.isActiveElement(button)
      .keys(SPACE)
      .assert.urlContains(
        'http://localhost:8080/content/content1.html?name=Josephine+Rogers&age=29&email=josephine%40test.com&telephone=5551234567&twitter=itsjrogers&keybase=&checkbox-contacts=checkbox-email&checkbox-contacts=checkbox-telephone&checkbox-contacts=checkbox-twitter&checkbox-contacts=checkbox-keybase&radio-subscribe=radio-yes#',
      );
  },

  after: client => {
    client.end();
  },
};
