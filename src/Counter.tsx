import React, {useState} from 'react'

function Counter(){
  const [Count, setCount] = useState<number>(0) 
  const onIncrease = ()=>{
      setCount(Count + 1)
  }
  const onDecrease = () =>{
      setCount(Count -1)
  }

  return (
     <div>
          
        <h1>  {Count}</h1>
          <div>
              <button onClick={onIncrease}>+1</button>
              <button onClick={onDecrease}>-1</button>
          </div>
     </div>
  )
}

export default Counter
