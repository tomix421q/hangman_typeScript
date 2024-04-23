type Props = {
  quessedLetters: string[]
  wordToQuess: string
  reveal?: boolean
}
const HangmanWord = ({ quessedLetters, wordToQuess, reveal = false }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {wordToQuess.split('').map((letter, index) => (
        <span style={{ borderBottom: '.1em solid black' }} key={index}>
          <span
            style={{
              visibility: quessedLetters.includes(letter) || reveal ? 'visible' : 'hidden',
              color: reveal && !quessedLetters.includes(letter) === true ? 'red' : 'green',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}
export default HangmanWord
