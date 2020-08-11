import React from 'react';
import PropTypes from 'prop-types';

import { createIcon } from '../../helpers/link-utils';

// List of known media sites
export const MEDIA_SITES = {
  'youtube.com': {
    name: 'YouTube',
    icon: 'fab fa-youtube',
    type: 'video',
  },
  'instagram.com': {
    name: 'Instagram',
    icon: 'fab fa-instagram',
    type: 'images',
  },
};

/**
 * Determine if the url contains the url of a known video hosting site
 * @param {string} url - url to video hosting site
 * @return {boolean} - boolean value indicating that the site is a known host
 */
export const findMediaSite = url =>
  Object.keys(MEDIA_SITES).find(site =>
    (url || '').toLowerCase().includes(site),
  );

/**
 * Object passed to the media link contents render function
 * @typedef MediaLink~linkProps
 * @type {Object.<string, *>}
 * @property {string} href - link href
 * @property {string} target - set to '_blank' for external links
 * @property {string} rel - set to 'noopener noreferrer' for external links

 * @property {string} type - file MIME-type
 * @property {...*} var_args - Include any extra parameters you want to add to the
 *  media link, e.g. `className`, `onClick`, etc.
 */
/**
 * Render media link content
 * @function content
 * @param {ReactElement} renderedSiteName - rendered site name, e.g.
 *   `<dfn>on YouTube</dfn>`
 * @param {MediaLink~props} props - all props passed into the component
 * @param {MediaLink~linkProps} linkProps - read-only link properties
 * @return {ReactElement} text with renderedSiteName; or customized as desired
 */
/**
 * MediaLink properties
 * @typedef MediaLink~props
 * @type {object.<string, *>}
 * @param {string} href (required) - url pointing to the video hosting site
 * @param {string} title (required) - title of the file or video
 * @param {function} content - Function that allows custom rendering of the link
 *  content; This function returns JSX
 * @param {string|ReactElement} icon - Fontawesome icon group + name, e.g.
 *  "fab fa-youtube", or the icon JSX
 * @param {boolean} external - Set to true if the link is to an external site;
 *  setting this adds a blank target (opens a new tab) & no-referrer and opener
 *  rel attribute
 * @param {...*} var_args - Include any extra parameters you want to add to the
 *  video link, e.g. `className`, etc.
 */
/**
 * MediaLink component
 * @function MediaLink
 * @param {MediaLink~props}
 */
const MediaLink = props => {
  if (!props.href) {
    throw new Error('Media links require an href property');
  }

  const { external = true, title, content, icon = '', ...linkProps } = props;
  const mediaSite = MEDIA_SITES[findMediaSite(linkProps.href)] || {};

  if (!title && typeof content !== 'function') {
    throw new Error(
      'Media links require a title property or custom content function',
    );
  }

  // External site
  if (external) {
    linkProps.target = '_blank';
    linkProps.rel = 'noopener noreferrer';
  }

  const renderedSiteName = mediaSite.name && <dfn>on {mediaSite.name}</dfn>;
  const renderedSiteType = mediaSite.type || 'site';
  return (
    <a {...linkProps}>
      {typeof icon !== 'string'
        ? icon
        : createIcon(icon || mediaSite.icon || 'fas fa-play-circle')}
      {(typeof content === 'function' &&
        content({ renderedSiteName, renderedSiteType, linkProps, props })) || (
        <>
          View {renderedSiteType} about {title} {renderedSiteName}
        </>
      )}
    </a>
  );
};

MediaLink.propTypes = {
  /**
   * Pass in the url to a supported video service. Please make sure to remove
   * any url-like entries from the search (e.g. `?search=http://example.com`) or
   * anchor (e.g. `#foo/bar`) parameters.
   */
  href: PropTypes.string.isRequired,

  /**
   * A title for the video is necessary. Only include the title, and not words
   * such as "view", "go to" or "watch"; add this within the `content` callback
   * function. This property is required unless a custom `content` function has
   * been defined.
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * Pass in a function to render the media link content. The parameters
   * passed into this function includes 1) `linkProps` which contains the
   * essential, and any extra, parameters passed into the `<MediaLink>`
   * component; 2) rendered site name JSX (`renderedSiteName`; e.g.
   *  `<dfn>on YouTube</dfn>`) and 3) rendered site type (`renderedSiteType`;
   * e.g. `video` or `images` - just a string). The function can return any
   * content but should include the `renderedSiteName` to maintain
   * accessibility.
   */
  content: PropTypes.func,

  /** Pass in a custom font-awesome icon. When defined, the component will use
   * "fab fa-youtube" for videos. This property will accept either a string
   * (include both "fas" and the icon name, e.g. "fa-youtube") or JSX, e.g.
   * `<i className="fab fa-youtube" role="img" aria-hidden="true" />` -
   * please make sure to include the `role="img"` and `aria-hidden="true"` for
   * the best accessibility practices. This property will be _ignored_ if the
   * MediaLink includes any child elements.
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** By default, all video links are assumed to be to an external video hosting
   * site (currently only YouTube is a recognized address). When this property
   * is `true`, it includes `target="_blank"` and `rel="noopener noreferrer"`
   * attributes in the link. If this property is set to `false`, the `target`
   * and `rel` attributes are not included.
   */
  external: PropTypes.bool,
};

export { createIcon };
export default MediaLink;
