import React from 'react'

import './index.css'

export const QuestionCard = ({ title, quest, answers, id, length, setCard, className, setCount }) => {
  const [idChecked, setIdChecked] = React.useState()
  const [onShow, setShow] = React.useState(false)
  const [answer, setAnswer] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShow(true)
    setAnswer(answers === quest[idChecked])
    setCount(prevState => {
      if(answers === quest[idChecked]) {
        return prevState + 1
      } return prevState
    })
  }

  const handleClickChecked = (e) => {
    setIdChecked(+e.target.value)
  }

  const handleClickNextQuest = () => {
    setCard((prevState) => (prevState + 1))
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <p>Вопрос {id+1} из {length}</p>
        <p>{title}</p>
        <div>
          {quest.map((item, id) => (
            <div className="radio-answer">
              <input type='radio' value={id} disabled={onShow} onClick={handleClickChecked} checked={idChecked === id} />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <button type='submit' disabled={onShow}>
          Ответить
        </button>
      </form>
      {onShow && (
        <>
          <p>{answer ? 'Верно' : 'Не верно'}</p>
          <button onClick={handleClickNextQuest}>
              Следующий вопрос
            </button>
        </>
        )
      }
    </div>
  )
}