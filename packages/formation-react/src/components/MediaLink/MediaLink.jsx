import React from 'react';
import PropTypes from 'prop-types';

import { buildIcon, createContentFromTemplate } from '../../helpers/utils';

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
 * MediaLink component
 * @param {string} href (required) - url pointing to the video hosting site
 * @param {string} title (required) - title of the file or video
 * @param {string} template - link content template; defaults to
 *  `View {type} about {title} on {sitename}`
 * @param {string|JSX} icon - Fontawesome icon group + name, e.g.
 *  "fab fa-youtube", or the icon JSX
 * @param {boolean} external - Set to true if the link is to an external site;
 *  setting this adds a blank target (opens a new tab) & no-referrer and opener
 *  rel attribute
 * @param {...*} var_args - Include any extra parameters you want to add to the
 *  video link, e.g. `className`, etc.
 */
const MediaLink = props => {
  if (!props.href) {
    throw new Error('Media links require an href property');
  }
  if (!props.title && !props.children) {
    throw new Error(
      'Media links require either a title property or child elements',
    );
  }
  const {
    external = true,
    title,
    template = 'View {type} about {title} {siteName}',
    icon = '',
    children,
    ...linkProps
  } = props;
  let resultingContent = title;

  const mediaSite = MEDIA_SITES[findMediaSite(linkProps.href)] || {};

  // External site
  if (external) {
    linkProps.target = '_blank';
    linkProps.rel = 'noopener noreferrer';
  }

  if (!children) {
    resultingContent = (
      <>
        {typeof icon !== 'string'
          ? icon
          : buildIcon(icon || mediaSite.icon || 'fas fa-play-circle')}
        {createContentFromTemplate({
          template,
          type: mediaSite.type || 'site',
          title,
          siteName: mediaSite.name ? <dfn>on {mediaSite.name}</dfn> : ' ',
        })}
      </>
    );
  }
  return <a {...linkProps}>{children || resultingContent}</a>;
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
   * such as "view", "go to" or "watch". Those can be added in the template
   * property. This property is required unless custom child elements have been
   * included. If you pass in JSX, please make sure to include a `key` because
   * of the way the template renders the content.
   */
  title: PropTypes.oneOf([PropTypes.string, PropTypes.element]),

  /**
   * Template string used to build the link content; defaults to
   *  `View {type} about {title} on {sitename}` where `{type}` & `{siteName}`
   *  are provided by the known media entry (`siteName` is wrapped in a `<dfn>`
   *  element) and `{title}` is the required value passed into the component.
   */
  template: PropTypes.string,

  /** Pass in a custom font-awesome icon. When defined, the component will use
   * "fab fa-youtube" for videos. This property will accept either a string
   * (include both "fas" and the icon name, e.g. "fa-youtube") or JSX, e.g.
   * `<i className="fab fa-youtube" role="img" aria-hidden="true" />` -
   * please make sure to include the `role="img"` and `aria-hidden="true"` for
   * the best accessibility practices. This property will be _ignored_ if the
   * MediaLink includes any child elements.
   */
  icon: PropTypes.oneOf([PropTypes.string, PropTypes.element]),

  /** By default, all video links are assumed to be to an external video hosting
   * site (currently only YouTube is a recognized address). When this property
   * is `true`, it includes `target="_blank"` and `rel="noopener noreferrer"`
   * attributes in the link. If this property is set to `false`, the `target`
   * and `rel` attributes are not included.
   */
  external: PropTypes.bool,
};

export default MediaLink;
