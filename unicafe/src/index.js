import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({handler, text}) => <button onClick={handler}>{text}</button> 

const Statistic = ({name, value}) => 
<tr>
  <td>{name}</td>
  <td>{value}</td>
</tr>

const Statistics = ({good, neutral, bad, sum, count}) => {
  return count > 0 ? (
    <table>
    <Statistic name="good" value={good} />
    <Statistic name="neutral" value={neutral} />
    <Statistic name="bad" value={bad} />
    <Statistic name="all" value={count} />
    <Statistic name="average" value={count>0 ? sum/count : 0} />
    <Statistic name="positive" value={(count>0 ? good/count : 0) * 100 + " %"} />
    </table>
  ) :
  (<div>No feedback given</div>)
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [sum, setSum] = useState(0)
  const [count, setCount] = useState(0)

  const updateScore = (d) => {
    setSum(sum + d)
    setCount(count + 1)
    switch (d) {
      case 1:
        return setGood(good + 1)
        break;
      case 0:
        return setNeutral(neutral + 1)
        break;
      case -1:
        return setBad(bad + 1)
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button handler={() => updateScore(1)} text="good" />
      <Button handler={() => updateScore(0)} text="neutral" />
      <Button handler={() => updateScore(-1)} text="bad" />

      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum} count={count}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)