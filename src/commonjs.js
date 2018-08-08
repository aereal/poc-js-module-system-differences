const { User } = require('./user');
const owner = new User('yuno');

const { Blog } = require('./blog');
const blog = new Blog(owner);

console.log(blog);
