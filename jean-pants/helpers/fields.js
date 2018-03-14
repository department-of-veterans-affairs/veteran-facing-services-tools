'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeField = makeField;
exports.dirtyAllFields = dirtyAllFields;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Represents an input field value.
 *
 * Input fields need to have a `dirty` state that represents whether or not a user has touched it.
 * Without this state, it is extremely hard (impossible?) to write UI with required fields where
 * the initial empty state does not get marked as a distracting error.
 */
function makeField(value, optionalDirty) {
  var dirty = optionalDirty === undefined ? false : optionalDirty;
  return { value: value, dirty: dirty };
}

/**
 * Walks through an object hierarchy of fields and marks everything dirty.
 */
function dirtyAllFields(field) {
  if (_lodash2.default.keys(field).length === 2 && _lodash2.default.has(field, 'value') && _lodash2.default.has(field, 'dirty')) {
    return makeField(field.value, true);
  } else if (_lodash2.default.isPlainObject(field)) {
    return _lodash2.default.mapValues(field, function (value, _k) {
      return dirtyAllFields(value);
    });
  } else if (_lodash2.default.isArray(field)) {
    return field.map(dirtyAllFields);
  }

  return field;
}