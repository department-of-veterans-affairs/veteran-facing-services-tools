---
title: Feature toggles
tags: vagovprod, vagovstaging, vagovdev
---

# Feature toggles

Feature toggles can be used in both vets-api and vets-website to manage unreleased features in a continuous integration environment. Feature toggles enable VFS teams to test out new functionality (applications, features, VA.gov content pages, Metalsmith) in the VSP development, staging, or production environments for a set of users. Teams can enable or disable a feature for all users, a percentage of all users, a percentage of all logged-in users, a list of users, or users defined in a method.

Feature toggles:
- Allow for production toggle switching without redeploying vets-website
- Provide a user interface for managing feature toggle behavior
- Provide code helpers for handling common user experience scenarios
- Are powered by an open-source gem called [Flipper gem](https://github.com/jnunemaker/flipper)

See the following sections for information about creating feature toggles:
- [Writing good feature toggles](#writing-good-feature-toggles)
- Adding a new feature toggle
   - [Frontend](#add-feature)
   - [Backend](#backend)
- [Enabling and disabling features](#flipper-ui)

## <a id="writing-good-feature-toggles">Writing good feature toggles</a>

Keep the following items in mind as you add feature toggles:
- Remember that each environment has its own set of feature toggle values.
- Test your feature toggle in staging before using it in production.
- Remove feature toggles as soon as they are not needed.
- Make toggles that are [easy to delete](https://programmingisterrible.com/post/139222674273/write-code-that-is-easy-to-delete-not-easy-to) by gating a behavior in as few places as possible. It's often better to have blocks of repeating code that can be quickly deleted later than it is to gate several small pieces of code.

After a page is rendered, the feature toggle client retrieves the latest toggle values from the feature toggle service and the page is updated using the latest feature toggle values. The application shows a loading state for the new feature while the toggle values are retrieved from the service.

## <a id="add-feature">Adding a new feature toggle (frontend)</a>

Follow these steps to add and use a new feature toggle in vets-website:

1. Determine your feature toggle name.

   **Note:** There are no naming conventions yet. Current examples put the application name first, such as `facilityLocatorShowCommunityCares` and `profileShowDirectDeposit`.

2. Add the feature name to vets-api (in snake case) by updating [config/features.yml](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/features.yml):

  ```yml
 features:
   app_name_then_your_feature_name:
     actor_type: user
     description: >
       This describes what the feature does and
       which team is responsible for the toggle.
  ```
3. Determine how you want the feature toggle to be "sticky".
  For the behavior to be consistent across all devices for a logged in user choose "user" as the  actor_type.
  For the behavior to be consistent for a user for the duration of a cookie within a single browser, regardless of their logged in status choose "cookie_id" as the actor_type.

4. Run vets-api locally. This can be done on master after your pull request (PR) is merged or off of your feature branch.

5. Navigate to [http://localhost:3000/flipper/features](http://localhost:3000/flipper/features) and verify that you see your new feature name. If not, restart your rails server.

6. Add the feature toggle name to vets-website by updating [featureFlagNames.js](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/utilities/feature-toggles/featureFlagNames.js).

    ```js
    const FEATURE_FLAG_NAMES = Object.freeze({
     showYourFeatureName: 'app_name_then_your_feature_name',
    })
    ```

    **Note:** The key should be camelCase for use in JavaScript, but the value should exactly match the toggle name in `features.yml`.

7. Submit a PR for each feature. Crosslinking the PRs in a comment will make it easier for the reviewers to check.

8. Use the selector helper to build a [selector](https://daveceddia.com/redux-selectors/) for your feature toggle. See an example [here](https://github.com/department-of-veterans-affairs/vets-website/blob/f6178ac59b1d691e0f31fb36903b8ba54091b517/src/applications/gi/containers/ProfilePage.jsx#L118).

   **Note:** In the following example, the `toggleValues` object is a flat list of `toggleName` and boolean key value pairs. Also, note that `toggleValues` is imported from `platform/site-wide/feature-toggles/selectors` and `FEATURE_FLAG_NAMES` is imported from `platform/utilities/feature-toggles/featureFlagNames`.

```js
// import the toggleValues helper
import { toggleValues } from 'platform/site-wide/feature-toggles/selectors';

// use the toggleValues helper to select the toggle values list
export const appNameThenYourFeatureName = state =>
  toggleValues(state).appNameThenYourFeatureName;
```

9. Use the feature toggle value to gate your new behavior. For example, you can use the selector above in `mapStateToProps` to pass the toggle as a prop into your component.

   **Note:** Currently the feature toggle values are only available on the global redux state.

```js
function mapStateToProps(state) {
  return {
    showYourFeatureName:
      appNameThenYourFeatureName(state),
  };
}

...
// inside your connected component

render() {
   const { showYourFeatureName } = this.props;

   return (
     { showYourFeatureName && <NewFeature /> }
   );
}
```

10. Use the [Flipper UI](#flipper-ui) to test out the toggle locally. Refresh the page to update the feature toggle state. This value can take up to a minute to update in staging and production.

## <a id="backend">Adding a new feature toggle (backend)</a>

Follow these steps to add and use a new feature toggle in vets-api:

1. Determine your feature toggle name.

   **Note:** There are no naming conventions yet. Current examples put the application name first, such as `facilityLocatorShowCommunityCares` and `profileShowDirectDeposit`.

2. Add the feature name to vets-api (in snake case) by updating [config/features.yml](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/features.yml):

  ```yml
  features:
     app_name_then_your_feature_name:
     actor_type: user
     description: >
       This describes what the feature does and
       which team is responsible for the toggle.
  ```
3. Determine how you want the feature toggle to be "sticky".
  For the behavior to be consistent across all devices for a logged in user choose "user" as the  actor_type.
  For the behavior to be consistent for a user for the duration of a cookie within a single browser, regardless of their logged in status choose "cookie_id" as the actor_type.

4. Run vets-api locally. This can be done on master after your PR is merged or off of your feature branch.

5. Navigate to [http://localhost:3000/flipper/features](http://localhost:3000/flipper/features) and verify that you see your new feature name. If not, restart your rails server.

### Backend example

```rb
def base_method_name(params)
  if Flipper.enabled?(:feature_flag, @current_user)
    base_method_name_feature_enabled(params)
  else
    base_method_name_feature_disabled(params)
  end
end
def base_method_name_feature_enabled(params)
  # How it behaves with the feature toggle enabled
end
def base_method_name_feature_disabled(params)
  # How it behaves without the feature toggle enabled
end

### spec
RSpec.describe Object do
  context "Feature feature_flag=true" do
    before do
      Flipper.enable(:feature_flag)
    end
    it "behaves this way with the feature enabled" do
    end
  end
  context "Feature feature_flag=false" do
    before do
      Flipper.disable(:feature_flag)
    end
    it "behaves this way with the feature disabled" do
    end
  end
end
```

## <a id="flipper-ui">Enabling and disabling features</a>

You can enable or disable features in the Flipper UI:

1. Navigate to the Flipper UI at the following URLs:

|Environment|URL|
|---|---|
|Dev|http://localhost:3000/flipper/features|
|Staging|https://staging-api.va.gov/flipper/features|
|Production|https://api.va.gov/flipper/features|

2. To access the Flipper UI, you must sign in using an [identity-verified id.me user](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/va.gov-login-process.md) that is listed in [settings.yml](https://github.com/department-of-veterans-affairs/vets-api/blob/master/config/settings.yml):

```
flipper:
  admin_user_emails:
    - email@email.us
    - email1@email.us
```

   <b>Notes:</b>
   - If you are not on the list, you can add yourself or your teammates to the file.
   - If you're not sure if your account is identity-verified, you can check by going to [this page](https://www.va.gov/profile/). If you need to verify your account you'll see a "Verify with ID.me" button.

3. Once you have logged into the Flipper UI, you can perform the following actions:
   - Select "Enable for everyone" or "Disable for everyone" to enable or disable the feature for all users.
   - For a gradual rollout or an a/b test you can use "Percentage of Logged in Users." "Percentage of Logged in Users" will enable the feature for the same users each time they return to the site as long as you don't change the percentage.
   - Use "Percentage of Time" to enable a feature for all users for a percentage of time.
   - Register a "Group" of users to enable a feature for.
   - You can also roll out a feature for a select few users by adding their email address to the “Users” section. For performance reasons, the list of users is intended to be small — do not use this option for hundreds of users.

   The values of each toggle are cached in memory for one minute, so it may take that long to see the effect of enabling or disabling the toggle.

   ![Screen Shot](https://user-images.githubusercontent.com/19188/74881655-b4d11a80-533b-11ea-8e97-fdea24c10830.png)

*The following sections contain information that will be phased out.*

## Testing new applications and updates to existing applications
*Use the method described above to [add](#add-feature) and [enable/disable](#flipper-ui) feature toggles. The method described in this section will be phased out.*

In the [staging environment](https://staging.va.gov), you can test unreleased features or applications using [!isProduction()](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/utilities/environment/index.js).

In the [production environment](https://www.va.gov), you can test unreleased features and applications by checking [localstorage](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/utilities/storage/localStorage.js) for a developer-defined name/value. You can do this by:
- Adding the feature name/value to local storage with a console command in the browser
- Using application specific code that automatically checks when a certain query parameter is present

<b>Note:</b> Unreleased applications can be made available on production behind a password by setting `protected: yes` in [react_routes.yml](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/react_routes.yml). External teams should work with their DSVA contact to request support for enabling this.

## Testing content pages
*Use the method described above to [add](#add-feature) and [enable/disable](#flipper-ui) feature toggles. The method described in this section will be phased out.*

### App-landing pages generated by registry.json
Applications can control the HTML landing page associated with the application via a `template` property in the application's entry in the `src/applications/registry.json`. Properties defined inside the `template` property will pass through the Metalsmith templating process the same way as a vagov-content `.md` file. This means that via the `template` property, your appliations entry in `registry.json` can implement a feature toggle the same way as a `.md` file to prevent its HTML page from rendering in production environments. For example:

```json
{
   "appName": "Fantastic application",
   "entryName": "fantastic-application",
   "rootUrl": "/path/to/fantastic-application",
   "template": {
       "layout": "page-react.html",
       "title": "Fantastic application",
       "vagovprod": false
   }
}
```

The `vagovprod` property explicitly set to `false` will exclude this application from production builds.

### vagov-content .md files

Unreleased content pages should always be made available on [staging.va.gov](https://staging.va.gov) by adding an exclusion toggle to the front matter of the content page. For example, because this front matter includes `vagovprod: false`, this content page would be excluded from the build for the production environment:

```markdown
---
title: Apply for disability benefits
vagovprod: false
---
<nav aria-label="Breadcrumb" aria-live="polite" class="va-nav-breadcrumbs"
id="va-breadcrumbs">
```

Content pages can be excluded from any or all of these environments:
```markdown
vagovprod: false
vagovstaging: false
vagovdev: false
localhost: false
```

## Testing CMS feature toggles
*Use the method described above to [add](#add-feature) and [enable/disable](#flipper-ui) feature toggles. The method described in this section will be phased out.*

VA.gov creates some pages based on content from the VA's Drupal CMS. The CMS has its own content model, which can sometimes change. When those changes modify the existing structure of the content model, the queries and templates in vets-website that expect a different model may break. And because the CMS and vets-website are separate systems with different deployment processes, we can't push up changes in both systems simultaneously. In order to keep the two systems in sync, we need to be able to turn features on and off in vets-website depending on what environment we're in, and update that feature state whenever a cms deployment happens.

We've created some infrastructure to make this a little easier to do.

### Creating a toggle and turning it on or off

When running a new vets-website build, the script will fetch all CMS feature toggles from Drupal. This allows the toggles to be controlled from within Drupal.

Before writing any code to use a new feature toggle, it must first be created from within Drupal for all three environments. The feature toggles can be found at https://dev.cms.va.gov/admin/config/system/feature_toggle for dev. Staging and production have similar pages.

**Important:** The new feature toggle *must* be in *every* Drupal environment or vets-website builds will fail when we try to use it! This is intentional so we don't have "accidentally" false feature toggles when Drupal doesn't have a toggle that vets-website is trying to use.

### Using toggles in GraphQL queries
Because the toggles are fetched dynamically, they aren't stored in a file that we can `require` from a GraphQL query file. The build script puts the current toggles are put into `global.cmsFeatureFlags` after it either fetches the most recent toggles or uses the cache.

Keep in mind the advice in the [writing good feature toggles](#writing-good-feature-toggles) section. You should write the logic in a way that is easy to remove later. It's often easier to change some logic and then add a conditional that modifies something with the toggle is not enabled. That lets you simply remove the conditional later.

### Using feature toggles in Liquid templates

All liquid templates have access to the current feature toggle state:

```liquid
{% if enabledFeatureFlags.feature1 == true %}
  <div>Fancy new feature</div>
{% endif %}
```

**Note:** From within the JavaScript context, the feature toggles are in `global.cmsFeatureFlags`, but within the Liquid template context, they can be found in `enabledFeatureFlags`.

## Need assistance?

Tag #vfs-platform-support in Slack if you need more information.
