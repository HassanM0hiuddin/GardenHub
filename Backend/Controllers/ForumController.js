// controllers/forumController.js
const ForumService = require('../Services/forum.service');

const ForumController = {
  getAllPosts: async (req, res, next) => {
    try {
      const posts = await ForumService.getAllPosts();
      res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  },

  getPostById: async (req, res, next) => {
    const { id } = req.params;
    try {
      const post = await ForumService.getPostById(id);
      res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  },

  createPost: async (req, res, next) => {
    const postDetails = req.body;
    try {
      const newPost = await ForumService.createPost(postDetails);
      res.status(201).json(newPost);
    } catch (error) {
      next(error);
    }
  },

  updatePost: async (req, res, next) => {
    const { id } = req.params;
    const postDetails = req.body;
    try {
      const updatedPost = await ForumService.updatePost(id, postDetails);
      res.status(200).json(updatedPost);
    } catch (error) {
      next(error);
    }
  },

  deletePost: async (req, res, next) => {
    const { id } = req.params;
    try {
      await ForumService.deletePost(id);
      res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
      next(error);
    }
  },

  addComment: async (req, res, next) => {
    const { id } = req.params;
    const commentDetails = req.body;
    try {
      const updatedPost = await ForumService.addComment(id, commentDetails);
      res.status(201).json(updatedPost);
    } catch (error) {
      next(error);
    }
  },

    updateComment: async (req, res, next) => {
        const { postId, commentId } = req.params;
        const commentDetails = req.body;
        try {
        const updatedPost = await ForumService.updateComment(postId, commentId, commentDetails);
        res.status(200).json(updatedPost);
        } catch (error) {
        next(error);
        }
    },

    deleteComment: async (req, res, next) => {
        const { postId, commentId } = req.params;
        try {
        const updatedPost = await ForumService.deleteComment(postId, commentId);
        res.status(200).json(updatedPost);
        } catch (error) {
        next(error);
        }
    },

    likePost: async (req, res, next) => {
        const { id } = req.params;
        try {
        const updatedPost = await ForumService.likePost(id);
        res.status(200).json(updatedPost);
        } catch (error) {
        next(error);
        }
    },

    unlikePost: async (req, res, next) => {
        const { id } = req.params;
        try {
        const updatedPost = await ForumService.unlikePost(id);
        res.status(200).json(updatedPost);
        } catch (error) {
        next(error);
        }
    },


};

module.exports = ForumController;
