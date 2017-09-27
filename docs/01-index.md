---
title: Vets.gov Design System
---

Currently, this is USWDS' Fractal system with an overlay of Vets. It's very much a WIP.

## To Do:

- incorporate Vets CSS
- ~~Get the CSS working properly~~ **CAVEAT** This was done by bringing in `dist/` -- needs to be more tightly incorporated?
- Remove components we're not using on Vets
  - Serif font
    - Merriweather is removed, but need to reset the section headings
  - ~~labels~~
  - ~~forms > password reset form~~
  - ~~forms > sign in form (this and above handled by id.me)~~
  - ~~Graphic list~~
  - ~~Hero~~
  - ~~Buttons > Grey~~
  - ~~Buttons > Outline Inverse~~

- Incorporate documentation for Foundation grid

- Match styles:
  - ~~Tables~~
  - Fonts
  - Alerts
  - ~~Accordions~~
  - Header -- so broken.
  - Footer
  - Links
  - US Government banner (replace with WIP banner)
  - Buttons > Primary Alt (replace with green)
  - Buttons > Secondary (replace with outline)


- Add components that we _are_ using on Vets that are not on USWDS (what are these?)
  - Color palette
  - Subway map
  - Logos
  - Grey callouts
  - Blue cards (deprecated?)
  - Need help? sidebar/footer
  - Iconography
  - Header > Get Help
  - Homepage template (unsure whether to break this down into smaller components, since so many of them _only_ live on Home)
  - Navigation > breadcrumbs
  - Navigation > Next/prev
  - Log in landing page (prompt to ID.me)
  - Modals
  - Address blocks
  - Progress bars
  - Alert/accordion hybrid (see Prescription Refills)
  - Data visualizations
  - Add Source Sans Pro Bold
  - Responsive table
  - Expandable alert box (https://www.vets.gov/health-care/health-conditions/mental-health/)

  **Open questions:**

  - Multi-select accordion? Do we use this anywhere?


  **Fractal only:**

  - Add a 'deprecated' label for certain components

  ## Long game:

  - Output React components via API
  - Tie this to Sketch or Lingo

Edit this page's contents at `docs/01-index.hbs`
