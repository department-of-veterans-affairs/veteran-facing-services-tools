---
title: Reducing site performance impact of web fonts
---

# WEB-FONTS IMPROVEMENTS

| | | | |
| --- | --- | --- | --- |
|**Decision Made:**|No| **Decision Date:** | Winter 2019 |

### **GOALS**

- Improving First Contentful Paint
- Improve loading time

**Decision Maker:** @jhonnyoddball and @rianfowler

---

### **PROPOSED SOLUTIONS**

- Adding `font-display: swap;` to all webfonts to remove FOIT (Flash of Invisible Text)
- Splitting the webfonts into their own css and adding them to the head before the main css
- Inline the webfonts into the css
- Encoding the fonts on base64
- Remove hashing from the font names
- Preloading the fonts (hard-coded the 4 needed on the header or dynamically, but can run into problems if they are more than 5 fonts per application)
- Use of [Font Face Observer](https://github.com/bramstein/fontfaceobserver)

---

### **CASE STUDIES AND DOCUMENTATION**

https://github.com/department-of-veterans-affairs/va.gov-team/issues/1676

---

### **SUMMARY**

#### Adding `font-display: swap;`

- This is a great feature to add. It will force the use of the system fonts until the webfonts are ready. If the browser doesn't not support it, it will act regularly.
- We can't really use it since we are only able to change 4 out of 37 fonts.

#### Splitting the webfonts into their own css

- The separation of the webfonts into a separate css file did not make any difference nor impacted the webfonts in any way.

#### Inline the webfonts into the css and Encoding the fonts on base64

- Inline the webfonts into the css can easily be performed by encoding the webfonts as base64 and url-loader already transforms files into base64 URIs.
- Encode base64 and inline the webfonts made things worst.

#### Preloading the fonts

- Using pre-load in some of the fonts can improve the performance. Doing this helps the FCP since the webfonts will not be blocked by the CSS files.
- In order to do this I removed the hashing from the webfonts and hard-coded them in the header

```  
  <link rel="preload" href="/generated/sourcesanspro-bold-webfont.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/generated/sourcesanspro-regular-webfont.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/generated/bitter-bold.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/generated/fa-solid-900.woff2" as="font" type="font/woff2" crossorigin>
```
- If FCP is the priority over the loading time, then pre-loading could be a good option to improve the performance of the fonts.
- Keep in mind that we should only pre-load 3-4 fonts only because we might end up pre-loading fonts that will not be used in the page.

#### Use Font Face Observer

- Since we could be calling any of our current fonts from multiple css locations, therefore this will be hard to implement.
- This will also apply to any webfont loader

---

### **DECISION**

- Remove hashing from webfonts
- Pre-load the 4 main fonts in the header


