import React from 'react'

function About(props) {
let myStyle={
  color:props.mode==='dark'?'white':'black',
  backgroundColor:props.mode==='dark'?'#1e3e58':'white'
}

  return (
  <>
    <div className="accordion" id="accordionExample" >
    <h1 className="my-3" style={{color:props.mode==='dark'?'white':'black'}}>About Us</h1>
  <div className="accordion-item"style={myStyle} >
    <h2 className="accordion-header">
      <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze Your Texts</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle} >
      Welcome to the <strong>"PlayWithTexts"</strong>website, where you can delve deeper into the content you work with. This offers a comprehensive examination of your text, helping you to change your texts according to you and interpret its various elements.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>User Friendly</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      You can quickly identify the main idea and purpose of your text, highlight key facts and examples, and check how it's organized. Ensure smooth transitions between paragraphs and sentences to improve flow. Analyze your word choices, sentence structures.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong> Free To Use</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Welcome to our website, where you can enjoy all features for free, including convert your texts to smallcase,uppercase,copy and many more. This powerful tool helps you explore and understand your text with ease. Quickly identify the main idea and purpose, highlight key facts and examples, and check how your text is organized. 
      </div>
    </div>
  </div>
</div>
  </>
  )
}

export default About
