import { useEffect, useState } from "react"


const Counter = ({start=0}) => {
    const [counter, setCounter] = useState(start)
    const [warna, setWarna] = useState("red")
    // setCounter(count+1)
    useEffect(()=>{
        if(counter > 10){
            setWarna("green")
        }
        setTimeout(()=>{
            setCounter(counter+1)
        },1000)
    }, [counter])
    return (
        <>
            <h1 style={{color:warna}}>Count : {counter}</h1>
        </>
        
    )
    

}
        



export default Counter