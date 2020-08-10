import React from 'react';

/**
 * Return jsx for an accessibly hidden icon
 * @param {string} className - Fontawesome icon group & class, e.g.
 *  "fas fa-download"
 * @return {JSX} - icon element
 */
export const buildIcon = className => (
  <i
    role="img"
    aria-hidden="true"
    className={`vads-u-padding-right--1 ${className}`}
  />
);

/**
 * Replace template values; If any JSX is used by the template, ensure that a
 *  `key` is included, or React will show a warning
 * @param {string} template (required) - Starting string template
 * @param {...*} var_args - values that match the template placeholders
 * @return {array} to preserve any JSX passed to the function
 * @example
 *  createContentFromTemplate({
 *    template: 'I want a {type} {color} {vehicle}',
 *    type: '4-wheel drive',
 *    color: <strong key="color">blue</strong>,
 *    vehicle: 'truck'
 *  })
 *  //=> ['I', 'want', 'a', '4-wheel', 'drive', <strong key="color">blue</strong>, 'truck']
 */
const regexPlaceholder = /{.+?}/g;
export const createContentFromTemplate = props => {
  const result = [];
  let index = 0;
  let match = regexPlaceholder.exec(props.template);
  while (match !== null) {
    result.push(props.template.substring(index, match.index));
    result.push(props[match[0].substring(1, match[0].length - 1)] || match[0]);
    index = match.index + match[0].length;
    regexPlaceholder.lastIndex = index;
    match = regexPlaceholder.exec(props.template);
  }
  regexPlaceholder.lastIndex = 0;
  if (index < props.template.length - 1) {
    result.push(props.template.substring(index, props.template.length));
  }
  return result;
};
