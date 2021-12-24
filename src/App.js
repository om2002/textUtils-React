import './App.css';
import { useState } from 'react'

import About from './componenets/About';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import ALert from './componenets/ALert';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode ==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor = '#273746';
      showAlert("Dark mode has been enabled ","success");
      document.title = 'TextUtil -DarkMode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled ","success");
      document.title = 'TextUtil -LightMode';
    }

    // setInterval(() => {
    //     document.title = 'Install bla  blaa';
    //   }, 2000);
  
    //   setInterval(() => {
    //     document.title = 'TextUtil';
    //   }, 1500);
  }



  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtil" About ="About Us" mode={mode} toggleMode={toggleMode}/>
      <ALert alert={alert}/>
        <div className="container">
          <Routes> 
            <Route exact path="/about" element={ <About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
          </Routes>
       
   {/* <About/> */}
     </div>
    </BrowserRouter>
  </>
  );
}

export default App;
