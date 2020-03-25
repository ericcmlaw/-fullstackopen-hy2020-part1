import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Anecdote = ({caption, text, votes}) => 
  <div>
      <h1>{caption}</h1>
      {text}
      <br/>
      has {votes} votes
  </div>

const Button = ({action, label}) => {
  return <button onClick={action}>{label}</button>
}

const App = (props) => {
  const [selected, setSelected] = useState(getRandomInt(anecdotes.length))
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  console.log(points)
  const voteAction = () => {
    const copy = [...points]
    // increment the value in position 2 by one
    copy[selected] += 1 
    return setPoints(copy)
  }

  const nextAction = () => {
    return setSelected(getRandomInt(anecdotes.length))
  }

  let maxIndexOf = points.indexOf(Math.max(...points))

  return (
    <div>
      <Anecdote caption="Anecdote of the day" text={props.anecdotes[selected]} votes={points[selected]} />
      <Button action={voteAction} label="vote"/>
      <Button action={nextAction} label="next anecdote"/>
      <Anecdote caption="Anecdote with most votes" text={props.anecdotes[maxIndexOf]} votes={points[maxIndexOf]} />
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