import { useState } from 'react'


const Button = (props) => {

}

const StatisticLine = (props) => {
  
}

const Stats = (props) => {
  console.log(props);
  
  const all = props.good+props.neutral+props.bad
  const average = (props.good-props.bad)/all

  if (all == 0) {
    return <div>
      <h2>statistics</h2>
      No feedback given
    </div>
  }
  return (
      <div>
      <h2>statistics</h2>
      good {props.good} <br />
      neutral {props.neutral} <br />
      bad {props.bad} <br />
      all {all} <br />
      average {average} <br />
      positive {props.good / all} <br />
      
      </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>    
          good      
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>    
          neutral      
      </button>
      <button onClick={() => setBad(bad + 1)}>    
          bad      
      </button>

      <Stats good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App