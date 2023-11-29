import React from 'react'
import quizlogo from '../assets/quiz-logo.png'
function Header() {
  return (
    <header>
        <img src={quizlogo}  alt='Quiz Logo'/>
        <h1>React Quiz</h1>
    </header>
  )
}

export default Header