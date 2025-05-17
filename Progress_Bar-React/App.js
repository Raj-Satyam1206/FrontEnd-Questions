import { useState } from "react";
import Progress from "./Progress";

export default function App(){


    const [bars, setBars] = useState([]);

    const addBar = () => {
        setBars((prev) => [
            ...prev,
            {id:Date.now()}
        ]);
    };

    const deleteBar = () => {
        setBars((prev) => prev.slice(0,-1));
    }

    return (
        <>
            <button onClick={addBar}>ADD</button>
            <button onClick={deleteBar}>DELETE</button>

            {bars.map((bar,index) => {
                <Progress key={index} />
            })}

        </>
        
    )
}