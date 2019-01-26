import React from 'react';
import ReactDOM from 'react-dom';

const Part = props => {
  return(
    <p>{props.part.name} {props.part.exercises}</p>
  )
}

const Content = props => {
  return (
    <div>
      {props.course.parts.map((x, i) => <Part key={i} part={x} />)}
    </div>
  );
}

const Header = props => (
  <h1>{props.course.name}</h1>
)

const Total = props => (
  <p>Yhteensä {props.course.parts.map(x => x.exercises).reduce((x, y) => x += y, 0)} tehtävää</p>
)

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      },
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));