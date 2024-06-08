import React from "react";
import { useState } from "react";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';




function CreateArea({onAdd}) {

  const[started,setStarted] = useState(false);
  const [textInput,setTextInput]= useState({
    title: "",
    content: ""
  });
  function handleChange(e){
    const {name ,value} = e.target
    if(name === "title"){
      setTextInput({...textInput,title:value})
    }else{
      setTextInput({...textInput,content:value})
    }
    console.log(textInput);
    
  }
  function handleClick(){
    onAdd(textInput);
    setTextInput({
      title: "",
      content: ""
    });
  }
  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submit action
    
    console.log("Form submitted with input:");
}

const handleFocus= ()=>{
  setStarted(true);
  console.log(started)
}
  return (
    <div>
      <form className="create-note"  onSubmit={handleSubmit}>
        {started && <input name="title"  value = {textInput.title }onChange={handleChange} placeholder="Title" />}
        <textarea name="content" onFocus={handleFocus} value = {textInput.content} onChange={handleChange} placeholder="Take a note..."  rows={started?"3":"1"} />
        <Zoom in ={started}>
        <Fab className="CustomFab" onClick={handleClick}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
