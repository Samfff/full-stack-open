import React from 'react'
import ReactDOM from 'react-dom'

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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1> Web Development Curriculum </h1>
      <Course course={courses[0]}/>
      <Course course={courses[1]}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
