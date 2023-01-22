import logo from './logo.svg';
import './App.css';
import Child from './Child';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Button from './Button';

function App() {
    return (
      <div>
        <BrowserRouter>
          <Routes> 
            <Route path='/' element={<Button />}></Route>
            <Route path='/child' element={<Child />}></Route>
          </Routes>
        </BrowserRouter> 
      </div>

    );
}

export default App;
