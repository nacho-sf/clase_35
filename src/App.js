import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import '../src/styles/styles.scss'

import {userContext} from './context/userContext';



function App() {

  const [user, setUser] = useState("Guille"); // state para componente funcional

  const login = (name) => {
    setUser(name); // user = name. Ej: name="Guille" --> user = "Guille"
  }

  const logout = () => {
    setUser(""); // user = ""
  }

  const data = {
    user,
    login,
    logout
  }

  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={data}>
        <Header />
        <Main />
        </userContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;