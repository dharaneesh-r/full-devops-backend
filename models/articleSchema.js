const mongoose = require('mongoose');


const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    }
})

const Article = mongoose.model("Article Details", articleSchema)

module.exports = Article;