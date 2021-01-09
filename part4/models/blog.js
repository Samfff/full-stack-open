const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false},
  url: { type: String, required: true },
  likes: { type: Number, default: 0 }
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject.id.toString()
    delete returnedObject.id
    delete returnedObject.v
  }
})

module.exports = mongoose.model('Blog', blogSchema)
