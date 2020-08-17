import React from 'react';
import PropTypes from 'prop-types';

import {
  createIcon,
  getFileNameAndExt,
  getFileExtensionFromUrl,
  processFileName,
  renderFileSize,
} from '../../helpers/link-utils';

// Common file type & MIME-type
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
// Bigger list: https://www.iana.org/assignments/media-types/media-types.xhtml
export const FILE_TYPES = {
  compressed: {
    zip: 'application/zip',
    rar: 'application/vnd.rar',
  },
  'Excel workbook': {
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  },
  graphic: {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    png: 'image/png',
    bmp: 'image/bmp',
    tif: 'image/tiff',
    tiff: 'image/tiff',
    webp: 'image/webp',
  },
  'Portable Document Format': {
    pdf: 'application/pdf',
  },
  PowerPoint: {
    ppt: 'application/vnd.ms-powerpoint',
    pptx:
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  },
  'text file data': {
    csv: 'text/csv',
    tsv: 'text/tab-separated-values',
  },
  'text file': {
    txt: 'text/plain',
    rtf: 'application/rtf',
  },
  video: {
    avi: 'video/x-msvideo',
    mp4: 'application/mp4',
    m4v: 'video/mp4',
    mkv: 'video/x-matroska',
    mov: 'video/quicktime',
    mpg: 'video/mpe',
    mpeg: 'video/mpeg',
    ogv: 'video/ogg',
    webm: 'video/webm',
    wmv: 'video/x-ms-asf',
  },
  'Word document': {
    doc: 'application/msword',
    docx:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  },
};

/**
 * Find the file group (with reference to the associated MIME-type) from the
 * list of known file types given the found file extension
 * @param {string} fileExt - file extension found from the given url
 * @return {string} - Associated group name of the found file extension
 */
export const getExtGroup = fileExt =>
  fileExt
    ? Object.keys(FILE_TYPES).find(groupName =>
        Object.keys(FILE_TYPES[groupName]).includes(fileExt),
      )
    : 'Unknown';

/**
 * Object passed to the download link contents render function
 * @typedef DownloadLink~linkProps
 * @type {Object.<string, *>}
 * @property {string} href - link href
 * @property {string} target - set to '_blank' for external links
 * @property {string} rel - set to 'noopener noreferrer' for external links
 * @property {string|boolean} download - download link attribute, set to true to
 *  keep the current file name, or as a string of file name plus extension to
 *  rename the file
 * @property {string} type - file MIME-type
 * @property {...*} var_args - Include any extra parameters you want to add to the
 *  download link, e.g. `className`, `onClick`, etc.
 */
/**
 * Render download link content
 * @function content
 * @param {ReactElement} renderedSize - rendered file size, e.g.
 *   ` (1.3<abbr title="Megabytes">MB</abbr>)`
 * @param {ReactElement} renderedExtension - rendered file extension, e.g.
 *   `<abbr title="Portable Document Format">PDF</abbr>`
 * @param {DownloadLink~props} props - all props passed into the component
 * @param {DownloadLink~linkProps} linkProps - read-only link properties
 * @return {ReactElement} renderedSize & renderedExtension wrapped in a `<dfn>`; or
 *   customized as desired
 */
/**
 * DownloadLink properties
 * @typedef DownloadLink~props
 * @type {object.<string, *>}
 * @property {string} href (required) - url pointing to a downloadable file
 * @property {string} title - title of the file; required if no children are passed
 *  into this component
 * @property {string|number} size - size of downloadable file; pass in string
 *  (number + unit abbreviation, e.g. "1.5mb" or "100kb") or a file size number
 *  in bytes.
 * @property {string} download - new download file name and extension of the
 *  downloadable file
 * @property {string} type - downloadable file MIME-type; include if the file is
 *  not in the list of known file extensions
 * @property {string|ReactElement} icon - Fontawesome icon group + name, e.g.
 *  "fas fa-download", or some custom icon JSX
 * @property {boolean} external - Automatically set to `true` since it opens a
 *  new tab and doesn't disrupt the form flow; when `true` the link includes
 *  `target="_blank"` & `rel="noreferrer noopener"` attributes
 * @property {function} content - Function that allows custom rendering of the link
 *  content; This function returns JSX
 * @property {...*} var_args - Include any extra parameters you want to add to the
 *  download link, e.g. `className`, `onClick`, etc.
 */
