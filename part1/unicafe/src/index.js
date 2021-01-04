import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}> {text} </button>
)

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
        </pre>
      </div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
