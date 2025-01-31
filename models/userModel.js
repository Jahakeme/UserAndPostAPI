const mongoose = require('mongoose');

const userModel = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        },
        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post'
            }],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userModel);