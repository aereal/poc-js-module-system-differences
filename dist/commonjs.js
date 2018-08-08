'use strict';

var _require = require('./user'),
    User = _require.User;

var owner = new User('yuno');

var _require2 = require('./blog'),
    Blog = _require2.Blog;

var blog = new Blog(owner);

console.log(blog);