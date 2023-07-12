
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// let name = "jeevika";

function App() {


  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = '#ffffff';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>

      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          {/* <Navbar/> */}
          {/* <TextForm heading="Enter the text to analyze" /> */}
          {/* <About /> */}
          <Switch>

            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter the text to analyze" />
            </Route>

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

