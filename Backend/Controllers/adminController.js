const AdminService = require('../Services/admin.service');

const AdminController = {
    getAdminDashboard: async (req, res, next) => {
        try {
            // Implement logic to get admin dashboard data
        } catch (error) {
            next(error);
        }
    },

    getAllPosts: async (req, res, next) => {
        try {
            const posts = await AdminService.getAllPosts();
            res.status(200).json(posts);
        } catch (error) {
            next(error);
        }
    },

    deletePost: async (req, res, next) => {
        const postId = req.params.id;
        try {
            await AdminService.deletePost(postId);
            res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
            next(error);
        }
    },

    updatePost: async (req, res, next) => {
        const postId = req.params.id;
        const { title, content } = req.body;
        try {
            const updatedPost = await AdminService.updatePost(postId, { title, content });
            res.status(200).json(updatedPost);
        } catch (error) {
            next(error);
        }
    },

    getAllUsers: async (req, res, next) => {
        try {
            const users = await AdminService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    },

    deleteUser: async (req, res, next) => {
        const userId = req.params.id;
        try {
            await AdminService.deleteUser(userId);
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AdminController;
