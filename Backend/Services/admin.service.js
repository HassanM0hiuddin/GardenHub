const Post = require('../Models/post.model');
const User = require('../Models/user.model');

const AdminService = {
// Service to get all posts
getAllPosts : async () => {
  return await Post.find();
},

// Service to create a new post
createPost : async (postDetails) => {
  const { title, content, author } = postDetails;
  const newPost = new Post({ title, content, author });
  return await newPost.save();
},

// Service to update a post
 updatePost : async (id, postDetails) => {
  const { title, content } = postDetails;
  return await Post.findByIdAndUpdate(id, { title, content }, { new: true });
},

// Service to delete a post
deletePost : async (id) => {
  return await Post.findByIdAndDelete(id);
},

// Service to get all users
getAllUsers : async () => {
  return await User.find();
},

// Service to delete a user
deleteUser : async (id) => {
  return await User.findByIdAndDelete(id);
},

}
module.exports =  AdminService