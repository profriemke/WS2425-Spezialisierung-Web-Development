'use client'
import { useState } from 'react'
export default function AddNote(props){
    let [ text, setText ] = useState('')
    const changeText =(e)=>{
        setText(e.target.value)
    }
    return(
        <div>
            {text}
            <br/>
            <input type="text" value={text} onChange={changeText}/>
            <button onClick={()=>{props.addNote(text)}}>Notiz eintragen</button>
        </div>
    )

}