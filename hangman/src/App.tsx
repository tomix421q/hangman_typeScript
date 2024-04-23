import { useCallback, useEffect, useState } from 'react'
import './App.css'
import words from './wordList.json'
import HangmanDrawing from './HangmanDrawing'
import HangmanWord from './HangmanWord'
import KeyBoard from './KeyBoard'

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToQuess, setWordToQuess] = useState(getWord())
  const [quessedLetters, setQuessedLetters] = useState<string[]>([])
  const incorrectLetters = quessedLetters.filter((letter) => !wordToQuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6
  const isWiner = wordToQuess.split('').every((letter) => quessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (quessedLetters.includes(letter) || isLoser || isWiner) return
      setQuessedLetters((currentLetters) => [...currentLetters, letter])
    },
    [quessedLetters, isWiner, isLoser]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [quessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== 'Enter') return

      e.preventDefault()
      setQuessedLetters([])
      setWordToQuess(getWord())
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [])

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          margin: '0 auto',
          alignItems: 'center',
        }}
        className='main'
      >
        <div style={{ fontSize: '2rem', textAlign: 'center' }}>
          {isWiner && 'Winner! - Refresh to try again'}
          {isLoser && 'You lose! - Refresh to try again'}
        </div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord reveal={isLoser} quessedLetters={quessedLetters} wordToQuess={wordToQuess} />
        <div style={{ alignSelf: 'stretch' }}>
          <KeyBoard
            disabled={isWiner || isLoser}
            activeLetter={quessedLetters.filter((letter) => wordToQuess.includes(letter))}
            inactiveLetter={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      </div>
    </>
  )
}

export default App
