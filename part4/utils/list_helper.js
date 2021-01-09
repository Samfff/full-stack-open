const _ = require("lodash");

const listWithOneBlog = [
  {
    id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
  }
]

const blogs = [
  {
    _id: '1',
    title: 'Kovakoodaaminen on elämä',
    author: 'Samuel Sihvonen',
    url: 'github.com',
    likes: 17,
    __v: 0
  },
  {
    id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'google.com',
    likes: 14,
  },
  {
    _id: '4a7a43',
    title: 'Kovakoodaaminen on edellleen kivaa',
    author: 'Samuel Sihvonen',
    url: 'github.com',
    likes: 7,
    __v: 0
  },
  {
    _id: '2a244ba',
    title: 'This is interesting and important',
    author: 'Full Stack Open',
    url: 'fullstackopen.com',
    likes: 15,
    __v: 0
  }
]

const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((likes, blog) => (likes += blog.likes), 0)
}

const favouriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return undefined
  }
  return blogs.reduce((favourite, blog) =>
    (blog.likes > favourite.likes) ? blog : favourite)
}

const mostBlogs = (blogs) => {

  const authorCount = _(blogs).countBy('author')

  const maxAuthor = authorCount
    .toPairs().maxBy(_.last)[0]

  return {
    author: maxAuthor,
    blogs: authorCount.value()[maxAuthor]
  }
}

const mostLikes = (blogs) => {
  const groupedAuthors = _(blogs).groupBy('author')
  const sums = groupedAuthors.map((blogs, author) => ({
      'author': author,
      'likes': _.sumBy(blogs, 'likes')
    }))
    .maxBy('likes')

return sums

}



module.exports = {
  dummy, totalLikes, favouriteBlog, mostBlogs, mostLikes, blogs
}
