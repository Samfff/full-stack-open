require('express-async-errors')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('../utils/list_helper')
const Blog = require('../models/blog')

const api = supertest(app)

beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(helper.blogs)
})

test('Test GET request', async() => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('Unique field ID exists', async() => {
  const response = await api.get('/api/blogs')
  expect(response.body[0].id).toBeDefined()
})

test('POST request works', async() => {
  const newBlog = {
    title: 'I hate this assignment',
    author: 'Full Stack Lyfe',
    url: 'google.com',
    likes: 0
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(helper.blogs.length + 1)
  expect(response.body.map(r => r.title)).toContain('I hate this assignment')
})

test('No set likes, so 0 likes', async() => {
  const newBlog = {
    title: 'This will not have likes',
    author: 'Someone crazy',
    url: 'google.com',
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(helper.blogs.length + 1)
  expect(response.body.find(b => b.title === 'This will not have likes').likes).toBe(0)
})

test('Missing a title, return 400', async () => {
   const blogWithoutTitle = {
     author: 'Samuel Sihvonen',
     url: 'google.com',
     likes: 1241242
   }

   await api
     .post('/api/blogs')
     .send(blogWithoutTitle)
     .expect(400)
 })

 test('Missing URL, return 400', async () => {
   const blogWithoutUrl = {
     title: 'i',
     author: 'Samuel Sihvonen',
     likes: 1
   }

   await api
     .post('/api/blogs')
     .send(blogWithoutUrl)
     .expect(400)
 })

afterAll(() => {mongoose.connection.close()})
