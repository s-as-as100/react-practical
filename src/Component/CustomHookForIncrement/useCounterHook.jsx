import { useState } from "react"

const useCounter =() =>{
  const [counter,setCounter] = useState(0);

  const incrementCounter =() =>{
    setCounter(counter+1)
  }

  const decrementCounter =() =>{
    setCounter(counter-1)
  }
    return {
        incrementCounter,
        decrementCounter
    }
}
export default useCounter;