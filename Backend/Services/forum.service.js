// services/forumService.js
const Post = require('../Models/post.model');
const Comment = require('../Models/comment.model');

const ForumService = {
  getAllPosts: async () => {
    return await Post.find().populate('comments');
  },

  getPostById: async (id) => {
    return await Post.findById(id).populate('comments');
  },

  createPost: async (postDetails) => {
    const { title, content, author } = postDetails;
    const newPost = new Post({ title, content, author });
    return await newPost.save();
  },

  updatePost: async (id, postDetails) => {
    const { title, content } = postDetails;
    return await Post.findByIdAndUpdate(id, { title, content }, { new: true });
  },

  deletePost: async (id) => {
    return await Post.findByIdAndDelete(id);
  },

  addComment: async (postId, commentDetails) => {
    const { author, content } = commentDetails;
    const newComment = new Comment({ author, content });
    await newComment.save();
    
    const post = await Post.findById(postId);
    post.comments.push(newComment);
    return await post.save();
  },

  updateComment: async (postId, commentId, commentDetails) => {
    const { content } = commentDetails;
    const post = await Post.findById(postId);
    const comment = post.comments.id(commentId);
    comment.content = content;
    return await post.save();
  },

    deleteComment: async (postId, commentId) => {
        const post = await Post.findById(postId);
        post.comments.id(commentId).remove();
        return await post.save();
    },

    likePost: async (postId) => {
        const post = await Post.findById(postId);
        post.likes += 1;
        return await post.save();
    },

    unlikePost: async (postId) => {
        const post = await Post.findById(postId);
        post.likes -= 1;
        return await post.save();
    },
};

module.exports = ForumService;
