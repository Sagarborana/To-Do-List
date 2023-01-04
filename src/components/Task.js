import React, { useState } from "react";

const Task = () =>{

    const [firstNum,setFirstNum] = useState(0);
    const [secondNum,setSecondNum] = useState(0);
    const calcSum = (a,b) =>{
        let f = Number.parseInt(a);
        let s = Number.parseInt(b);
        return f+s;
    }
    return (
        <>
        <input type="number" name="first" onChange={(event)=> setFirstNum(event.target.value)}/>
        <br />
        <input type="number" name="second"  onChange={(event)=> setSecondNum(event.target.value)}/>

        <h2>Answer: </h2>
        
        <p>{calcSum(firstNum,secondNum)}</p>
        </>
    )
}
export default Task;