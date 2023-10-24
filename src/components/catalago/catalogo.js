import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import './catalogo.css'; 

export const Catalogo = () => {
  const { items } = useContext(DataContext);

  return (
    <div className="catalogo">
      <h2>Tendencias:</h2>
      <div className="catalogo-container">
        {items.map((item) => (
          <Link to={`/catalogo/${item.id}`} key={item.id} className="catalogo-card">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};
