const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const express = require('express')
require('express-async-errors')

blogsRouter.get('/', (req, res) => {
  Blog
    .find({})
    .then(blogs => {
      res.json(blogs
        .map(blog => blog.toJSON()))
    })
})

blogsRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

blogsRouter.post('/', (req, res) => {
  const blog = new Blog(req.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result.toJSON)})
      .catch(err => next(err))
})

module.exports = blogsRouter
