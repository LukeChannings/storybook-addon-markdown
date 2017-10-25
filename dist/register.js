'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

var _MarkdownPanel = require('./MarkdownPanel');

var _MarkdownPanel2 = _interopRequireDefault(_MarkdownPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADDON_ID = 'storybook-addon-markdown';
var PANEL_ID = ADDON_ID + '/markdown-panel';

_addons2.default.register(ADDON_ID, function (api) {
  var channel = _addons2.default.getChannel();
  _addons2.default.addPanel(PANEL_ID, {
    title: 'Docs',
    render: function render() {
      return _react2.default.createElement(_MarkdownPanel2.default, { channel: channel, api: api });
    }
  });
});