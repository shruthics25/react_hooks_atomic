import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import atoms from "./components/ui/atoms";



function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <atoms.Cbutton buttontnName="Test" />
    </div>
  );
}

export default App;
