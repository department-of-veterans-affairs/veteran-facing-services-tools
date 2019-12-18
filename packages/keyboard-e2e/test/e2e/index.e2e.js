module.exports = {
  'INDEX: Assert 1 TAB to load page Content 1': client => {
    const { ENTER, TAB } = client.Keys;

    client
      .url('http://localhost:8080')
      .waitForElementVisible('[data-nwId="body-index"]')
      .assert.visible('a.native-focusable')
      .assert.isActiveElement('body')
      .keys(TAB)
      .assert.isActiveElement('a[data-nwId="link-content-1"]')
      .keys(ENTER)
      .waitForElementVisible('[data-nwId="content-1-body"]')
      .assert.urlContains('http://localhost:8080/content/content1.html');

    client.end();
  },
};
