'use client'
import { useState } from 'react'
export default function AddNote(props){
    let [ text, setText ] = useState('')
    let [show, setShow] = useState(0)

    const changeText =(e)=>{
        setText(e.target.value)
    }
    if(show==1){
        return(
            <div>
                {text}
                <br/>
                <input type="text" value={text} onChange={changeText}/>
                <button onClick={()=>{props.addNote(text); setShow(0); setText('')}}>Notiz eintragen</button>
            </div>
        )
    } else{
        return(
        <button className="bg-blue-700 text-white w-20 h-20 text-2xl m-4 rounded-full" onClick={()=>{setShow(1)}}>+</button>
        )
    }


}