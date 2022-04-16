import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/InputForm/InputForm";
import MethodChooser from "./components/MethodChooser/MethodChooser";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MethodChooser />} />
        <Route path='/wave-planner' element={<InputForm />} />
        <Route path='/sprint-planner' element={<InputForm />} />
      </Routes>
    </div>
  );
}

export default App;
