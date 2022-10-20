import './App.css';
import NavBar from './component/NavBar';
import FormForTextArea from './component/FormForTextArea';
import React, { useState } from 'react'
import About from './component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Routes
} from "react-router-dom";
import Alert from './component/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert,setAlert]=useState(null);

  const chageMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = 'black';
      showAlert('success','Dark Mode Enable');
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert('success','Light Mode Enable');
    }

  }

  const showAlert=(alertType,alertName)=>{
    setAlert({
      type:alertType,
      msg:alertName
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
  <>
      <Router>
        <NavBar title="TextFormater" mode={mode} chageMode={chageMode} />
        <Alert alert={alert}/>
        <div className='container'>
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
            {/* <About mode={mode} />
          </Route> */}
          <Route exact path="/" element={<FormForTextArea formTitle="Enter Text Here For Analyze" mode={mode} showAlert={showAlert}/>} />
            {/* <FormForTextArea formTitle="Enter Text Here For Analyze" mode={mode} />
          </Route> */}
        </Routes>
        </div>
      </Router>
      </>
  );
}

export default App;
