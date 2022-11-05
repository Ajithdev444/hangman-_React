const HEAD = (
  <div style={{
    width:'30px',
    height:'30px',
    borderRadius:'100%',
    border:'5px solid black',
    position:'absolute',
    top:'40px',
    right:'-18px',
  }}/>
)

const BODY = (
  <div style={{
    width:'10px',
    height:'80px',
    borderRadius:'100%',
    position:'absolute',
    top:'120px',
    right:0,
  }}/>
)

const RIGHT_ARM = (
  <div style={{
    width:'100px',
    height:'10px',
    borderRadius:'100%',
    position:'absolute',
    top:'150px',
    right:'-100px',
    rotate:'-30deg',
    transformOrigin:'left bottom'
  }}/>
)

const LEFT_ARM = (
  <div style={{
    width:'100px',
    height:'10px',
    borderRadius:'100%',
    position:'absolute',
    top:'150px',
    right:'10px',
    rotate:'30deg',
    transformOrigin:'right bottom'
  }}/>
)

const RIGHT_LEG = (
  <div style={{
    width:'100px',
    height:'10px',
    borderRadius:'100%',
    position:'absolute',
    top:'210px',
    right:'-90px',
    rotate:'60deg',
    transformOrigin:'left bottom'
  }}/>
)

const LEFT_LEG = (
  <div style={{
    width:'100px',
    height:'10px',
    borderRadius:'100%',
    position:'absolute',
    top:'210px',
    right:0,
    rotate:'-60deg',
    transformOrigin:'right bottom'
  }}/>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
  return (
    <div style={{ position:'relative'}}>
      {BODY_PARTS.slice(0,numberOfGuesses)}
      <div 
      style={{
        height:'40px',
        width:'5px',
        background:'black',
        top: 0,
        right: 0,
        position:'absolute',
      }}
      />
      <div 
      style={{
        height:'5px',
        width:'100px',
        background:'black',
        marginLeft:'90px',
      }}
      />
      <div 
      style={{
        height:'200px',
        width:'5px',
        background:'black',
        marginLeft:'90px',
      }}
      />
      <div style={{ height:'5px', width:'180px', background:'black'}}/>

    </div>
  )
}

export default HangmanDrawing