import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({action, name}) => {
  return (
    <button onClick={action}>{name}</button>
  );
}

const App = props => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState([...Array(anecdotes.length).keys()].map(x => 0))

  const randomNumber = () => (
    setSelected(Math.floor(Math.random() * anecdotes.length))
  )

  const voteAnecdote = id => () => (
    setVote(votes.map((x, idx) => idx === id ? x + 1 : x))
  )

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button action={voteAnecdote(selected)} name="vote" />
      <Button action={randomNumber} name="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[votes.reduce((acc, val, i, arr) => val > arr[acc] ? i : acc, 0)]}</p>
      <p>has {votes.reduce((acc, val) => val > acc ? val : acc, 0)} votes</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);