import React,{useState}from 'react'

export default function TextForm(props) {
  const Upcase=()=>{
    // console.log("uppercase was clicked"+text);
    let newText=text.toUpperCase();
    settext(newText);
    props.showalert("Converted to Uppercase!","success");
  }

  const Lwcase=()=>{
    let newText=text.toLowerCase();
    settext(newText);
    props.showalert("Converted to Lowercase!","success");
  }

  const ClrText=()=>{
    let newText=' ';
    settext(newText);
    props.showalert("Text Cleared!","success");
  }

  const CpyText=()=>{
  var text=document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showalert("Copied to Clipboard!","success");
  }

  const Extraspc=()=>{
    let newText=text.split(/[ ]+/);
    settext(newText.join(" "));
    props.showalert("Space Removed!","success");
  }
  


  const change=(event)=>{
    // console.log("onchange");
    settext(event.target.value)
  }

  const [text,settext]=useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h3>{props.heading} </h3>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={change}id="mybox" style={{backgroundColor: props.mode==='dark'?'#042743':'white',color:props.mode==='light'?'black':'white'}}rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={Upcase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={Lwcase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={ClrText}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={CpyText}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={Extraspc}>Remove Extra Space</button>
    </div>
  
    

    <div className="container my-4" style={{color:props.mode==='light'?'black':'white'}}>
      <h4>YOUR TEXT SUMMARY</h4>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words  {text.length} characters</p>
      <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
