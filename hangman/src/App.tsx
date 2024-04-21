import { useState } from 'react'
import './App.css'
import words from './wordList.json'
import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import KeyBoard from './KeyBoard'

function App() {
  const [wordToQuess, setWordToQuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [quessedLetters, setQuessedLetters] = useState<string[]>([])

  return (
    <>
      <div
        style={{
          maxWidth: '800px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          margin: '0 auto',
          alignItems: 'center',
          width: '800px',
        }}
      >
        <div style={{ fontSize: '2rem', textAlign: 'center' }}>Lose Win</div>
        <HangmanDrawing />
        <HangmanWord />
        <div style={{ alignSelf: 'stretch' }}>
          <KeyBoard />
        </div>
      </div>
    </>
  )
}

export default App
