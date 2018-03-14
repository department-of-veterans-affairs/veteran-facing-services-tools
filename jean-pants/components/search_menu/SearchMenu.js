'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _IconSearch = require('../svgicons/IconSearch');

var _IconSearch2 = _interopRequireDefault(_IconSearch);

var _DropDown = require('../dropdown/DropDown');

var _DropDown2 = _interopRequireDefault(_DropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchMenu = function (_React$Component) {
  _inherits(SearchMenu, _React$Component);

  function SearchMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchMenu.__proto__ || Object.getPrototypeOf(SearchMenu)).call.apply(_ref, [this].concat(args))), _this), _this.onBlur = function (e) {
      if (!_this.state.closed) {
        var currentTarget = e.currentTarget;

        setTimeout(function () {
          if (!currentTarget.contains(document.activeElement)) {
            _this.toggleSearchForm();
          }
        });
      }
    }, _this.toggleSearchForm = function () {
      _this.props.clickHandler();
    }, _this.makeForm = function () {
      return _react2.default.createElement(
        'form',
        {
          acceptCharset: 'UTF-8',
          action: 'https://search.vets.gov/search',
          id: 'search',
          method: 'get' },
        _react2.default.createElement(
          'div',
          { className: 'csp-inline-patch-header' },
          _react2.default.createElement('input', { name: 'utf8', type: 'hidden', value: '\u2713' })
        ),
        _react2.default.createElement('input', { id: 'affiliate', name: 'affiliate', type: 'hidden', value: 'vets.gov_search' }),
        _react2.default.createElement(
          'label',
          { // eslint-disable-line jsx-a11y/label-has-for
            htmlFor: 'query',
            className: 'usa-sr-only' },
          'Search:'
        ),
        _react2.default.createElement(
          'div',
          { className: 'va-flex' },
          _react2.default.createElement('input', { autoComplete: 'off', ref: 'searchField', className: 'usagov-search-autocomplete', id: 'query', name: 'query', type: 'text' }),
          _react2.default.createElement(
            'button',
            { type: 'submit' },
            _react2.default.createElement(_IconSearch2.default, { color: '#fff' }),
            _react2.default.createElement(
              'span',
              { className: 'usa-sr-only' },
              'Search'
            )
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchMenu, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.refs.searchField.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var buttonClasses = (0, _classnames2.default)(this.props.cssClass, 'va-btn-withicon', 'va-dropdown-trigger');

      var icon = _react2.default.createElement(_IconSearch2.default, { color: '#fff' });

      return _react2.default.createElement(_DropDown2.default, {
        buttonText: 'Search',
        clickHandler: this.props.clickHandler,
        cssClass: buttonClasses,
        contents: this.makeForm(),
        id: 'searchmenu',
        icon: icon,
        isOpen: this.props.isOpen });
    }
  }]);

  return SearchMenu;
}(_react2.default.Component);

SearchMenu.propTypes = {
  /**
   * CSS class for the search menu
   */
  cssClass: _propTypes2.default.string,
  /**
   * If the search menu is open or not
   */
  isOpen: _propTypes2.default.bool.isRequired,
  /**
   * Handler for when the menu is clicked
   */
  clickHandler: _propTypes2.default.func
};

exports.default = SearchMenu;