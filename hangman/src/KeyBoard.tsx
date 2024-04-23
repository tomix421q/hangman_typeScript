import style from './Keyboard.module.css'

type Props = {
  activeLetter: string[]
  inactiveLetter: string[]
  disabled: boolean
  addGuessedLetter: (letter: string) => void
}

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

const KeyBoard = ({ activeLetter, inactiveLetter, disabled = false, addGuessedLetter }: Props) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(75px,1fr))', gap: '.5rem' }}>
      {KEYS.map((key) => {
        const isActive = activeLetter.includes(key)
        const isInactive = inactiveLetter.includes(key)
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${style.btn} ${isActive ? style.active : ''} ${isInactive ? style.inactive : ''}`}
            key={key}
            disabled={isInactive || isActive || disabled}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}
export default KeyBoard
