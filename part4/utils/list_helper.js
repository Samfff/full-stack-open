const _ = require("lodash");

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
  dummy, totalLikes, favouriteBlog, mostBlogs, mostLikes
}
