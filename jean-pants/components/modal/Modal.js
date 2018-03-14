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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function focusListener(selector) {
  var listener = function listener(event) {
    var modal = document.querySelector('.va-modal');
    if (!modal.contains(event.target)) {
      event.stopPropagation();
      var focusableElement = modal.querySelector(selector);
      if (focusableElement) {
        focusableElement.focus();
      }
    }
  };
  document.addEventListener('focus', listener, true);
  return listener;
}

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.handleClose = _this.handleClose.bind(_this);
    _this.state = { lastFocus: null, focusListener: null };
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.visible) {
        document.body.classList.add('modal-open');
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.visible && !this.props.visible) {
        this.setState({ lastFocus: document.activeElement, focusListener: focusListener(newProps.focusSelector) });
      } else if (!newProps.visible && this.props.visible) {
        document.removeEventListener('focus', this.state.focusListener, true);
        this.state.lastFocus.focus();
        document.body.classList.remove('modal-open');
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.visible && this.props.visible) {
        var focusableElement = document.querySelector('.va-modal').querySelector(this.props.focusSelector);
        if (focusableElement) {
          focusableElement.focus();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('focus', this.state.focusListener, true);
      document.body.classList.remove('modal-open');
    }
  }, {
    key: 'handleClose',
    value: function handleClose(e) {
      e.preventDefault();
      this.props.onClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          title = _props.title,
          visible = _props.visible;

      var modalCss = (0, _classnames2.default)('va-modal', this.props.cssClass);
      var modalTitle = title && _react2.default.createElement(
        'h3',
        { id: id + '-title', className: 'va-modal-title' },
        title
      );

      if (!visible) {
        return _react2.default.createElement('div', null);
      }

      var closeButton = void 0;
      if (!this.props.hideCloseButton) {
        closeButton = _react2.default.createElement(
          'button',
          {
            className: 'va-modal-close',
            type: 'button',
            onClick: this.handleClose },
          _react2.default.createElement('i', { className: 'fa fa-close' }),
          _react2.default.createElement(
            'span',
            { className: 'usa-sr-only' },
            'Close this modal'
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: modalCss, id: id, role: 'alertdialog', 'aria-labelledby': id + '-title' },
        _react2.default.createElement(
          'div',
          { className: 'va-modal-inner' },
          modalTitle,
          closeButton,
          _react2.default.createElement(
            'div',
            { className: 'va-modal-body' },
            this.props.contents || this.props.children
          )
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.propTypes = {
  /**
   * If the modal is visible or not
   */
  visible: _propTypes2.default.bool.isRequired,
  /**
   * Handler for when the modal is closed
   */
  onClose: _propTypes2.default.func.isRequired,
  /**
   * Contents of modal when displayed. You can also pass the contents as children, which is preferred
   */
  contents: _propTypes2.default.node,
  /**
   * CSS class to set on the modal
   */
  cssClass: _propTypes2.default.string,
  /**
   * Id of the modal, used for aria attributes
   */
  id: _propTypes2.default.string,
  /**
   * Title/header text for the modal
   */
  title: _propTypes2.default.string,
  /**
   * Hide the close button that's normally in the top right
   */
  hideCloseButton: _propTypes2.default.bool,
  /**
   * Selector to use to find elements to focus on when the
   * modal is opened
   */
  focusSelector: _propTypes2.default.string
};

Modal.defaultProps = {
  focusSelector: 'button, input, select, a'
};

exports.default = Modal;