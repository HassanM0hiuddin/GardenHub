// services/ResourceService.js
const Resource = require('../Models/resource.model');
const User = require('../Models/user.model');

const ResourceService = {
    async createResource(data) {
        const { title, description, link, image } = data;
        const resource = new Resource({ title, description, link, image });
        await resource.save();
        return resource;
    },
    async getResources() {
        const resources = await Resource.find();
        return resources;
    },
    async getResource(id) {
        const resource = await Resource.findById(id);
        return resource;
    },
    async updateResource(id, data) {
        const { title, description, link, image } = data;
        const resource = await Resource.findByIdAndUpdate(id, { title, description, link, image }, { new: true });
        return resource;
    },
    async deleteResource(id) {
        const resource = await Resource.findByIdAndDelete(id);
        return resource;
    },
    async saveResource(userId, resourceId) {
        const resource = await Resource.findById(resourceId);
        const user = await User.findById(userId);
        user.savedResources.push(resource);
        await user.save();
        return user;
    }
}

module.exports = ResourceService;