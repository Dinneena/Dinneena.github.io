import "./App.css";
import React from "react";
import Git from "./pngegg.png";
import Linkedin from "./linkedin.png";
import logo from "./desktop.svg";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <body className="App-body">
        <div className="App-left-half">
          <article>
            <h3 className="myName">Áilne Dinneen</h3>
            <p>Software Engineering Student</p>
            <a
              className="App-link"
              href="https://www.linkedin.com/in/ailne-dinneen-610662169/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img-responsive" alt="Git" src={Linkedin} />
            </a>
            <a
              className="App-link"
              href="https://github.com/Dinneena/Dinneena.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img-responsive" alt="Git" src={Git} />
            </a>
          </article>
        </div>
        <div className="App-right-half">
          <article>
            <img src={logo} className="App-logo" alt="logo" />
          </article>
        </div>
      </body>
    </div>
  );
}

export default App;
