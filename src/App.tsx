import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/InputForm/InputForm";
import MethodChooser from "./components/MethodChooser/MethodChooser";

function App() {
  return (
    <div className='App'>
      <MethodChooser />
    </div>
  );
}

export default App;
