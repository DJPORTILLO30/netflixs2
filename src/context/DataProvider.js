import React, { createContext, useEffect, useState } from 'react';
import { firestore } from '../firebase.js';
import { collection,getDocs } from "firebase/firestore";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const catalagoCollection = collection(firestore,'catalogo');
        const snapshot = await getDocs(catalagoCollection);
        const data= snapshot.docs.map((doc)=>doc.data());
        setItems(data);
      } catch (error) {
        console.error('Error al obtener datos del catálogo: ', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <DataContext.Provider value={{ items }}>
      {children}
    </DataContext.Provider>
  );
};
