import React from 'react';

/**
 * Return JSX for an accessibly hidden icon (tested in AccessibleLink)
 * @param {string} className - Fontawesome icon group & class, e.g.
 *  "fas fa-download"
 * @return {ReactElement} - icon element
 */
export const createIcon = className => (
  <i
    role="img"
    aria-hidden="true"
    className={`vads-u-padding-right--1 ${className}`}
  />
);

/**
 * *** DownloadLink utils ***
 * (tested in DownloadLink utils)
 */
/**
 * Non-optimal method to find the file name & extension. It splits off the final
 * forward slash (`/`) and processes that portion of the content.
 * @param {string} url
 * @return {string} last portion of a url; after the last forward slash
 */
export const getFileNameAndExt = url => url.split('/').pop();

// Regex to extract a file extension of a url path
// https://www.example.com/test.jpg -> jpg
// https://www.foo.bar.com/my.folder/doc.pdf?version=3.4 -> pdf
// https://www.test.com/file.txt#anchor-link -> txt
const fileExtRegex = /(?:\.([^.?#]+))?(?:[?#].*?)?$/;

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

// Regex used to replace digits & separators to extract out the file size unit
// "1.5mb" -> "mb"
const fileSizeUnitRegex = /[0-9., ]/g;

// List of known file size units
const FILE_SIZES = [
  // Decimal (SI) / Binary (IEC)
  ['B', 'Bytes', 'B', 'Bytes'],
  ['KB', 'Kilobytes', 'KiB', 'Kibibytes'],
  ['MB', 'Megabytes', 'MiB', 'Mebibytes'],
  ['GB', 'Gigabytes', 'GiB', 'Gibibytes'],
];

/**
 * Extract file size data from a mixed value of number plus size unit, e.g.
 * "1.5mb"
 * @param {string|number} size - file size, e.g. "1.5mb" or 1024 (bytes)
 * @return {ReactElement} rendered size with unit abbr & full unit in title
 */
export const renderFileSize = (size = null, si = true, decimalPlaces = 1) => {
  if (size === null) {
    return null;
  }
  const base = si ? 1000 : 1024;
  let fileSize;
  let units;
  if (typeof size === 'number') {
    // Handle passing in a numbver, e.g. `1500000`
    const unitIndex =
      size < 1 ? 0 : Math.floor(Math.log(size) / Math.log(base));
    units = FILE_SIZES[unitIndex || 0] || FILE_SIZES[0];
    fileSize =
      size < 1 ? 0 : (size / base ** unitIndex).toFixed(decimalPlaces) * 1;
  } else {
    // Handle passing in a string, e.g. `"1.5mb"`
    const fileSizeAbbr = size
      .toString()
      .replace(fileSizeUnitRegex, '')
      .toUpperCase();
    fileSize = parseFloat(size);
    units =
      FILE_SIZES.find(entry => entry[0] === fileSizeAbbr) || FILE_SIZES[0];
  }
  return (
    <>
      ({fileSize}
      <abbr title={units[si ? 1 : 3]}>{units[si ? 0 : 2]}</abbr>)
    </>
  );
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
