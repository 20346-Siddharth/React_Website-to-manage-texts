import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText]=useState('Enter text here');
    //setText("ndie");
    const handleUpclick = ()=>{
        console.log("UPPER case was clicked");
        let Newtext= text.toUpperCase();
        setText(Newtext);
        props.showalert("converted to upper case","success");
    }
    const handleonchange = (event)=>{
        console.log("on change clicked");
        setText(event.target.value);
        

    }
    const handlelowclick = ()=>{
        console.log("lower case was clicked");
        let Newtext= text.toLowerCase();
        setText(Newtext);
        props.showalert("converted to lower case","success");
    }
    const cleartext = ()=>{
        console.log("text cleared");
        let Newtext= '';
        setText(Newtext);
        props.showalert("text cleared","success");
    }
    const copytext =()=>{
        var text = document.getElementById("Mybox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showalert("text copied","success");
    }
  return (
    <>
    <div className='container' style={{color:`${props.mode==='dark'?'white':'black'}`}}>
     <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value= {text}  onChange={handleonchange}
  style={{backgroundColor:`${props.mode==='dark'?'grey':'light'}`,color:`${props.mode==='dark'?'white':'black'}`} }id="Mybox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn  btn-primary mx-2" onClick={handleUpclick }>Convert to UPPER CASE </button>
<button disabled={text.length===0}className="btn  btn-primary mx-2" onClick={handlelowclick }>Convert to lower case </button>
<button disabled={text.length===0}className="btn  btn-primary mx-2" onClick={cleartext}>Clear Text</button>
<button disabled={text.length===0}className="btn  btn-primary mx-2" onClick={copytext}>copy Text</button>
    </div>

<div className="container my-3"  style={{color:`${props.mode==='dark'?'white':'black'}`}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").filter((Element)=>{return Element.length!==0}).length} words {text.length} characters with space   {text.length-text.split(" ").length+1}characters without space</p>
    <p>{text.split(" ").length * 0.008} minutes to read</p>
    <h2>preview</h2>
    <p>{text.length>0?text:"enter the text to analyze"}</p>
</div>
    </>
  )
}
