# Web Monetization

This repo is the code behind [webmonetization.org](https://webmonetization.org)

It is the home of the proposed Web Monetization standard currently incubating at the [WICG](https://wicg.org).

You can view the [explainer](https://webmonetization.org/docs/explainer), or read
the proposed [spec](https://webmonetization.org/specification).

## Contribute

This website was created with [Docusaurus](https://v2.docusaurus.io/) and contributions are welcome as pull requests.

### Local Development

1. Make sure all the dependencies for the website are installed:

```sh
# Install dependencies
$ cd webmonetization
$ yarn
```

2. Run your dev server:

```sh
# Start the site
$ yarn start
```

## Specification Development

The source file for the specification document is at [static/specification-respec.html](https://github.com/WICG/webmonetization/tree/main/static/specification-respec.html). This is the raw ReSpec version that editors should make changes and updates to. Documentation of ReSpec can be accessed on the [ReSpec Wiki](https://github.com/w3c/respec/wiki/).

On your local machine, once the dev server is running, you can see all your updates to the specification at `localhost:3000/specification-respec.html`. Once you're done with your changes, please generate new static HTML version of the specification by clicking the ReSpec button in the top-right corner.

Rename this file to index.html and replace previous the [static/specification/index.html](https://github.com/WICG/webmonetization/tree/main/static/specification/index.html). In general, Community Group Draft Reports do not follow the same strict conventions as more mature specifications. As such, we will only archive a version of the specification for major updates.

For example, a copy of [version 1.0 of the specification](https://github.com/WICG/webmonetization/tree/main/static/specification/versions/CG-DRAFT-web-monetization-20210317.html) currently lives in [static/specification/versions/](https://github.com/WICG/webmonetization/tree/main/static/specification/versions).

## Editing Content

### Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.md`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

For more information about docs, click
[here](https://v2.docusaurus.io/docs/docs-introduction/)

## Adding Content

### Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`, example
   `docs/newly-created-doc.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

1. Refer to that doc's ID in an existing sidebar in `website/sidebar.json`:

```javascript
// Add newly-created-doc to the Getting Started category of docs
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "newly-created-doc" // new doc here
    ],
    ...
  },
  ...
}
```

For more information about adding new docs, click
[here](https://v2.docusaurus.io/docs/docs-introduction/)

### Adding items to your site's top navigation bar

1. Add links to docs, custom pages or external links by editing the `themeConfig.navbar.links` field of `docusaurus.config.js`:

`docusaurus.config.js`

```javascript
module.exports = {
  // ...
  themeConfig: {
    navbar: {
      links: [
        {
          // Client-side routing, used for navigating within the website.
          // The baseUrl will be automatically prepended to this value.
          to: 'docs/introduction',
          // A full-page navigation, used for navigating outside of the website.
          // You should only use either `to` or `href`.
          href: 'https://www.facebook.com',
          // Prepends the baseUrl to href values.
          prependBaseUrlToHref: true,
          // The string to be shown.
          label: 'Introduction',
          // Left or right side of the navbar.
          position: 'left', // or 'right'
          // To apply the active class styling on all
          // routes starting with this path.
          // This usually isn't necessary
          activeBasePath: 'docs',
          // Alternative to activeBasePath if required.
          activeBaseRegex: 'docs/(next|v8)',
          // Custom CSS class (for styling any item).
          className: '',
        },
        // ... other links
      ],
    },
    // ...
  },
}
```

For more information about the navigation bar, click
[here](https://v2.docusaurus.io/docs/theme-bootstrap/#navbar)

### Adding custom pages

1. Docusaurus uses React components to build pages. The components are saved as
   .js files in `src/pages`:
1. If you want your page to show up in your navigation header, you will need to
   update the `themeConfig.navbar.links` field of `docusaurus.config.js` (see above).

`website/siteConfig.js`

```javascript
module.exports = {
  // ...
  themeConfig: {
    navbar: {
      links: [
        {
          to: 'my-new-custom-page',
          label: 'My New Custom Page',
          position: 'left', // or 'right'
        },
      ],
    },
  },
}
```

For more information about custom pages, click
[here](https://v2.docusaurus.io/docs/creating-pages/).

## Full Documentation

Full documentation can be found on the [Docusaurus website](https://v2.docusaurus.io/).
