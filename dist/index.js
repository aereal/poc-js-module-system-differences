'use strict';

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _blog = require('./blog');

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var owner = new _user2.default('yuno');

var blog = new _blog2.default(owner);

console.log(blog);