# Routing

## Reverse Proxy Config

The reverse proxy handles incoming URL requests to va.gov and is managed through a [reverse proxy routing config](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/react_routes.yml) file.

## React Router

To use client side routing such as react-router, the `react_routes` section must be configured to ignore the route.
For example, a React app running at `www.va.gov/appPath` would need this added:

```yml
  - path: /appPath
    protected: no
```
By default, one url path maps to one document. This configuration changes the default behavior so that any additional path parts after `/appPath` like `/appPath/IntroductionPage` will return the document at `/appPath`.

## Server-side Redirects

To redirect from one URL to another, use the `redirects` section with a `src`, `dest`, and optional params such as:
```yaml
  # Redirect /caregivers/introduction to /caregivers
  - src: /caregivers/introduction
    dest: /caregivers
    rewrite: permanent
```
```yaml
  # Redirect various claim process and apply links
  - src: /disability-benefits/claims-process/ratings/
    dest: /disability-benefits/eligibility/ratings/
```
```yaml
  # ==============
  # March 23, 2020: https://github.com/department-of-veterans-affairs/va.gov-team/issues/7104
  # ==============
  - src: ^/coronavirus-veteran-faq/?$
    dest: /coronavirus-veteran-frequently-asked-questions/
    matcher: "~*"
```  
