import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import IDLE from './gif/01 IDLE.gif';
import A from './gif/A.gif';
import B from './gif/B.gif';
import C from './gif/C.gif';
import D from './gif/D.gif';
import E from './gif/E.gif';
import F from './gif/F.gif';
import G from './gif/G.gif';
import I from './gif/I.gif';
import L from './gif/L.gif';
import M from './gif/M.gif';
import N from './gif/N.gif';
import O from './gif/O.gif';
import P from './gif/P.gif';
import R from './gif/R.gif';
// import Liberte from './gif/Liberte.png';
import './App.css';


function App() {
  
function voice(){
  alert('hiiiii');
}
  const [placeholder, setPlaceholder] = useState('Hi');
// alert(" HIIII");
  useEffect(() => {
    fetch('/hello').then(res => res.json()).then(data => {
      setPlaceholder(data.result);
    });
  }, []);
  var check=placeholder

  if (check==="a") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={A} className="test" alt="test" style={{width: 350, height: 250}} onClick={voice}/>
          <p>Liberte says {placeholder}</p>
        </header>
      </div>
    );
  }
  if (check==="b") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={B} className="test" alt="test" style={{width: 350, height: 250}}/>
          <p>Liberte says {placeholder}</p>
        </header>
      </div>
    );
  }
  if (check==="c") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={C} className="test" alt="test" style={{width: 350, height: 250}}/>
          <p>Liberte says {placeholder}</p>
        </header>
      </div>
    );
  }
  if (check==="d") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={D} className="test" alt="test" style={{width: 350, height: 250}}/>
          <p>Liberte says {placeholder}</p>
        </header>
      </div>
    );
  }
  if (check==="e") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={E} className="test" alt="test" style={{width: 350, height: 250}}/>
          <p>Liberte says {placeholder}</p>
        </header>
      </div>
    );
  }
  if (check==="f") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={F} className="test" alt="test" style={{width: 350, height: 250}}/>
          <p>Liberte says {placeholder}</p>
        </header>
      </div>
    );
  }
  if (check==="g") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={G} className="test" alt="test" style={{width: 350, height: 250}}/>
          <p>Liberte says {placeholder}</p>
        </header>
      </div>
    );
  }
  if (check==="i") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={I} className="test" alt="test" style={{width: 350, height: 250}}/>
          <p>Liberte says {placeholder}</p>
        </header>
      </div>
    );
  }
  if (check==="l") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={L} className="test" alt="test" style={{width: 350, height: 250}}/>
          <p>Liberte says {placeholder}</p>
        </header>
      </div>
    );
  }
  if (check==="m") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={M} className="test" alt="test" style={{width: 350, height: 250}}/>
          <p>Liberte says {placeholder}</p>
        </header>
      </div>
    );
  }
  if (check==="n") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={N} className="test" alt="test" style={{width: 350, height: 250}}/>
          <p>Liberte says {placeholder}</p>
        </header>
      </div>
    );
  }
  if (check==="o") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={O} className="test" alt="test" style={{width: 350, height: 250}}/>
          <p>Liberte says {placeholder}</p>
        </header>
      </div>
    );
  }
  if (check==="p") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={P} className="test" alt="test" style={{width: 350, height: 250}}/>
          <p>Liberte says {placeholder}</p>
        </header>
      </div>
    );
  }
  if (check==="r") {
    return (
      <div className="App">
        <header className="App-header">
          <img src={R} className="test" alt="test" style={{width: 350, height: 250}}/>
          <p>Liberte says {placeholder}</p>
        </header>
      </div>
    );
  } else {
  return (
    <div className="App">
      <header className="App-header">
        <img src={IDLE} className="tes3t" alt="idle" style={{width: 350, height: 250}}/>
        <p>Liberte says {placeholder}</p>
      </header>
    </div>
  );
}
}

export default App;