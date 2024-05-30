// controllers/ResourceController.js
const ResourceService = require('../Services/resource.service');

const ResourceController = {
    async createResource(req, res, next) {
        try {
            const resource = await ResourceService.createResource(req.body);
            res.status(201).json({ message: "Resource created successfully", resource });
        } catch (error) {
            next(error);
        }
    },
    async getResources(req, res, next) {
        try {
            const resources = await ResourceService.getResources();
            res.json(resources);
        } catch (error) {
            next(error);
        }
    },
    async getResource(req, res, next) {
        try {
            const resource = await ResourceService.getResource(req.params.id);
            if (!resource) {
                return next({ status: 404, message: "Resource not found" });
            }
            res.json(resource);
        } catch (error) {
            next(error);
        }
    },
    async updateResource(req, res, next) {
        try {
            const resource = await ResourceService.updateResource(req.params.id, req.body);
            if (!resource) {
                return next({ status: 404, message: "Resource not found" });
            }
            res.json(resource);
        } catch (error) {
            next(error);
        }
    },
    async deleteResource(req, res, next) {
        try {
            const resource = await ResourceService.deleteResource(req.params.id);
            if (!resource) {
                return next({ status: 404, message: "Resource not found" });
            }
            res.json({ message: "Resource deleted successfully" });
        } catch (error) {
            next(error);
        }
    },
    async saveResource(req, res, next) {
        try {
            const user = await ResourceService.saveResource(req.user._id, req.params.id);
            res.json({ message: "Resource saved successfully", user });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ResourceController;