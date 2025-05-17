import { useState , useEffect } from "react";


export default function Progress() {

    const [progress , setProgress] = useState(0);

    useEffect(()=>{
        const interval = 20;
        const increment = 1;

        const timer = setInterval(()=>{
            setProgress((prev) => {
                if(prev >= 100){
                    clearInterval(timer);
                    return 100;
                }
                else{
                    return prev + increment;
                }
            })


        return (() => clearInterval(timer))
        } , interval);        
    })

    return(

        <div style={{
            width: '100%' ,
            height: '25px',
            backgroundColor: '#eee',
            border: '1px solid black'
        }}>
            <div style={{
                width: `${progress} %` ,
                height: '100%',
                backgroundColor: '#4caf50'
            }}>
            </div>
        </div>

    )
}