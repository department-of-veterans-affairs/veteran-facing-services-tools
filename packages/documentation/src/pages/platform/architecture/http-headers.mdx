# HTTP Headers used on VA.gov
---
## Overview

- HTTP headers control browser behavior
- Browser behavior is a front end concern
- Shared responsibility between devops and front end
  - configuration
  - management
  - user experience
- Typically
  - devops responsible for the how (e.g. Terraform)
  - front end responsible for the why (e.g. security, caching behavior)
---
## HTTP Example
- raw request and response
```mermaidjs
graph TB
    subgraph HTTP
      F[HTTP <br/>Headers]
subgraph HTTP Body
       G[HTML<br />Head]
       A[HTML Body]
       end
    end
```
---
## HTTP Request Example
- `GET /health-care/ HTTP/1.1`
  - action to perform, resource location, http version
  - `GET`, `POST`, `PUT`, `DELETE`
- `Host: www.va.gov` - derived from URI
- `Connection: keep-alive`
  - HTTP persistent connection
  - reduces latency and traffic by reusing TCP connection
- `Upgrade-Insecure-Requests: 1`
  - supports `Content-Security-Policy: upgrade-insecure-requests`
  - basically tells server to redirect http requests to https
- `User-Agent: ...` - identifying information about client software e.g. OS, version
---
## HTTP Request Example continued

- `Accepts: ...`
  - MIME types supported
  - Server chooses one as the `Content-Type` on the response
- `Accept-Encoding: gzip, defat, br` - supported compression algorithms
- `Accept-Language: en-US,en;q=0.9`
  - supported language and localization preference
  - `q=0.9` expresses order of preference
---
## HTTP Response Example
- `HTTP/1.1 200 OK` - response version and status code
- `Date: ...`
- `x-amz-...: ...` -  Amazon custom response headers
- `Referrer-Policy: no-referrer-when-downgrade`
  - determines `Referer` header behavior i.e. previous page link
  - `no-referrer-when-downgrade` is default behavior- sends previous page link when security protocol is the same
- `Strict-Transport-Security: ...`
  - tells the browser to only connect to website via https
  - impacts all future connections to a site
---
## HTTP Response Example continued
- `X-Content-Type-Options: no-sniff`
  - follow the mime-types in the http content-type
  - only applies to scripts and styles right now
-  `X-Frame-Options: deny`
   - determines if browser can render page in a frame
   - prevents clickjacking attacks
- `X-XSS-Protection: 1; report=/csp-report`
  - used by older browsers- tells them to stop loading the page if cross-site scripting attack is detected
- `Content-Encoding: gzip` - encoding used on body
- `Set-Cookie: ...` - cookie from server
---
## HTTP Response Example continued 2
- `Transfer-Encoding: chunked`
  - form of encoding used between nodes (hop-by-hop)
  - chunked: `Content-Length` is unknown
- `Connection: Keep-alive` - see request example
---
## Cache Control Response
- `Cache-Control: public, max-age=86400`
  - can be stored by any cache
  - `private` indicates response can be cached but contains user specific info
  - `max-age=86400` - number of minutes cache can be used before checking if updated (60 days)
- `Etag: [hash]`
  - file hash used when checking if file is updated
  - when matched, server will return status code `304 Not Modified`
---
## Cache Control Request
- `Cache-Control: no-cache` & `Pragma: no-cache`
  - HTTP 1.1 and 1.0
  - check if resource has changed using `ETag` or `Last-Modified`
- `If-None-Match: [hash]` & `If-Modified-Since: [date]`
  - when `max-age` is reached, browser includes in request
  - `[date]` header is used only if `[hash]` is not supported
---
## Cross-Origin Resource Sharing (CORS)
- Applies to all XHR requests not on the same origin
- CORS headers are returned by the server allowing it to control a range of permissions
  - `Access-Control-Allow-Origin: https://www.va.gov` - if allowed origin doesn't match the current origin, then the browser will not load the resource
    -   `... has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.`
    - VA.gov is configured to only add this header when the request contains an origin that matches our whitelist
    - Server _can_ block the request- ours do not opting to always return the resource
---
## Cross-Origin Resource Sharing (CORS) OPTIONS
- Preflight checks are required for methods that can cause change: POST, DELETE, UPDATE
- OPTIONS request
  - `Access-Control-Request-Headers` - list of headers client intends to send
- OPTIONS response
  - `Access-Control-Allow-Methods: GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS`
  - `Access-Control-Allow-Headers: x-key-inflection`
  - `Access-Control-Expose-Headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset`
- If any of these permissions don't match the intended request, the browser will cancel it
---
## Cross-Origin Resource Sharing (CORS) Other directives
- `Vary: Origin, Access-Control-Request-Headers, Access-Control-Request-Method`
  - indicates that response will vary depending on the value of these headers
- Other controls: `Access-Control-Allow-Methods: GET`, `Access-Countrol-Max-Age: 0`, `Access-Control-Allow-Credentials: true`
---
## Content Security Policy (CSP)
- can be an HTTP header or an HTML meta tag
- whitelist of valid sources of scripts
  - `script-src: http://search.usa.gov`
- can set set up to report CSP violations
---
## Configs
- CSP
  - [prod](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-prod.yml)
  - [staging](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-staging.yml)
  - [dev](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/revproxy-vagov/vars/content_security_policy_vagov-dev.yml)
- CORS (requires manual deployment)
  - [prod](https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-prod/main.tf)
  - [staging](https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-staging/main.tf)
  - [dev](https://github.com/department-of-veterans-affairs/devops/blob/4ca18a26f090cf173d73abb751fbbf6e2f0626e3/terraform/environments/dsva-vagov-dev/main.tf)
- cache-control
  - [prod](https://github.com/department-of-veterans-affairs/devops/blob/d928cbfab6fd791c3b05464bc759a0cd9b4cd6b2/ansible/deployment/roles/deploy-static-assets/tasks/upload-public.yml)