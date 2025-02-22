"use client"
import { useState,useEffect } from "react"
const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(count)
    }, [count])
    console.log("This is the Client Component Page");
    
    return (
        <button className="bg-emerald-400 border-red-500 m-10 p-10 rounded-lg" onClick={() => setCount(count + 1)}>Count: {count}</button>
    )
}

export default Counter
