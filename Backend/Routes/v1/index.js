const express = require('express');
const authRoutes = require('./authRoutes');
const resourceRoutes = require('./resourceRoutes');
const forumRoutes = require('./ForumRoutes');
const adminRoutes = require("./adminRoutes")


const router = express.Router();

router.use('/auth', authRoutes);
router.use('/resource', resourceRoutes);
router.use('/forum', forumRoutes);
router.use("/admin",adminRoutes);



module.exports = router;

