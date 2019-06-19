/* eslint-disable camelcase */
/* eslint-disable no-console */
import fetch from 'node-fetch';

const version = process.env.VERSION;

const createTag = async () => {
  try {
    const payload = {
      tag_name: `${process.env.PACKAGE}-v${version}`,
      name: `${process.env.PACKAGE}-v${version}`,
      body: `${process.env.PACKAGE} release version v${version}`,
      draft: false,
      prerelease: false,
    };

    const response = await fetch(
      `https://api.github.com/repos/department-of-veterans-affairs/veteran-facing-services-tools/releases?access_token=${
        process.env.GITHUB_API_KEY
      }`,
      {
        method: 'post',
        body: JSON.stringify(payload),
      },
    );

    const responseJson = await response.json();
    console.log(
      `v${version}-${process.env.PACKAGE} release has been created.\n${
        responseJson.html_url
      }`,
    );
  } catch (err) {
    console.log(err.message);
  }
};

createTag();