/**
 * DownloadLink component
 * @function DownloadLink
 * @param {DownloadLink~props}
 */
const DownloadLink = props => {
  if (!props.href) {
    throw new Error('Download links require an href property');
  }
  const {
    external = true,
    title,
    content,
    download,
    icon = '',
    size,
    ...linkProps
  } = props;

  if (!title && typeof content !== 'function') {
    throw new Error(
      'Download links require a title property or custom content function',
    );
  }

  const fileName = getFileNameAndExt(linkProps.href);
  const fileExt = getFileExtensionFromUrl(fileName);
  const group = getExtGroup(fileExt);

  if (external || !group) {
    // Open external site in a new tab
    linkProps.target = '_blank';
    linkProps.rel = 'noopener noreferrer';
  }

  // fallback to `download` (no set value; filename stays the same)
  linkProps.download = (download && processFileName(download)) || true;

  if (!linkProps.type) {
    linkProps.type =
      (FILE_TYPES[group] && FILE_TYPES[group][fileExt]) ||
      'application/unknown';
  }

  const renderedSize = renderFileSize(size);
  const renderedExtension = fileExt && (
    <abbr title={group || fileExt}>{fileExt.toUpperCase()}</abbr>
  );
  return (
    <a {...linkProps}>
      {typeof icon !== 'string' ? icon : createIcon(icon || 'fas fa-download')}
      {(typeof content === 'function' &&
        content({ renderedExtension, renderedSize, linkProps, props })) || (
        <>
          Download {title}{' '}
          <dfn>
            {renderedExtension} {renderedSize}
          </dfn>
        </>
      )}
    </a>
  );
};

DownloadLink.propTypes = {
  /**
   * Pass in the url of the downloadable asset. Please make sure to remove any
   * url-like entries from the search (e.g. `?search=http://example.com`) or
   * anchor (e.g. `#foo/bar`) parameters.
   */
  href: PropTypes.string.isRequired,

  /**
   * A title for the downloadable file is necessary. Only include a title for
   * the downloadable file and do not include words such as "view", "go to" or
   * "download". Those can be added in the `content` callback function. This
   * property is required unless a custom `content` function has been defined.
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * Pass in a function to render the download link content. The parameters
   * passed into this function includes 1) `linkProps` which contains the
   * essential, and any extra, parameters passed into the `<DownloadLink>`
   * component; 2) rendered file size JSX (`renderedSize`) and 3) rendered file
   * extension (`renderedExtension`). The two separated JSX passed to this
   * function *must* be wrapped in a `<dfn>` element upon return (to maintain
   * accessibility); but can otherwise return any content can be returned
   */
  content: PropTypes.func,

  /**
   * For best results, please ensure that a file size is included as a property.
   * This property is passed in as either a case-insensitive string of number
   * plus units (e.g. "1.5mb") or the size in bytes. The size is then processed
   * and eventually rendered inside an `<abbr>` wrapped in a `<dfn>` element to
   * match the desired accessible pattern
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * If a download property is provided it will be included as an attribute in
   * the rendered download link. If not included, it will be an exact copy of
   * the href value.
   */
  download: PropTypes.string,

  /**
   * If a type property is provided, it will be included as an attribute in the
   * rendered download link. If not defined, the file extension will be cross-
   * referenced with a list of known MIME-types. If the file grouping, or
   * MIME-type can not be determined, the resulting download link attribute will
   * show "Unknown".
   */
  type: PropTypes.string,

  /** Pass in a custom font-awesome icon. Without this defined, the component
   * will use "fas fa-download" for downloadable assets. This property will
   * accept either a string (include both "fas" and the icon name, e.g.
   * "fa-download") or JSX, e.g.
   * `<i className="fas fa-download" role="img" aria-hidden="true" />` - please
   * make sure to include the `role="img"` and `aria-hidden="true"` for the best
   * accessibility practices. Note that this property will be ignored if the
   * DownloadLink includes any child elements.
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** Set as true by default to prevent form flow disruption. When set, it
   * includes a `target="_blank"` and `rel="noopener noreferrer"` attribute in
   * the download link. For links where this property is `false`, it won't
   * include the `target` and `rel` attributes, but this will be overridden if
   * the file extension is not a recogized file type. The exported `FILE_TYPES`
   * object contains a list of recognized extensions.
   */
  external: PropTypes.bool,
};

export { createIcon };
export default DownloadLink;
