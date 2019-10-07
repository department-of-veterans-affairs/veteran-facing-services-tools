---
title: Frontend Security
---

# Overview  

`vets-website` uses modern browser features to provide a secure experience for veterans. In general, these features are automatically included through the deployment process and require no configuration by front end engineers. 

_This is an overview not an implementation guide. These rules apply to VA.gov production environments. Not all security features will be used in local, development, or staging environments._ 

## HTTPS

- All connections made to VA.gov must be secure (HTTPS)
- VA.gov implements HSTS and automatically redirects to a secure protocol if a non secure connection is attempted 

## Cross-Origin Resource Sharing (CORS)

- Some cross origin connections made to VA.gov must support CORS including **all** XHR connections and web font downloads. 
- Updates to CORS headers returned by `vets-api` services or `vets-website` assets must be made through the devops team and must be reviewed by the [frontend review group](https://github.com/orgs/department-of-veterans-affairs/teams/frontend-review-group). Example:  
  - Your application is on a VA.gov subdomain, needs to connect to `vets-api`, but is not currently listed in the allowed origins
- More [info on cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- CORS configurations: 
  - [production](https://github.com/department-of-veterans-affairs/devops/blob/ec2b1802c10e1e48d475a97f75a5a14fd6e552e7/terraform/environments/dsva-vagov-prod/main.tf#L177-L180)
  - [staging](https://github.com/department-of-veterans-affairs/devops/blob/cbab63cdf0595f4172b43d90cd46233997b37324/terraform/environments/dsva-vagov-staging/s3_buckets.tf#L16-L19)

## Content Security Policy (CSP)

- All VA.gov pages return a Content Security Policy header that allows only known scripts to run on the page
- The CSP is enforced i.e. not set to `report-only`
- The `report-uri` points to a VA platform error capturing service (Sentry)
  - VA.gov throttles these reports by including the `report-uri` only on a small % of responses
- Updates to CSP headers returned by or `vets-website` assets must be made through the devops team and must be reviewed by the [frontend review group](https://github.com/orgs/department-of-veterans-affairs/teams/frontend-review-group)
- More [info on CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- CSP configurations:
  - [production](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-prod.yml)
  - [staging](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-staging.yml)
  - [dev](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-dev.yml)
  

