import React from 'react';
import {Catalogo} from '../catalago/catalogo'; // Importa el componente "Catalogo"
import './home.css'; // Asegúrate de tener un archivo CSS asociado

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        {/* Logo de Netflix */}
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </header>

      <div className="catalogo-container">
        <Catalogo /> {/* Inserta el componente "Catalogo" aquí */}
      </div>
    </div>
  );
};

export default Home;
