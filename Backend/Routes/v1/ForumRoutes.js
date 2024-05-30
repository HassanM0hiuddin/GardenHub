// routes/forumRoutes.js
const express = require('express');
const ForumRouter = express.Router();
const ForumController = require('../../Controllers/ForumController');

ForumRouter.get('/posts', ForumController.getAllPosts);
ForumRouter.get('/posts/:id', ForumController.getPostById);
ForumRouter.post('/posts', ForumController.createPost);
ForumRouter.put('/posts/:id', ForumController.updatePost);
ForumRouter.delete('/posts/:id', ForumController.deletePost);
ForumRouter.post('/posts/:id/comments', ForumController.addComment);
ForumRouter.put('/posts/:id/comments/:commentId', ForumController.updateComment);
ForumRouter.delete('/posts/:id/comments/:commentId', ForumController.deleteComment);
ForumRouter.put('/posts/:id/like', ForumController.likePost);
ForumRouter.put('/posts/:id/unlike', ForumController.unlikePost);


module.exports = ForumRouter;
