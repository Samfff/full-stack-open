import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}> {text} </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(1)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(-1)

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
          average {(good + neutral + bad) / 3} {"\n"}
          positive {100 * (good) / (good + neutral + bad )} %
        </pre>
      </div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
