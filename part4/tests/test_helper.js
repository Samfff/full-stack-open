const listWithNoBlogs = []

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
    title: 'Kovakoodaaminen on elämä',
    author: 'Samuel Sihvonen',
    url: 'github.com',
    likes: 17,
  },
  {
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'google.com',
    likes: 14,
  },
  {
    title: 'Kovakoodaaminen on edellleen kivaa',
    author: 'Samuel Sihvonen',
    url: 'github.com',
    likes: 7,
  },
  {
    title: 'This is interesting and important',
    author: 'Full Stack Open',
    url: 'fullstackopen.com',
    likes: 15,
  }
]

const goodBlog = {
  title: 'This course is sometimes difficult',
  author: 'Sam Sihvonen',
  url: 'github.com',
  likes: 10
}

module.exports = {
  listWithNoBlogs,
  listWithOneBlog,
  blogs,
  goodBlog,
  blogsInDb
};
