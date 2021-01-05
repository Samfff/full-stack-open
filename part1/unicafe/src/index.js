import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}> {text} </button>
)

const StatisticsLine = ({text, value}) => (
  <p>{text} {value}</p>
)

const Average = ({good, neutral, bad}) => {
  const n = good + neutral + bad
  const average = ( (good * 1) + (neutral * 0) + (bad * -1) ) / n
  return (
    <p>average {average}</p>
  )
}

const Positive = ({good, neutral, bad}) => {
  const n = good + neutral + bad
  const positivePercent = (good / n)
  return (<p>positive {100 * positivePercent} %</p>)
}

const Statistics = ({good, neutral, bad}) => {
  const n = good + neutral + bad

  if (n === 0) { return <p> No feedback given </p> }

  return (
    <div>
      <StatisticsLine text="good" value={good}/>
      <StatisticsLine text="neutral" value={neutral}/>
      <StatisticsLine text="bad" value={bad}/>
      <StatisticsLine text="all" value={good + neutral + bad}/>
      <StatisticsLine value={
        <Average good={good} neutral={neutral} bad={bad}/>
      }/>
      <StatisticsLine value={
        <Positive good={good} neutral={neutral} bad={bad}/>
      }/>
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
      <h1>give feedback</h1>
      <Button text={"good"} handleClick={() => setGood(good+1)}/>
      <Button text={"neutral"} handleClick={() => setNeutral(neutral+1)}/>
      <Button text={"bad"} handleClick={() => setBad(bad+1)}/>
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
