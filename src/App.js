
import './App.css';
import Navbar from './components/Navbar';
import React,{useState} from 'react';
import TextForm from './components/TxtForm';
// import About from './components/About'
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showalert=(message,type)=>
    {
      setalert(
        {
          msg:message,
          type:type
        }   
      )
      setTimeout(() => {
        setalert(null);
      }, 1500);
    }

  const togglemode=()=>
  {
    if(mode==='light')
      {
        setmode('dark');
        document.body.style.backgroundColor='#042743';
        showalert("Blue mode enabled","success");

      }

    else
    {
        setmode('light');
        document.body.style.backgroundColor='white';
        showalert("Light mode enabled","success");
    }
  }

  return (
<>
{/* <BrowserRouter> */}
  <Navbar title="PlayWithTexts" abouttext="About"  mode={mode} togglemode={togglemode} />
  <Alert alert={alert}/>

  <div className="container my-4">
  <TextForm heading="Enter text to analyze"  mode={mode} showalert={showalert} />
  {/* <Routes> */}
     {/* <Route path="/about" element={<About mode={mode} />} /> */}
  {/* </Routes> */}
  {/* <Routes> */}
     {/* <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showalert={showalert} />}> */}
     {/* </Route> */}
  {/* </Routes> */}
</div>
{/* // </BrowserRouter> */}
</>
  );
}

export default App;




