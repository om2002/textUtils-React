import React, { useState } from 'react'

export default function TextForm(props) {
     
    // using react hook here array destructing is used
    const [text, setText] = useState(""); // setText is used for change value of text
    
    const upperCaseConverter = ()=>{
    //   console.log('You click uppercase button')
       let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase ! ", "success");
    }
    
    const lowerCaseConverter = ()=>{
    
       let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase ! ", "success");
    }

    const clearText = ()=>{
    
       let newText = '';
      setText(newText);
      props.showAlert("Your text is clear ! ", "success");
    }

     const handleCopy = ()=>{
      //  var textCopy = document.getElementById('myBox');
      //  textCopy.select();
       navigator.clipboard.writeText(text)
       props.showAlert("Your text is copy ! ", "success");
     }

     const handleExtraSpaces = ()=>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "));
       props.showAlert("Extra spaces is removed ! ", "success");
     }
    // handleOnCHange is used for type(or modify) in textarea as  we have used text there 
    const handleOnChange = (event)=>{
        // here event is target the text
      setText(event.target.value)
    }

    const emptyWordCheck = (element)=>{
       return element.length !==0
       }
       
    return (
        <>
        <div className='container' style={{color : props.mode==='dark'?'white':'black' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3  my-3">
             <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange}  value={text} style={{ backgroundColor : props.mode==='dark'?'grey':'white' , color : props.mode==='dark'?'white':'black'  }}> </textarea>
            </div>
            <button disabled={text.split(' ').filter(emptyWordCheck).length === 0} className="btn btn-primary mx-2 my-1" onClick={upperCaseConverter}>Convert to UpperCase</button>
            <button disabled={text.split(' ').filter(emptyWordCheck).length === 0} className="btn btn-primary mx-2 my-1" onClick={lowerCaseConverter}>Convert to Lowercase</button>
            <button disabled={text.split(' ').filter(emptyWordCheck).length === 0} className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear Text</button>
            <button disabled={text.split(' ').filter(emptyWordCheck).length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.split(' ').filter(emptyWordCheck).length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="continer my-4" style={{color : props.mode==='dark'?'white':'black' }}>
              <h2>Your text summary</h2>
              <p>{text.split(/\s+/).filter(emptyWordCheck).length} words and {text.length} characters</p>
              <p>{0.008 * text.split(/\s+/).filter(emptyWordCheck).length} Minute read</p>

              <h2 className='my-2'>Preview</h2>
              <p>{text.length>0 ?text:'Nothing to preview '}</p>
        </div>
        </>
    )
}
