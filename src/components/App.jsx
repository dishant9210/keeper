import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App() {
  const [notes,setNotes]= useState([]);



  function addNote(note){
  let newNotes = [...notes,note];
  setNotes(newNotes);
  console.log(newNotes);
  }
  function deleteItem(id){
    let updateedNotes =notes.filter((note, index)=>{
      return index !=id;
    })
    setNotes(updateedNotes);
  }
  
  
  return (
    <div>
      <Header />
      <CreateArea  onAdd = {addNote}/>
      
      {notes.map((note,index)=>{
        return <Note key={index} id={index}  onDelete={deleteItem} title={note.title}  content={note.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
