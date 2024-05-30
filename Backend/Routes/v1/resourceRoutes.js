// routes/resourceRoutes.js
const express = require('express');
const ResourceController = require('../../Controllers/ResourceController');
const passport = require('passport');

const resourceRouter = express.Router();

resourceRouter.post('/', passport.authenticate('jwt',{session:false}), ResourceController.createResource);
resourceRouter.get('/', ResourceController.getResources);
resourceRouter.get('/:id', ResourceController.getResource);
resourceRouter.put('/:id', passport.authenticate('jwt',{session:false}), ResourceController.updateResource);
resourceRouter.delete('/:id', passport.authenticate('jwt',{session:false}), ResourceController.deleteResource);
resourceRouter.post('/:id/save', passport.authenticate('jwt',{session:false}), ResourceController.saveResource);

module.exports = resourceRouter;