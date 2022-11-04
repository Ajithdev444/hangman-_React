
const HangmanWord = () => {
  const word = 'test'
  const guessedLetters = ['t','a', 's']
  return (
    <div style={{
       display:'flex',
       gap:'.25rem',
       fontSize:'6rem',
       fontWeight:'bold', 
       textTransform:'uppercase',
       fontFamily:'monospace'}} >

        {word.split('').map(( letter, index ) => (
          <span style={{ borderBottom:'.1em solid black'}} key={index}>
            <span style={{
              visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden',
            }}>{letter}</span>
            </span>
        ))}
    </div>
  )
}

export default HangmanWord