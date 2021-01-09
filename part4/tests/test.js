const listHelper = require('../utils/list_helper')

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

const empty_blogs = []

const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
]


const blogWithMostLikes = {
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    likes: 12
  }


test('dummy returns one', () => {
  expect(listHelper.dummy(blogs)).toBe(1)
})

describe ('total likes', () => {

  test('of empty list is zero', () => {
    expect(listHelper.totalLikes(empty_blogs)).toBe(0)
  })

  test('when list has only one blog equals the likes of that', () => {
    expect(listHelper.totalLikes(listWithOneBlog)).toBe(5)
  })

  test('of list with multiple blogs is calculated correctly', () => {
      expect(listHelper.totalLikes(blogs)).toBe(17+14+15+7)
  })
})

describe ('favorite blog', () => {

  test ('of empty list is undefined', () => {
    expect(listHelper.favouriteBlog([])).toBeUndefined()
  })

  test ('of one blog is that blog', () => {
    expect(listHelper.favouriteBlog(listWithOneBlog)).toEqual(listWithOneBlog[0])
  })

  test ('of multiple blogs', () => {
    expect(listHelper.favouriteBlog(blogs)).toEqual(blogs[0])
  })
})

describe ('most blogs', () => {
  test ('most blogs test', () => {
    expect(listHelper.mostBlogs(blogs)).toEqual(
      {
        author: 'Samuel Sihvonen',
        blogs: 2
      }
    )
  })
})

describe('most likes', () => {
  test ('most likes by author', () => {
    expect(listHelper.mostLikes(blogs)).toEqual(
      {
        author: 'Samuel Sihvonen',
        likes: 24
      }
    )
  })
})
