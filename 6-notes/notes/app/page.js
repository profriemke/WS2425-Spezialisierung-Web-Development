'use client'
import Hallo from '../components/Hallo';
import Note from '../components/Note';
import AddNote from '../components/AddNote'
import { useState, useEffect } from 'react'
const feste = ['Weihnachten', 'Ostern', 'Geburtstag', 'Bachelor bestanden','Ferienbeginn'];

export default function Home() {
  let [count, setCount] = useState(0)
  let [notes, setNotes] = useState([])

  const addNote = (text)=>{
   fetch('/api/notes', {
     method :'POST',
     headers:{
      'Content-Type': 'application/json'
     },
     body: JSON.stringify(text)
   })
   .then((response)=>response.json())
   .then ((data)=>{
      console.log(data.id) // {id: 'BCDEFG'}
    setNotes([...notes, {id: data.id, text: text}])
   })
   .catch(err => console.log(err))
   }

  }

  useEffect(()=>{
    fetch('/api/notes')
    .then((response)=> response.json() )
    .then((data) =>{
      console.log('data:')
      console.log(data)
      setNotes(data)
    })
  }, [])

  return (
    <div>
      <h1>Meine Notizen</h1>
      <p>
        Counter:{count}
        <br></br>
        <button onClick={()=>{setCount(count+1)}}>+</button>
      </p>
      <div className="float-start">
      {
        notes.map((note)=>{
          return(<Note key={note.id} content={note.content}/>)
        })
      }
      </div>
      <p className="float-none"> <AddNote addNote={addNote}/></p>
     

    </div>
  );
}
