import React from 'react'

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = ({course}) => {
  return (
    <div>
      <h2>{course.name}</h2>
    </div>
  )
}

const Part = ({part, exercises}) => {
  return (
      <p>
        {part} {exercises}
      </p>
  )
}

const Total = ({course}) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <h3> Total of {total} exercises </h3>
  )
}

const Content = ({course}) => {
  return (
    <div>
      {course.parts.map(part =>
        <Part part={part.name} exercises={part.exercises} />)}
    </div>
  )
}

export default Course
