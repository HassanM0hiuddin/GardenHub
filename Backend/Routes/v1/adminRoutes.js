
const express = require('express');
const AdminRouter = express.Router();
const AdminController = require('../../Controllers/adminController')
const passport = require('passport')

// Admin routes
AdminRouter.get('/dashboard', passport.authenticate('jwt',{session:false}), AdminController.getAdminDashboard);
AdminRouter.get('/posts', passport.authenticate('jwt',{session:false}), AdminController.getAllPosts);
AdminRouter.delete('/posts/:id', passport.authenticate('jwt',{session:false}), AdminController.deletePost);
AdminRouter.put('/posts/:id', passport.authenticate('jwt',{session:false}), AdminController.updatePost);
AdminRouter.get('/users', passport.authenticate('jwt',{session:false}), AdminController.getAllUsers);
AdminRouter.delete('/users/:id', passport.authenticate('jwt',{session:false}), AdminController.deleteUser);

module.exports = AdminRouter;
