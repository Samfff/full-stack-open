import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}> {text} </button>
)

const Statistics = ({good, neutral, bad}) => {
  return (
    <>
      <FeedbackStatistic feedbackType={"good"} amount={good}/>
      <FeedbackStatistic feedbackType={"neutral"} amount={neutral}/>
      <FeedbackStatistic feedbackType={"bad"} amount={bad}/>
      <AverageFeedback good={good} neutral={neutral} bad={bad}/>
      <PositiveFeedback good={good} neutral={neutral} bad={bad}/>
    </>
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
      <div>
        <pre>
          good {good} {"\n"}
          neutral {neutral} {"\n"}
          bad {bad} {"\n"}
          all {good + neutral + bad} {"\n"}
          average {(1 * good + 0 * neutral + -1 * bad) / 3} {"\n"}
          positive {100 * (good) / (good + neutral + bad )} %
        </pre>
      </div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
