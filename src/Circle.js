'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _enhancer = require('./enhancer');

var _enhancer2 = _interopRequireDefault(_enhancer);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


var Circle = function (_Component) {
  _inherits(Circle, _Component);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
  }

  _createClass(Circle, [{
    key: 'getPathStyles',
    value: function getPathStyles() {
      var _props = this.props,
          percent = _props.percent,
          strokeWidth = _props.strokeWidth,
          _props$gapDegree = _props.gapDegree,
          gapDegree = _props$gapDegree === undefined ? 0 : _props$gapDegree,
          gapPosition = _props.gapPosition;

      var radius = 50 - strokeWidth / 2;
      var beginPositionX = 0;
      var beginPositionY = -radius;
      var endPositionX = 0;
      var endPositionY = -2 * radius;
      switch (gapPosition) {
        case 'left':
          beginPositionX = -radius;
          beginPositionY = 0;
          endPositionX = 2 * radius;
          endPositionY = 0;
          break;
        case 'right':
          beginPositionX = radius;
          beginPositionY = 0;
          endPositionX = -2 * radius;
          endPositionY = 0;
          break;
        case 'bottom':
          beginPositionY = radius;
          endPositionY = 2 * radius;
          break;
        default:
      }
      var pathString = 'M 50,50 m ' + beginPositionX + ',' + beginPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + endPositionX + ',' + -endPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + -endPositionX + ',' + endPositionY;
      var len = Math.PI * 2 * radius;
      var trailPathStyle = {
        strokeDasharray: len - gapDegree + 'px ' + len + 'px',
        strokeDashoffset: '-' + gapDegree / 2 + 'px',
        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
      };
      var strokePathStyle = {
        strokeDasharray: percent / 100 * (len - gapDegree) + 'px ' + len + 'px',
        strokeDashoffset: '-' + gapDegree / 2 + 'px',
        transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
      };
      return { pathString: pathString, trailPathStyle: trailPathStyle, strokePathStyle: strokePathStyle };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          strokeWidth = _props2.strokeWidth,
          trailWidth = _props2.trailWidth,
          strokeColor = _props2.strokeColor,
          percent = _props2.percent,
          trailColor = _props2.trailColor,
          strokeLinecap = _props2.strokeLinecap,
          style = _props2.style,
          className = _props2.className,
          restProps = _objectWithoutProperties(_props2, ['prefixCls', 'strokeWidth', 'trailWidth', 'strokeColor', 'percent', 'trailColor', 'strokeLinecap', 'style', 'className']);

      var _getPathStyles = this.getPathStyles(),
          pathString = _getPathStyles.pathString,
          trailPathStyle = _getPathStyles.trailPathStyle,
          strokePathStyle = _getPathStyles.strokePathStyle;

      delete restProps.percent;
      delete restProps.gapDegree;
      delete restProps.gapPosition;
      return _react2.default.createElement(
        'svg',
        _extends({
          className: prefixCls + '-circle ' + className,
          viewBox: '0 0 100 100',
          style: style
        }, restProps),
        _react2.default.createElement('path', {
          className: prefixCls + '-circle-trail',
          d: pathString,
          stroke: trailColor,
          strokeWidth: trailWidth || strokeWidth,
          fillOpacity: '0',
          style: trailPathStyle
        }),
        _react2.default.createElement('path', {
          className: prefixCls + '-circle-path',
          d: pathString,
          strokeLinecap: strokeLinecap,
          stroke: strokeColor,
          strokeWidth: this.props.percent === 0 ? 0 : strokeWidth,
          fillOpacity: '0',
          ref: function ref(path) {
            _this2.path = path;
          },
          style: strokePathStyle
        })
      );
    }
  }]);

  return Circle;
}(_react.Component);

Circle.propTypes = _extends({}, _types.propTypes, {
  gapPosition: _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right'])
});

Circle.defaultProps = _extends({}, _types.defaultProps, {
  gapPosition: 'top'
});

exports.default = (0, _enhancer2.default)(Circle);