import React, { useState } from 'react'

export default function FormForTextArea(props) {

  const changeToUppercase = () => {
    // const newText=text.toUpperCase
    setText(text.toUpperCase());
    props.showAlert('success','Text Changed To Upper Case');
    // console.log("upper case call");
  }

  const changeToLowercase=()=>{
    setText(text.toLowerCase());
    props.showAlert('success','Text Changed To Lower Case');
  }

  const clearText=()=>{
    setText("");
    props.showAlert('success','Texted Cleared');
  }

  const textCopy=()=>{
    navigator.clipboard.writeText(text);
    alert("text copy");
    props.showAlert('success','Text Copy To Clipboard');
  }

  const removeExtraSpaces=()=>{
    const newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('success','Remove Extra Space');
  }

  const chageText=(event)=>{
    setText(event.target.value)
  }
  

  const [text, setText] = useState('');
  //text="new text" ; //wrong way to change the text
  // setText("new text");//correct way to change text
  return (
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
      <h1>{props.formTitle}</h1>
      <div className="mb-3">
        <label htmlFor="myBox">Enter Text....</label>
        <textarea className="form-control mt-2" placeholder="Text here........" id="myBox" rows="5" value={text} onChange={chageText}
        style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'grey'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={changeToUppercase}>Convert To Uppercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={changeToLowercase}>Conver To Lowercase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={clearText}>Clear</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={textCopy}>Copy Text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={removeExtraSpaces} >Remove Extra Spaces</button>
      <h3>Text Summery</h3>
      <div>Total Word Is: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} And Total Character Is: {text.length}</div>
      <h3>Preview</h3>
      <div>{text.length>0?text:'Please Enter Text For Preview'}</div>
    </div>
  )
}

FormForTextArea.defaultProps = {
  formTitle: "Your Title Goes Here"
}