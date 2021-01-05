import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  const random = (list) => (
    Math.floor(Math.random() * list.length)
  )

  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  const [mostVotesAnecdote, setTop] = useState(selected)

  const nextAnecdote = () => {
    setSelected(random(props.anecdotes))
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] = copy[selected] + 1
    setVotes(copy)
    if (votes[selected] > votes[mostVotesAnecdote]) {
      setTop(selected)
    }
  }

  return (
    <div>
      <h1> Anecdote of the day </h1>
      <div>
        <p>{props.anecdotes[selected]} </p>
        <p> has {votes[selected]} votes </p>
    </div>
    <button onClick={nextAnecdote}>next anecdote</button>
    <button onClick={vote}>vote</button>
    <h1>Anecdote with most votes</h1>
    <p> {props.anecdotes[mostVotesAnecdote]} <br/> has {votes[mostVotesAnecdote]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
