import React from 'react';

import { QuestionCard } from './components/QuestionCard/QuestionCard';
import data from './data'

import './App.css';

function App() {
  const [card, setCard] = React.useState(0)
  const [count, setCount] = React.useState(0)

  return (
    <div >
      <p>Количество правильных ответов: {count}</p>
      {
        data.map((item, id) => (
          <QuestionCard
            className={id === card ? 'show-card' : 'hide-card'}
            id={id}
            length={data.length}
            setCard={setCard}
            setCount={setCount}
            {...item}
          />
        ))
      }
    </div>
  );
}

export default App;
