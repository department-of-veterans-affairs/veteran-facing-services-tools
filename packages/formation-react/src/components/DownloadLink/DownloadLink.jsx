import React from 'react';
import PropTypes from 'prop-types';

import { buildIcon, createContentFromTemplate } from '../../helpers/utils';

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

// List of known file size units
export const FILE_SIZES = {
  B: 'Bytes',
  KB: 'Kilobytes',
  MB: 'Megabytes',
  GB: 'Gigabytes',
};

// Regex to extract a file extension of a url path
// https://www.example.com/test.jpg -> jpg
// https://www.foo.bar.com/my.folder/doc.pdf?version=3.4 -> pdf
// https://www.test.com/file.txt#anchor-link -> txt
const fileExtRegex = /(?:\.([^.?#]+))?(?:[?#].*?)?$/;

/**
 * Non-optimal method to find the file name & extension. It splits off the final
 * forward slash (`/`) and processes that portion of the content.
 * @param {string} url
 * @return {string} last portion of a url; after the last forward slash
 */
const getFileNameAndExt = url => url.split('/').pop();

/**
 * Extract file extension from a url
 * @param {string} url - path to downloadable file
 * @return {string} - Known file extension. If not found, this function returns
 * an empty string
 */
export const getFileExtensionFromUrl = fileName => {
  const ext = fileExtRegex.exec(fileName);
  return ext && ext[1] ? ext[1] : '';
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

// Regex used to replace digits & separators to extract out the file size unit
// "1.5mb" -> "mb"
const fileSizeUnitRegex = /[0-9., ]/g;

/**
 * @typedef DownloadLink~sizeData
 * @type {Object.<string>}
 * @property {number} sizeValue - numeric value of file size, e.g. 1.5
 * @property {string} sizeAbbr - size unit abbreviation in uppercase, e.g. "MB"
 * @property {string} sizeName - size unit name spelled out, e.g. "Megabytes"
 */
/**
 * Extract file size data from a mixed value of number plus size unit, e.g.
 * "1.5mb"
 * @param {string} size - file size data, e.g. "1.5mb"
 * @return {DownloadLink~sizeData}
 */
export const getFileSizeData = (size = '') => {
  const sizeAbbr = size.replace(fileSizeUnitRegex, '').toUpperCase();
  const sizeValue = parseFloat(size);
  return {
    sizeValue,
    sizeAbbr,
    sizeName: FILE_SIZES[sizeAbbr] || '',
  };
};

// Regex to replace characters that are reserved/not allowed in file names
// https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file
const fileNameRestrictedCharacters = /[<>:"/\\|?*\n\r]/g;
const reservedFileNames = /^(CON|PRN|AUX|NUL|COM|LPT)$/;
const trailingPeriod = /\.$/;

/**
 * Sanitize title value to use as a valid OS filename
 * @param {string} title - unprocessed title string
 * @return {string} sanitized download filename
 */
export const processFileName = title =>
  (title || '')
    .replace(fileNameRestrictedCharacters, '')
    .replace(reservedFileNames, '')
    .replace(trailingPeriod, '')
    .trim();

/**
 * DownloadLink component
 * @param {string} href (required) - url pointing to a downloadable file
 * @param {string} title - title of the file; required if no children are passed
 *  into this component
 * @param {string} size - size of downloadable file; pass in number + unit
 *  abbreviation, e.g. "1.5mb" or "100kb"
 * @param {string} download - new download file name and extension of the
 *  downloadable file
 * @param {string} type - downloadable file MIME-type; include if the file is
 *  not in the list of known file extensions
 * @param {string|JSX} icon - Fontawesome icon group + name, e.g.
 *  "fas fa-download", or some custom icon JSX
 * @param {boolean} external - Set to true if the link is to an external site;
 *  setting this adds a blank target (opens a new tab) & no-referrer and opener
 *  rel attribute
 * @param {string} template - link content template; defaults to
 *  `Download {title} {fileInfo}`
 * @param {...*} var_args - Include any extra parameters you want to add to the
 *  download link, e.g. `className`, `onClick`, etc.
 */
const DownloadLink = props => {
  if (!props.href) {
    throw new Error('Download links require an href property');
  }
  if (!props.title && !props.children) {
    throw new Error(
      'Download links require either a title property or child elements',
    );
  }
  const {
    external = false,
    title,
    template = 'Download {title} {fileInfo}',
    download,
    icon = '',
    children,
    size,
    ...linkProps
  } = props;
  let resultingContent = title;

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

  if (!children) {
    const { sizeValue, sizeAbbr, sizeName } = getFileSizeData(size);
    resultingContent = (
      <>
        {typeof icon !== 'string' ? icon : buildIcon(icon || 'fas fa-download')}
        {createContentFromTemplate({
          template,
          title,
          fileInfo: (
            <dfn key="fileInfo">
              {fileExt && (
                <abbr title={group || fileExt}>{fileExt.toUpperCase()}</abbr>
              )}
              {size && (
                <>
                  {' ('}
                  {sizeValue}
                  {/*
                  Don't use <abbr> if sizeName is undefined, in case the user
                  passed in "1.5 Megabytes" as a size */}
                  {(sizeName && <abbr title={sizeName}>{sizeAbbr}</abbr>) ||
                    sizeAbbr}
                  {')'}
                </>
              )}
            </dfn>
          ),
        })}
      </>
    );
  }
  return <a {...linkProps}>{children || resultingContent}</a>;
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
   * "download". Those can be added in the template property. This property is
   * required unless custom child elements have been included. If you pass in
   * JSX, please make sure to include a `key` because of the way the template
   * renders the content.
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /**
   * A template for creating the link content. This will only accept a string,
   * not JSX. Include `{title}` and `{fileInfo}` within the template to be
   * replaced by the passed in title, and generated file info markup obtained
   * from the size property, or include it in a custom template. The default
   * template is `'Download {title} {fileInfo}'`.
   */
  template: PropTypes.string,

  /**
   * For downloadable content, please ensure that the file size is also included
   * as a property. This property is passed in as a string of size plus unit of
   * measure (case-insensitive), e.g. "1.5mb". Accepted units of measure are "b"
   * (byte), "kb" (Kilobytes), "mb" (Megabyte) and "gb" (Gigabytes; let's hope
   * this is never the case!).
   */
  size: PropTypes.string,

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

  /** Set to true if the url (href) is pointing to an external site, it will
   * include a `target="_blank"` and `rel="noopener noreferrer"` attribute in
   * the download link. For links where this property is undefined, it will
   * default to `false`, but `target` and `rel` attributes will be included if
   * the file extension is not a recogized file type. The exported `FILE_TYPES`
   * object contains a list of recognized extensions.
   */
  external: PropTypes.bool,
};

export default DownloadLink;
