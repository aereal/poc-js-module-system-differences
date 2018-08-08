import User from './user';
import Blog from './blog';

const owner = new User('yuno');
const blog = new Blog(owner);
console.log(blog);
