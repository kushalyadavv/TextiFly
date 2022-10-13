import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upper case!", "success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lower case!", "success")
    }
    const handleClearClick = ()=>{
        let newText = ''
        setText(newText)
        props.showAlert("Text cleared!", "success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    
  return (
    <>
<div className='container' style={{color: props.mode==='light'?'#101722':'white'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='light'?'#101722':'white'}} id="myBox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
     <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
     <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
</div>
<div className='container my-3' style={{color: props.mode==='light'?'#101722':'white'}}>

<h1>Your text summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the textbox above to preview it above"}</p>
</div>
</>
  )
}
