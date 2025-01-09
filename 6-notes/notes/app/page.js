'use client'
import Hallo from '../components/Hallo';
import Note from '../components/Note';
import AddNote from '../components/AddNote'
import { useState } from 'react'
const feste = ['Weihnachten', 'Ostern', 'Geburtstag', 'Bachelor bestanden','Ferienbeginn'];

export default function Home() {
  let [count, setCount] = useState(0)
  let [notes, setNotes] = useState(
    [
      {id:1, content:'Heute ist ein besonderer Tag'},
      {id:2, content:'Heute ist ein ganz besonderer Tag'},
      {id:3, content:'Heute ist ein ganz ganz besonderer Tag'},
    ]
  )

  const addNote = (text)=>{
    const newNote ={id: notes.length+1, content:text}
    setNotes([...notes, newNote])
  }

  return (
    <div>
      <h1>Meine Notizen</h1>
      <p>
        Counter:{count}
        <br></br>
        <button onClick={()=>{setCount(count+1)}}>+</button>
      </p>
      <div>
      {
        notes.map((note)=>{
          return(<Note key={note.id} content={note.content}/>)
        })
      }
      </div>
      <AddNote addNote={addNote}/>

    </div>
  );
}
