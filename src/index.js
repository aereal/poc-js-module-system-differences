import User from './user';
const owner = new User('yuno');

import Blog from './blog';
const blog = new Blog(owner);

console.log(blog);
