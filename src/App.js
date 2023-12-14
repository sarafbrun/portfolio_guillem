import React, { useEffect } from 'react';
import './App.css';
import { NavBar } from './components/navBar';
import { Banner } from './components/Banner';
import { PerfilProfesional } from './components/PerfilProfesional';
import { Resultados } from './components/Resultados';
import { Patrocinio } from './components/Patrocinio';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <PerfilProfesional />
      <Resultados />
      <Patrocinio />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
