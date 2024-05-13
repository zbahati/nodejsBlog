const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    
}, {
    timestamps: true
})

const PostData = mongoose.model("Post", PostSchema);

module.exports= PostData;