import "./App.css";
import React,{useState} from 'react'

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null); 
  const showalert = (message,type)=>{
        setalert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setalert(null);
        }, 1000);
  }
  const removebodyclass=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
  }
  const togglemode=(cls)=>{
    removebodyclass();
    document.body.classList.add('bg-'+cls);
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showalert("Dark Mode has been enabled","success");
      document.title = "textUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("light Mode has been enabled","success");
      document.title = "textUtils - light Mode";
    }
  }
  
  return (
      <>
    <Navbar title="TextUtils-props" abouttext="About2.0" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <Router>
         <Routes>
              <Route path="/about"
              element={ <About />}
              />
                      
              <Route path="/"
                element={<TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode} />}
              />
        </Routes>
      </Router>
       {/* <TextForm heading="Enter the text to analyze"/>  */}
 
      
    </div>
      </>
  );
}

export default App;
