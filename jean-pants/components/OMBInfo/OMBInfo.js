'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('../modal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var modalContents = function modalContents(minutes) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'Privacy Act Statement'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'strong',
        null,
        'Respondent Burden:'
      ),
      ' We need this information to determine your eligibility for education benefits (38 U.S.C. 3471). Title 38, United States Code, allows us to ask for this information. We estimate that you will need an average of ',
      minutes,
      ' minutes to review the instructions, find the information, and complete this form. The VA cannot conduct or sponsor a collection of information unless a valid OMB (Office of Management and Budget) control number is displayed. You are not required to respond to a collection of information if this number is not displayed. Valid OMB control numbers can be located on the OMB Internet Page at www.reginfo.gov/public/do/PRAMain. If desired, you can call ',
      _react2.default.createElement(
        'a',
        { href: '+18008271000' },
        '1-800-827-1000'
      ),
      ' to get information on where to send comments or suggestions about this form.'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'strong',
        null,
        'Privacy Act Notice:'
      ),
      ' The VA will not disclose information collected on this form to any source other than what has been authorized under the Privacy Act of 1974 or title 38, Code of Federal Regulations, section 1.576 for routine uses (e.g., the VA sends educational forms or letters with a veteran\u2019s identifying information to the Veteran\u2019s school or training establishment to (1) assist the veteran in the completion of claims forms or (2) for the VA to obtain further information as may be necessary from the school for VA to properly process the Veteran\u2019s education claim or to monitor his or her progress during training) as identified in the VA system of records, 58VA21/22/28, Compensation, Pension, Education, and Vocational Rehabilitation and Employment Records - VA, and published in the Federal Register. Your obligation to respond is required to obtain or retain education benefits. Giving us your SSN account information is voluntary. Refusal to provide your SSN by itself will not result in the denial of benefits. The VA will not deny an individual benefits for refusing to provide his or her SSN unless the disclosure of the SSN is required by a Federal Statute of law enacted before January 1, 1975, and still in effect. The requested information is considered relevant and necessary to determine the maximum benefits under the law. While you do not have to respond, VA cannot process your claim for education assistance unless the information is furnished as required by existing law (38 U.S.C. 3471). The responses you submit are considered confidential (38 U.S.C. 5701). Any information provided by applicants, recipients, and others may be subject to verification through computer matching programs with other agencies.'
    )
  );
};

var OMBInfo = function (_React$Component) {
  _inherits(OMBInfo, _React$Component);

  function OMBInfo(props) {
    _classCallCheck(this, OMBInfo);

    var _this = _possibleConstructorReturn(this, (OMBInfo.__proto__ || Object.getPrototypeOf(OMBInfo)).call(this, props));

    _this.openModal = function () {
      _this.setState({ modalOpen: true });
    };

    _this.closeModal = function () {
      _this.setState({ modalOpen: false });
    };

    _this.state = { modalOpen: false };
    return _this;
  }

  _createClass(OMBInfo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          resBurden = _props.resBurden,
          ombNumber = _props.ombNumber,
          expDate = _props.expDate;


      return _react2.default.createElement(
        'div',
        { className: 'omb-info' },
        _react2.default.createElement(
          'div',
          null,
          'Respondent burden: ',
          _react2.default.createElement(
            'strong',
            null,
            resBurden,
            ' minutes'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          'OMB Control #: ',
          _react2.default.createElement(
            'strong',
            null,
            ombNumber
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          'Expiration date: ',
          _react2.default.createElement(
            'strong',
            null,
            expDate
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { className: 'va-button-link', onClick: this.openModal },
            'Privacy Act Statement'
          )
        ),
        _react2.default.createElement(_Modal2.default, {
          cssClass: 'va-modal-large',
          contents: modalContents(resBurden),
          id: 'omb-modal',
          visible: this.state.modalOpen,
          onClose: this.closeModal })
      );
    }
  }]);

  return OMBInfo;
}(_react2.default.Component);

OMBInfo.propTypes = {
  // respondent burden, length of time usually in minutes
  resBurden: _propTypes2.default.number,

  // OMB control number / form number
  ombNumber: _propTypes2.default.string,

  // form expiration date
  expDate: _propTypes2.default.string
};

exports.default = OMBInfo;