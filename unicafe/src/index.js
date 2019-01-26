import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad > 0) {
    const total = good + neutral + bad;
    const average = (good - bad) / total;
    const positivePercetage = (good / total) * 100;
    return (
      <div>
        <h1>statistiikka</h1>
        <table>
          <tbody>
            <tr>
              <td>hyvä</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>neutraali</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>huono</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>yhteensä</td>
              <td>{good + neutral + bad}</td>
            </tr>
            <tr>
              <td>keskiarvo</td>
              <td>{average}</td>
            </tr>
            <tr>
              <td>positiivisia</td>
              <td>{positivePercetage}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistiikka</h1>
        <p>Ei yhtään palautetta annettu</p>
      </div>
    )
  }
}

const Button = ({action, name}) => {
  return (
    <button onClick={action}>{name}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (action, value) => () => action(value + 1);

  return (
    <div>
      <h1>anna palautetta</h1>
      <Button action={handleClick(setGood, good)} name='hyvä' />
      <Button action={handleClick(setNeutral, neutral)} name='neturaali' />
      <Button action={handleClick(setBad, bad)} name='huono' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
);