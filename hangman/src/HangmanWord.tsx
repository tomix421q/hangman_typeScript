type Props = {}
const HangmanWord = (props: Props) => {
  const word = 'test'
  const quessedLetters = ['t', 'l', 's']
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
      {word.split('').map((letter, index) => (
        <span style={{ borderBottom: '.1em solid black' }} key={index}>
          <span style={{ visibility: quessedLetters.includes(letter) ? 'visible' : 'hidden' }}>{letter}</span>
        </span>
      ))}
    </div>
  )
}
export default HangmanWord
