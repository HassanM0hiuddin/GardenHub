const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
    ,
    description: {
        type: String,
        required: true,
        unique: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
    ,
    image: {
        type: String,
        required: true,
    },
    });

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;