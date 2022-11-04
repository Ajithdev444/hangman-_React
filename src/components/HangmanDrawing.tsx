const HEAD = (
  <div style={{
    width:'50px',
    height:'50px',
    borderRadius:'100%',
    border:'10px solid black',
    position:'absolute',
    top:'50px',
    right:'-30px',
  }}/>
)

const BODY = (
  <div style={{
    width:'10px',
    height:'100px',
    borderRadius:'100%',
    position:'absolute',
    top:'120px',
    right:0,
  }}/>
)

const HangmanDrawing = () => {
  return (
    <div style={{ position:'relative'}}>
      {HEAD}
      {BODY}
      <div 
      style={{
        height:'50px',
        width:'10px',
        background:'black',
        top: 0,
        right: 0,
        position:'absolute',
      }}
      />
      <div 
      style={{
        height:'10px',
        width:'200px',
        background:'black',
        marginLeft:'120px',
      }}
      />
      <div 
      style={{
        height:'400px',
        width:'10px',
        background:'black',
        marginLeft:'120px',
      }}
      />
      <div style={{ height:'10px', width:'250px', background:'black'}}/>

    </div>
  )
}

export default HangmanDrawing